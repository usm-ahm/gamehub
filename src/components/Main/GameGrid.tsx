import { Typography } from "@mui/material";
import { useGames } from "../../hooks";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Typography>{error}</Typography>}
      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </>
  );
};

export default GameGrid;
