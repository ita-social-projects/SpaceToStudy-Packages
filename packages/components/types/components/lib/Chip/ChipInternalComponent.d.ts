import './Chip.scss';
declare const FilterChip: import("react").ForwardRefExoticComponent<{
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    type: "filter";
} & {
    label: string;
} & {
    endIcon?: import("react").ReactNode;
    startIcon?: import("react").ReactNode;
} & {
    initialIsOpen?: boolean;
    initialSelectedOption?: string | null;
    isOpen?: boolean;
    onIsOpenChange?: (isOpen: boolean) => void;
    onSelectedOptionChange?: (option: string) => void;
    options: string[];
    selectedOption?: string | null;
    variant?: "filled" | "minimal";
} & import("react").RefAttributes<HTMLDivElement>>;
declare const InputChip: import("react").ForwardRefExoticComponent<{
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    type: "input";
} & {
    label: string;
} & {
    endIcon?: import("react").ReactNode;
    startIcon?: import("react").ReactNode;
} & {
    onRemoveButtonClick?: () => void;
    variant?: "filled" | "outlined" | "filled-outlined";
} & import("react").RefAttributes<HTMLDivElement>>;
declare const CategoryChip: import("react").ForwardRefExoticComponent<{
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    type: "category";
} & {
    label: string;
} & {
    color?: import("./types").ChipColor;
    detail: string;
} & import("react").RefAttributes<HTMLDivElement>>;
declare const StateChip: import("react").ForwardRefExoticComponent<{
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    type: "state";
} & {
    label: string;
} & Pick<{
    endIcon?: import("react").ReactNode;
    startIcon?: import("react").ReactNode;
}, "startIcon"> & {
    color?: import("./types").ChipColor;
} & import("react").RefAttributes<HTMLDivElement>>;
export { CategoryChip, FilterChip, InputChip, StateChip };
