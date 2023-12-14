import { useState, useEffect } from "react";
import { rawg } from "../instance";

const useGames = (url) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGames = async () => {
      try {
        setLoading(true);
        const res = await rawg.get(url);

        console.log(res);
        if (res.status === 200) {
          setGames(res.data.results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getGames();
  }, []);

  return { games, loading };
};

export default useGames;
