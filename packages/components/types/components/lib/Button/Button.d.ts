import React, { ReactNode } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import './Button.scss';
declare const sizes: readonly ["xs", "sm", "md", "lg"];
declare const variants: readonly ["primary", "tonal", "text-primary", "text-secondary", "tonal-success", "tonal-error"];
type BaseButtonProps = {
    loading?: boolean;
    size?: (typeof sizes)[number];
    variant?: (typeof variants)[number];
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    to?: string;
};
export type ButtonProps = BaseButtonProps & Omit<MuiButtonProps, keyof BaseButtonProps>;
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
