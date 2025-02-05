import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue));

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}
