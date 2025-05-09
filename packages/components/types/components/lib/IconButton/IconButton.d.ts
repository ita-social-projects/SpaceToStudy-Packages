import React, { ReactNode } from 'react';
import { IconButtonProps } from "@mui/material";
import { type To } from "react-router-dom";
import "./IconButton.scss";
export declare enum IconButtonVariant {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Error = "error"
}
interface S2SIconButtonProps extends Omit<IconButtonProps, "size"> {
    variant?: IconButtonVariant;
    size?: "xs" | "sm" | "md" | "lg";
    loading?: boolean;
    disabled?: boolean;
    toggleAble?: boolean;
    isToggled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    to?: To;
    children?: ReactNode;
}
declare const IconButton: React.ForwardRefExoticComponent<
    S2SIconButtonProps & React.RefAttributes<HTMLButtonElement>
>;
export default IconButton;
