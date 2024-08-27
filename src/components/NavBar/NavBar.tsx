import { Stack, Typography } from "@mui/material";
import { Switch } from "../Common";

const NavBar = () => {
  return (
    <Stack
      component="nav"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      role="navigation"
      aria-label="Main Navigation"
    >
      <Typography component="h1" variant="h4" fontWeight={900}>
        gamehub
      </Typography>
      <Switch id="darkModeSwitch" />
    </Stack>
  );
};

export default NavBar;
