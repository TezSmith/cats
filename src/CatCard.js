import React, { useEffect, useState } from "react";
import { useCatDetails } from "./hooks/useCatDetails";

const CatCard = ({ cat, showDetails }) => {

    const { id, url, height, width } = cat;

    const info = useCatDetails(id);

    return (
        <li key={id}>
            {showDetails && <p data-testid="cat-name">{info.breeds[0].name}</p>}
            {showDetails && <p data-testid="cat-desc">{info.breeds[0].description}</p>}
            <img src={url} alt={id} height={height} width={width} />
        </li>
    );
}

export default CatCard;