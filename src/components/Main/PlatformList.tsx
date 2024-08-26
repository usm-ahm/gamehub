import { styled } from "@mui/material";
import { Platform } from "../../hooks/useGames";
import { Icon } from "@iconify/react";
import { grey } from "@mui/material/colors";

interface Props {
  platforms: Platform[];
}

const PlatformIcon = styled(Icon)({
  width: 20,
  height: 20,
  color: grey[600],
  padding: 1,
});

const PlatformList = ({ platforms }: Props) => {
  const platformIcons: { [key: string]: string } = {
    pc: "mdi:microsoft-windows",
    playstation: "cib:playstation",
    xbox: "cib:xbox",
    android: "cib:android",
    ios: "mdi:apple-iphone",
    mac: "cib:apple",
    linux: "cib:linux",
    nintendo: "cib:nintendo",
    web: "mdi:web",
  };

  return (
    <>
      {platforms.map((platform) => (
        <PlatformIcon key={platform.slug} icon={platformIcons[platform.slug]} />
      ))}
    </>
  );
};

export default PlatformList;
