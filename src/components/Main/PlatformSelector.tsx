import { Icon } from "@iconify/react";
import { Button, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import usePlatforms from "../../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (error) return null;

  return (
    <>
      <Button
        id="platform-menu-button"
        onClick={handleClick}
        endIcon={<Icon icon="mdi:chevron-down" />}
      >
        Platforms
      </Button>
      <Menu
        id="platform-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={handleClose}>
            {platform.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default PlatformSelector;
