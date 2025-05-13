import { InputBaseProps } from "@mui/material/InputBase";
import { InputFieldVariantEnum } from "./InputField.constants";
import "./InputField.scss";
import React from "react";
type BaseInputFieldProps = {
    variant?: InputFieldVariantEnum;
    label?: string;
    disabled?: boolean;
    value: string;
    placeholder: string;
    helperText?: string;
    search?: boolean;
    error?: boolean;
    onClear?: () => void;
};
export type InputFieldProps = BaseInputFieldProps & Omit<InputBaseProps, keyof BaseInputFieldProps>;
declare const InputField: React.ForwardRefExoticComponent<Omit<InputFieldProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default InputField;
