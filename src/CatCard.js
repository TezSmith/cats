import React from "react";
import { useCatDetails } from "./hooks/useCatDetails";

const CatCard = ({ cat, showDetails }) => {

    const { id, url, height, width } = cat;

    const info = useCatDetails(id);

    return (
        <li key={id}>
            {showDetails && <div data-testid="cat-info">
                <h2>{info.breeds[0].name}</h2>
                <p>{info.breeds[0].description}</p>
            </div>}
            <img src={url} alt={id} height={height} width={width} />
        </li>
    );
}

export default CatCard;