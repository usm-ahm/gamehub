import { AxiosError, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface Genres {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGenre = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get<Genres>("/genres", {
          signal: controller.signal,
        });
        setGenre(response.data.results);
        setLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      }
    };

    fetchGenre();

    return () => {
      controller.abort();
    };
  }, []);

  return { genre, error, isLoading };
};

export default useGenres;
