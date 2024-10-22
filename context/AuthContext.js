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
                console.log(userCollection);
                const userSnapshot = await getDocs(userCollection);
                
                setTotalUsers(userSnapshot.size);
                
                const userList = userSnapshot.docs.map(doc => ({
                    ...doc.data() 
                }));
                
                let emotionCount = 0; 

                userList.forEach((user, index) => {
                    console.log(index, "User Data: ", user);  
                    
                    Object.keys(user).forEach((year) => {
                        console.log("year: ", year)
                        if (user[year]) {
                            Object.keys(user[year]).forEach((month) => {
                                console.log("Month:", month);
                                
                                Object.keys(user[year][month]).forEach((day) => {
                                    console.log("Day: ", day)
                                    emotionCount += 1;
                                });
                            });
                            } else {
                            console.log("No data for 2024.");
                        }
                    });
                });

                setTotalEmotions(emotionCount);
                
    
            } catch (error) {
                console.error("Error fetching user count: ", error);
            }
        }
    
        fetchUserCount();
    }, [totalUsers, totalEmotions, totalFeedback]);
    

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
