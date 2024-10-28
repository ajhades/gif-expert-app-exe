import { useEffect } from "react";
import { getGifs } from "./helpers/getGifts";
export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <article>
      <h3>{category}</h3>
      <p>{category}</p>
    </article>
  );
};
