import { Typography } from "@mui/material";
import { useGames } from "../../hooks";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  if (isLoading)
    return (
      <Grid2 container spacing={2} sx={{ p: 2 }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Grid2 key={index} xs={12} sm={6} md={4} lg={3}>
            <GameCardSkeleton />
          </Grid2>
        ))}
      </Grid2>
    );

  if (error) return <Typography>{error}</Typography>;

  return (
    <Grid2 container spacing={2} sx={{ p: 2 }}>
      {data.map((game) => (
        <Grid2 key={game.id} xs={12} sm={6} md={4} lg={3}>
          <GameCard game={game} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default GameGrid;
