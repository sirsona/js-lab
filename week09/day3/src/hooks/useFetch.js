

import { useCallback, useEffect, useState } from "react";

// useFetch hook
export function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (signal) => {

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(url, { signal });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            setData(json);

        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message);
            }

        } finally {
            if (!signal.aborted) {
                setLoading(false);
            }
        }


    }, [url]);


    useEffect(() => {
        const controller = new AbortController();

        fetchData(controller.signal);

        return () => controller.abort();
    }, [fetchData]);

    const refetch = useCallback(() => {
        const controller = new AbortController();
        fetchData(controller.signal);

    }, [fetchData]);

    return { data, loading, error, refetch };
}