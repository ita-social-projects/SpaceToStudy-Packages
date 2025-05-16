import React, { forwardRef } from "react";
import {
  CircularProgress,
  IconButtonProps,
  IconButton as MuiIconButton,
} from "@mui/material";
import { type To } from "react-router-dom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { cn } from "@s2s-packages/utils";
import "./IconButton.scss";

export enum IconButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Error = "error",
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
  children?: React.ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, S2SIconButtonProps>(
  (
    {
      variant = IconButtonVariant.Primary,
      size = "md",
      loading = false,
      disabled = false,
      toggleAble = false,
      isToggled = false,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const classNamesContainerIconBG = cn(
      "s2s-icon-button",
      `s2s-icon-button--${size}`,
      `s2s-icon-button--${variant}${
        toggleAble && isToggled ? "-toggle-able" : ""
      }`
    );

    const classNamesContainerIcon = cn(
      "s2s-icon",
      `s2s-icon--${size}`,
      `s2s-icon--${variant}${toggleAble && isToggled ? "-toggle-able" : ""}`
    );

    const loaderSizes = {
      xs: 12,
      sm: 16,
      md: 20,
      lg: 24,
    };

    const loader = (
      <CircularProgress data-testid="loader" size={loaderSizes[size]} />
    );

    const buttonContent = loading
      ? loader
      : children ?? (
          <AddRoundedIcon
            className={classNamesContainerIcon}
            data-testid="AddRoundedIcon"
          />
        );

    return (
      <MuiIconButton
        className={classNamesContainerIconBG}
        disabled={loading || disabled}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </MuiIconButton>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
