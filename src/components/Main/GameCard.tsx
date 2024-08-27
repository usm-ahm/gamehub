import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Game } from "../../hooks/useGames";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardMedia
        component="img"
        image={getCroppedImageUrl(game.background_image)}
        alt={`${game.name} Background Image`}
        width={300}
        height={200}
      />
      <CardContent>
        <Typography component="h3" variant="h6">
          {game.name}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <PlatformList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default GameCard;
