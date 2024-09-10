import { Grid2, Theme, useMediaQuery } from "@mui/material";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/Main";
import { GenreList } from "./components/Aside";

function App() {
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12 }}>
        <NavBar />
      </Grid2>
      {isLargeScreen && (
        <Grid2 size={{ lg: 2 }}>
          <GenreList />
        </Grid2>
      )}
      <Grid2 size={{ xs: 12, lg: 10 }}>
        <GameGrid />
      </Grid2>
    </Grid2>
  );
}

export default App;
