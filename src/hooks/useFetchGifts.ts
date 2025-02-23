import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";
import { IGif } from "../interfaces";
export const useFetchGifts = (category: string) => {
  const [images, setImages] = useState<IGif[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (category: string) => {
    const newImages: IGif[] = await getGifs(category);
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
