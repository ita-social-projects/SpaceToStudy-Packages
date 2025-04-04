import React from 'react';
import { AlertProps as MuiAlertProps, AlertTitleProps } from '@mui/material';
import './Alert.scss';
export type AlertColor = 'success' | 'info' | 'warning' | 'error';
export declare const AlertTitle: {
    ({ children, ...props }: AlertTitleProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
interface AlertProps extends MuiAlertProps {
    title?: string;
    description?: string;
    label?: string;
}
declare const Alert: React.ForwardRefExoticComponent<Omit<AlertProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Alert;
