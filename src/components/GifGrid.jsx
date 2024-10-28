import { useState, useEffect } from "react";

import { GifItem } from "../components/GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);

  return (
    <article>
      <h3>{category}</h3>
      {isLoading && <h2>... Cargando ...</h2>}
      <ol className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </ol>
    </article>
  );
};
