import { IGif, IGifAPI } from "../interfaces/Gif";

const api_key = process.env.VITE_GIPHY_KEY;
const limit = 2;
export const getGifs = async (category: string): Promise<IGif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=${limit}&q=${category}`;
  const response = await fetch(url);
  const { data }: { data: IGifAPI[] } = await response.json();

  const gifs: IGif[] = data.map((img:IGifAPI) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
