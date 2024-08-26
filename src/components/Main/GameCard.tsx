import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Game } from "../../hooks/useGames";
import PlatformList from "./PlatformList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        image={game.background_image}
        alt={`${game.name} Background Image`}
      />
      <CardContent>
        <Typography variant="h6">{game.name}</Typography>
        <PlatformList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardContent>
    </Card>
  );
};

export default GameCard;
