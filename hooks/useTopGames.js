import { useState, useEffect } from "react";
import { rawg } from "../instance";

const useTopGames = (size) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTopGames = async () => {
      try {
        setLoading(true);
        const res = await rawg.get("/games/lists/popular", {
          params: {
            page: 1,
            page_size: size,
            discover: true,
          },
        });
        if (res.status === 200) {
          setGames(res.data.results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getTopGames();
  }, []);

  return { games, loading };
};

export default useTopGames;
