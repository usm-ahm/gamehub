import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return <Box sx={{ borderRadius: 2 }}>{children}</Box>;
};

export default GameCardContainer;
