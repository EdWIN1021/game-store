import { useState, useEffect } from "react";
import { rawg } from "../instance";

const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGenres = async () => {
      try {
        setLoading(true);
        const res = await rawg.get("/genres", {});
        if (res.status === 200) {
          setGenres(res.data.results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getGenres();
  }, []);

  return { genres, loading };
};

export default useGenres;
