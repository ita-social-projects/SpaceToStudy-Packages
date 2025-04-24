import React, { ReactNode } from "react";
import "./LinkButton.scss";
declare const sizes: readonly ["sm", "md"];
declare const variants: readonly ["light", "dark"];
interface LinkButtonProps {
    children: ReactNode;
    to: string;
    variant?: (typeof variants)[number];
    size?: (typeof sizes)[number];
    loading?: boolean;
    disabled?: boolean;
}
declare const LinkButton: React.FC<LinkButtonProps>;
export default LinkButton;
