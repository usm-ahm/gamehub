import { Typography } from "@mui/material";
import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <Typography>{error}</Typography>;

  return (
    <ul>
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
