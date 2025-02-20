import PropTypes from "prop-types";
import { GifItem } from "../components";
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
