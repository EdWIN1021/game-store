import { useState, useEffect } from "react";
import { rawg } from "../instance";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGames = async () => {
      try {
        setLoading(true);
        const res = await rawg.get("/games", {
          params: {
            page: 1,
            page_size: 10,
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

    getGames();
  }, []);

  return { games, loading };
};

export default useGames;
