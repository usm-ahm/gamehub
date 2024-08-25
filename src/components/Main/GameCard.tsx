import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Game } from "../../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ borderRadius: "10px" }}>
      <CardMedia
        component="img"
        image={game.background_image}
        alt={`${game.name} Background Image`}
      />
      <CardContent>
        <Typography variant="h6">{game.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
