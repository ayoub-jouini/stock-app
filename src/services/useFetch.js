import { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    async function getData() {
        const response = await fetch(url
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        if (response.ok) return response.json();
        throw response;

    }
    useEffect(() => {
        getData()
            .then((response) => setData(response))
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
    }, [url])

    return { data, error, loading };
}