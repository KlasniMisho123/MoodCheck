'use client'
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useContext, useState, useEffect } from 'react'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [userDataObj, setUserDataObj] = useState(null)
    const [loading, setLoading] = useState(true)
    const [totalUsers, setTotalUsers] = useState(0)
    const [totalEmotions, setTotalEmotions] = useState(0)
    const [totalFeedback, setTotalFeedback] = useState(0)

    // AUTH HANDLERS

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        setUserDataObj(null)
        setCurrentUser(null)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try {
                // Set the user to our local context state
                setLoading(true)
                setCurrentUser(user)
                if (!user) {
                    console.log('No User Found')
                    return
                }

                // if user exists, fetch data from firestore database
                console.log('Fetching User Data')
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                let firebaseData = {}
                if (docSnap.exists()) {
                    console.log('Found User Data')
                    firebaseData = docSnap.data()
                }
                setUserDataObj(firebaseData)
            } catch (err) {
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        })
        return unsubscribe
    }, [])

    // TOTAL Stats Count - chat

    useEffect(() => {
        async function fetchUserCount() {
            try {
                const userCollection = collection(db, 'users');
                console.log(userCollection); // istoriuli errori - ifixeba consol.logit 
                const userSnapshot = await getDocs(userCollection);
                console.log("Fetched user count:", userSnapshot.size);
                setTotalUsers(userSnapshot.size);
            } catch (error) {
                console.error("Error fetching user count: ", error);
            }
        };
        fetchUserCount();
    }, []);

    useEffect(() => {
    console.log("Updated totalUsers:", totalUsers);
    }, [totalUsers]);



    const value = {
        totalUsers,
        totalEmotions,
        totalFeedback,
        currentUser,
        userDataObj,
        setUserDataObj,
        signup,
        logout,
        login,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}