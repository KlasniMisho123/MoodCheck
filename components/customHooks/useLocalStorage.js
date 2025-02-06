import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        if (typeof window !== "undefined") {
            const savedValue = localStorage.getItem(key);
            return savedValue !== null ? JSON.parse(savedValue) : initialValue;
        }
        return initialValue;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
}
