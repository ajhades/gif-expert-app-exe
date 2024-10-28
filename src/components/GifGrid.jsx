import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";
import { GifItem } from "../components/GifItem";
export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async (category) => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };
  useEffect(() => {
    getImages(category);
  }, []);

  return (
    <article>
      <h3>{category}</h3>
      <ol className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </ol>
    </article>
  );
};
