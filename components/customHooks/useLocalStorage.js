import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
    if (typeof window === "undefined") return initialValue; 

    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
        if (savedValue === "true") return true;
        if (savedValue === "false") return false;
        return savedValue; 
    }

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue));

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, value);
        }
    }, [key, value]);

    return [value, setValue];
}
