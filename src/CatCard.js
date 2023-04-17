import React, { useEffect, useState } from "react";
import { useCatDetails } from "./hooks/useCatDetails";

const CatCard = ({ cat, details }) => {

    const { id, url, height, width } = cat;

    const [breedName, setBreedName] = useState('');
    const [desc, setDesc] = useState('');

    const hmm = useCatDetails(id);

    return (
        <li key={id}>
            {details && <p>Breed Name</p>}
            {details && <p>Description</p>}
            <img src={url} alt={id} height={height} width={width} />
        </li>
    );
}

export default CatCard;