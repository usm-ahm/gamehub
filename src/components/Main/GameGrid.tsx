import { Typography } from "@mui/material";
import { useGames } from "../../hooks";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  if (isLoading)
    return (
      <Grid2 container spacing={2} sx={{ p: 2 }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Grid2 key={index} xs={12} sm={6} md={4} lg={3}>
            <GameCardContainer>
              <GameCardSkeleton />
            </GameCardContainer>
          </Grid2>
        ))}
      </Grid2>
    );

  return (
    <>
      {error && <Typography>{error}</Typography>}
      <Grid2 container spacing={2} sx={{ p: 2 }}>
        {games.map((game) => (
          <Grid2 key={game.id} xs={12} sm={6} md={4} lg={3}>
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default GameGrid;
