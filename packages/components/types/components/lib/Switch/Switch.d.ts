import { SwitchProps } from "@mui/material/Switch";
import "./Switch.scss";
import React from "react";
interface AppSwitchProps extends Omit<SwitchProps, "size"> {
    labelPosition?: "start" | "end" | "top" | "bottom";
    size?: "sm" | "md" | "lg";
    label?: string;
    loading?: boolean;
}
declare const Switch: React.ForwardRefExoticComponent<Omit<AppSwitchProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Switch;
