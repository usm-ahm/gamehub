import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <Typography>{error}</Typography>;

  return (
    <List>
      {data.map((genre, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar src={getCroppedImageUrl(genre.image_background)} />
          </ListItemAvatar>
          <ListItemText primary={genre.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
