import React from 'react';
import './Chip.scss';
declare const FilterChip: React.ForwardRefExoticComponent<{
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    type: "filter";
} & {
    label: string;
} & {
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
} & {
    initialIsOpen?: boolean;
    initialSelectedOption?: string | null;
    isOpen?: boolean;
    onIsOpenChange?: (isOpen: boolean) => void;
    onSelectedOptionChange?: (option: string) => void;
    options: string[];
    selectedOption?: string | null;
    variant?: "filled" | "minimal";
} & React.RefAttributes<HTMLDivElement>>;
declare const InputChip: React.ForwardRefExoticComponent<{
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    type: "input";
} & {
    label: string;
} & {
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
} & {
    onRemoveButtonClick?: () => void;
    variant?: "filled" | "outlined" | "filled-outlined";
} & React.RefAttributes<HTMLDivElement>>;
declare const CategoryChip: React.ForwardRefExoticComponent<{
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    type: "category";
} & {
    label: string;
} & {
    color?: import("./Chip.types").ChipColor;
    detail: string;
} & React.RefAttributes<HTMLDivElement>>;
declare const StateChip: React.ForwardRefExoticComponent<{
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    type: "state";
} & {
    label: string;
} & Pick<{
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
}, "startIcon"> & {
    color?: import("./Chip.types").ChipColor;
} & React.RefAttributes<HTMLDivElement>>;
export { CategoryChip, FilterChip, InputChip, StateChip };
