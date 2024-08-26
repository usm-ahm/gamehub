import { Typography } from "@mui/material";
import { useGames } from "../../hooks";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Typography>{error}</Typography>}
      <Grid2 container spacing={2} sx={{ p: 2 }}>
        {games.map((game) => (
          <Grid2 key={game.id} xs={12} sm={6} md={4} lg={3}>
            <GameCard game={game} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default GameGrid;
