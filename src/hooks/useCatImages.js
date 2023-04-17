import { useState, useEffect } from "react";
export function useCatImages(deps = []) {

  const url = "https://api.thecatapi.com/v1/images/search?limit=5&has_breeds=1";

  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setImages(res)
          setLoading(false)
        })
        .catch(() => {
          setError(true)
          setLoading(false)
        })
  }, []);

  return images;
}