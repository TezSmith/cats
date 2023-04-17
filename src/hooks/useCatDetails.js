import { useEffect, useState } from "react";
export const useCatDetails = (id = 1) => {

  const url = `https://api.thecatapi.com/v1/images/${id}`;

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setInfo(res)
        })
        .catch(() => {
          console.log('whoops')
        })
  }, [url]);
  
  return info
}