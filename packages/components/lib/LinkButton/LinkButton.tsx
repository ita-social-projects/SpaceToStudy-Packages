import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import { CircularProgress } from "@mui/material";

import { cn } from "@s2s-packages/utils";

import "./LinkButton.scss";

const sizes = ["sm", "md"] as const;
const variants = ["light", "dark"] as const;

interface LinkButtonProps {
  children: ReactNode;
  to: string;
  variant?: (typeof variants)[number];
  size?: (typeof sizes)[number];
  loading?: boolean;
  disabled?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  to,
  variant = "light",
  size = "md",
  loading,
  disabled,
}) => {
  const loader = (
    <CircularProgress color="inherit" data-testid="loader" size={20} />
  );

  const isDisabled = disabled || loading;

  return (
    <Link
      className={cn(
        "s2s-link-button",
        `s2s-link-button-${variant}`,
        `s2s-link-button-${size}`,
        isDisabled && "s2s-link-button-disabled",
        loading && "s2s-link-button-loading"
      )}
      to={disabled ? "#" : to}
    >
      {loading && <div className="s2s-link-button-loader">{loader}</div>}
      <div className="s2s-link-button-content">{children}</div>
    </Link>
  );
};

LinkButton.displayName = "LinkButton";

export default LinkButton;
