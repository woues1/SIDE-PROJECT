import { useEffect, useState } from "react";



export const useFetch = (url: string) => {
    const [data, setData] = useState<JSON>();
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsPending(true);
                const response = await fetch(url);
                const json = await response.json();
                setIsPending(false);
                setData(json);
            } catch {
                setError(`${error} Could not Fetch Data `);
                setIsPending(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isPending, error };
};

