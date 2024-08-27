import { Typography } from "@mui/material";
import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <Typography>{error}</Typography>;
};

export default GenreList;
