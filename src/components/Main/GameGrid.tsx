import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosError } from "axios";
import { Typography } from "@mui/material";

interface Game {
  id: number;
  name: string;
}

interface Games {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await apiClient.get<Games>("/games");
        setGames(response.data.results);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      {error && <Typography>{error}</Typography>}
      {games.map((game: Game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </>
  );
};

export default GameGrid;
