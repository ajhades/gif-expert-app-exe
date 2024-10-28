const api_key = "RGWjOWi9E1Rq2ueTmo6ocT70gTV4CFug";
const limit = 2;
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=${limit}&q=${category}`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
