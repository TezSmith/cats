import { useState, useEffect } from "react";
export function useCatImages(deps = []) {

  const url = "https://api.thecatapi.com/v1/images/search?limit=5&has_breeds=1";

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Used to prevent memory leak in test
    const controller = new AbortController()
    const signal = controller.signal;
    fetch(url, {
        signal: signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setImages(res)
      })
      .catch(() => {
        console.log('Whoops -- No cats to be found!')
      })
      return () => {
        controller.abort()
      }
  }, []);

  return images;
}