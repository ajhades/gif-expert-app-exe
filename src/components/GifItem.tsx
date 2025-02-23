import { IGifItem } from "../interfaces";
export const GifItem = ({ title, url }: IGifItem) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
