import { FormControlLabel, Switch as MUISwitch } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface Props {
  label?: string;
  labelPlacement?: "end" | "start" | "top" | "bottom";
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default";
  onChange?: (checked: boolean) => void;
}

const Switch = ({
  label = "",
  labelPlacement = "end",
  color = "default",
  onChange,
}: Props) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (onChange) onChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <MUISwitch
          checked={checked}
          color={color}
          onChange={handleChange}
          inputProps={{ role: "switch" }}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default Switch;
