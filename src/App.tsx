import { Grid2 } from "@mui/material";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/Main";
import { GenreList } from "./components/Aside";

function App() {
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12 }}>
        <NavBar />
      </Grid2>
      <Grid2 size={{ xs: 0, lg: 2 }} display={{ xs: "none", lg: "block" }}>
        <GenreList />
      </Grid2>
      <Grid2 size={{ xs: 12, lg: 10 }}>
        <GameGrid />
      </Grid2>
    </Grid2>
  );
}

export default App;
