import { Chip } from "@mui/material";
import { green, grey, yellow } from "@mui/material/colors";

interface Props {
  score: number;
}

type ChipColor = "success" | "warning" | "default";

const CriticScore = ({ score }: Props) => {
  let color: ChipColor;
  let textColor: string;

  if (score > 80) {
    color = "success";
    textColor = green[50];
  } else if (score > 60) {
    color = "warning";
    textColor = yellow[50];
  } else {
    color = "default";
    textColor = grey[600];
  }

  return (
    <Chip
      label={score}
      size="small"
      color={color}
      sx={{ fontWeight: "bold", color: textColor }}
    />
  );
};

export default CriticScore;
