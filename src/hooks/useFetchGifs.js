import { useState, useEffect } from "react";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = async (category, limit = 25) => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=6mS4kIXibnLiTJFnUfrUz0CrK62muOUI&q=${category}&limit=${limit}`
    );

    const { data } = await res.json();
    await setGifs(data);
    //setIsLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchGifs(category, 18);
  }, [category]);

  return {
    gifs,
    isLoading: false,
  };
};
