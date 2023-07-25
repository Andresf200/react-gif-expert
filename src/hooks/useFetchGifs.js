import { useState,useEffect } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
      const getImages = async () => {     
         const newImages = await getGifs(category);
         setImages(newImages);
         setIsLoading(false);
      };
      getImages();
  },[]);
    
  return {
    images: images,
    isLoading: isLoading,
  }
}

export default useFetchGifs
