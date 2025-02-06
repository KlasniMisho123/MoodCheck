import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useGetJoke() {
    const [joke, setJoke] = useState("");
    const [jokeLoading, setJokeLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJoke = useCallback(async () => {
        setJokeLoading(true);
        setError(null);

        try {
            const response = await axios.get("https://api.api-ninjas.com/v1/jokes", {
                headers: { "X-Api-Key": process.env.NEXT_PUBLIC_JOKE_API_KEY },
            });

            if (response.data && response.data.length > 0) {
                setJoke(response.data[0].joke);
            } else {
                setJoke("No joke found.");
            }
        } catch (err) {
            console.error("Error fetching joke:", err);
            setError("Failed to fetch joke.");
        } finally {
            setJokeLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchJoke();
    }, [fetchJoke]);

    return { joke, jokeLoading, error, fetchJoke };
}
