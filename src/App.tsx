import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function App() {
  return (
    <Grid2 container>
      <Grid2 xs={12}>
        <p>Nav</p>
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
