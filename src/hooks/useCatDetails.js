import { useEffect, useState } from "react";
export const useCatDetails = (id) => {

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
        console.log('Whoops -- Can\'t find more information about this cat :(')
      })
      return () => {
        controller.abort()
      }
  }, [url]);
  
  return info
}