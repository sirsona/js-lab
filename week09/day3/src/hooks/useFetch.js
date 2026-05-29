

import { useCallback, useEffect, useRef, useState } from "react";

// useFetch hook
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const controllerRef = useRef(null);

    const fetchData = useCallback(async () => {

        controllerRef.current?.abort();

        const controller = new AbortController();

        controllerRef.current = controller;

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(url, { signal: controller.signal });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            setData(json);

        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message);
            }

        } finally {

            setLoading(false);

        }


    }, [url]);


    useEffect(() => {

        fetchData();

        return () => controllerRef.current?.abort();
    }, [fetchData]);

    const refetch = useCallback(() => {
        fetchData();

    }, [fetchData]);

    return { data, loading, error, refetch };
}