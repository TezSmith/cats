import { useEffect, useState } from "react";
export const useCatDetails = (id = 1) => {

  const url = `https://api.thecatapi.com/v1/images/${id}`;

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal;
    fetch(url, {
      signal: signal
    })
      .then((res) => res.json())
      .then((res) => {
        setInfo(res)
      })
      .catch(() => {
        console.log('whoops')
      })
      return () => {
        controller.abort()
      }
  }, [url]);
  
  return info
}