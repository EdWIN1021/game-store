import { useState, useEffect } from "react";
import { rawg } from "../instance";

const useNewRelease = (size) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNewRelease = async () => {
      try {
        setLoading(true);
        const res = await rawg.get("/games/lists/main", {
          params: {
            page: 1,
            page_size: size,
            discover: true,
            ordering: "-released",
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

    getNewRelease();
  }, []);

  return { games, loading };
};

export default useNewRelease;
