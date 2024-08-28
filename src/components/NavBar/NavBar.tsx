import { Stack, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Stack component="nav" role="navigation" aria-label="Main Navigation">
      <Typography component="h1" variant="h4" fontWeight={900}>
        gamehub
      </Typography>
    </Stack>
  );
};

export default NavBar;
