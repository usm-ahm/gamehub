import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid2 container>
      <Grid2 xs={12}>
        <NavBar />
      </Grid2>
      <Grid2 lg={3} display={{ xs: "none", lg: "block" }}>
        <p>Aside</p>
      </Grid2>
      <Grid2 lg>
        <p>Main</p>
      </Grid2>
    </Grid2>
  );
}

export default App;
