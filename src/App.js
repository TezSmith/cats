import React, { useState } from "react";
import { useCatImages } from "./hooks/useCatImages";
import CatCard from './CatCard';
import "./App.css";

function App() {

  const [details, showDetails] = useState(false)
  const results = useCatImages();

  const toggleDetails = () => {
    showDetails(!details);
  }

  return (
    <>
      <h1>Images of Cats</h1>
      <button onClick={toggleDetails}>Show Cat Info</button>
      <ul data-testid="cat-grid">
        {results.map((r) => <CatCard cat={r} showDetails={details} key={r.id}/>)}
      </ul>
    </>
  );
}

export default App;
