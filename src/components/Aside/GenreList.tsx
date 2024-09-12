import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading)
    return (
      <List>
        {Array.from({ length: 15 }).map((_, index) => (
          <GenreListSkeleton key={index} />
        ))}
      </List>
    );

  if (error) return <Typography>{error}</Typography>;

  return (
    <List>
      {data.map((genre, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar
              src={getCroppedImageUrl(genre.image_background)}
              alt={`Background image of ${genre.name}`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Button
                onClick={() => onSelectGenre(genre)}
                color="inherit"
                sx={{ justifyContent: "flex-start", textWrap: "nowrap" }}
              >
                {genre.name}
              </Button>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
