import { Grid2, Theme, useMediaQuery } from "@mui/material";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/Main";
import { GenreList } from "./components/Aside";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12 }}>
        <NavBar />
      </Grid2>
      {isLargeScreen && (
        <Grid2 size={{ lg: 2 }}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </Grid2>
      )}
      <Grid2 size={{ xs: 12, lg: 10 }}>
        <GameGrid selectedGenre={selectedGenre} />
      </Grid2>
    </Grid2>
  );
}

export default App;
