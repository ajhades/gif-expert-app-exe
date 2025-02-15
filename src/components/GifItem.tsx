import PropTypes, { string } from "prop-types";
import { IGifItem } from "../interfaces";
export const GifItem = ({ title, url }: IGifItem) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
