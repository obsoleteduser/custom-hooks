import { useState, useEffect, useRef } from "react";

function useFetch(url) {
  const [responseJSON, setResponseJSON] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const controller = new AbortController();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setIsLoading(false);
        setResponseJSON(json);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err);
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, [url, controller]);

  return { responseJSON, isLoading, error };
}