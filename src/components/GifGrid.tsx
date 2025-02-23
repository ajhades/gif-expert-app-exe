import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifItem } from "."
import { IGifGrid } from "../interfaces";
export const GifGrid = ({ category }: IGifGrid) => {
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