import { Stack, Typography } from "@mui/material";
import { logo } from "../assets";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      role="navigation"
      aria-label="Main Navigation"
    >
      <img src={logo} alt="Gamehub Logo" width="50px" height="50px" />
      <Typography>NavBar</Typography>
    </Stack>
  );
};

export default NavBar;
