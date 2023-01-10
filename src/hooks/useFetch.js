import React from 'react'
import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [responseJSON, setResponseJSON] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
    const fetchData = async () => {
    try {
    const response = await fetch(url);
    const data = await response.json();
    setResponseJSON(data);
    setIsLoading(false);
    } catch (error) {
    setError(error);
    }
    };
    fetchData();
    }, [url]);
    
    return { responseJSON, isLoading, error };
    };
    
    export default useFetch;
        