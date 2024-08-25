import { Stack } from "@mui/material";
import { logo } from "../../assets";
import { Switch } from "../Common";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      role="navigation"
      aria-label="Main Navigation"
    >
      <img src={logo} alt="Gamehub Logo" width="50px" height="50px" />
      <Switch />
    </Stack>
  );
};

export default NavBar;
