import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";
export const useFetchGifts = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (category) => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages(category);
  }, []);
  return {
    images,
    isLoading,
  };
};
