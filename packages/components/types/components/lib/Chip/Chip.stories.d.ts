import type { Meta } from '@storybook/react';
import Chip from '../Chip/Chip';
import { type ComponentProps } from 'react';
declare const meta: Meta<typeof Chip>;
export default meta;
type ChipProps = ComponentProps<typeof Chip>;
type AllChipProps = ChipProps & Record<'filterVariant', Extract<ChipProps, {
    type: 'filter';
}>['variant']> & Record<'inputVariant', Extract<ChipProps, {
    type: 'input';
}>['variant']> & Record<'categoryColor', Extract<ChipProps, {
    type: 'category';
}>['color']> & Record<'stateColor', Extract<ChipProps, {
    type: 'state';
}>['color']>;
export declare const All: {
    ({ filterVariant, inputVariant, categoryColor, stateColor, ...args }: AllChipProps): import("react/jsx-runtime").JSX.Element | null;
    args: {
        type: string;
        label: string;
        detail: string;
        options: string[];
        onIsOpenChange: import("@vitest/spy").Mock<(...args: any[]) => any>;
        onSelectedOptionChange: import("@vitest/spy").Mock<(...args: any[]) => any>;
        onRemoveButtonClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
    argTypes: {
        type: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        label: {
            control: {
                type: string;
            };
            description: string;
        };
        filterVariant: {
            name: string;
            control: {
                type: string;
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            if: {
                arg: string;
                eq: string;
            };
        };
        inputVariant: {
            name: string;
            control: {
                type: string;
            };
            options: string[];
            description: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        startIcon: {
            control: {
                type: string;
            };
            description: string;
        };
        endIcon: {
            control: {
                type: string;
            };
            description: string;
            if: {
                arg: string;
                neq: string;
            };
        };
        disabled: {
            control: {
                type: string;
            };
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        options: {
            control: {
                type: string;
            };
            description: string;
            defaultValue: string[];
            if: {
                arg: string;
                eq: string;
            };
        };
        initialIsOpen: {
            control: {
                type: string;
            };
            description: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        initialSelectedOption: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        isOpen: {
            control: {
                type: string;
            };
            description: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        selectedOption: {
            control: {
                type: string;
            };
            options: (string | null)[];
            description: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        onIsOpenChange: {
            control: boolean;
            description: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        onSelectedOptionChange: {
            control: boolean;
            description: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        onRemoveButtonClick: {
            control: boolean;
            description: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        categoryColor: {
            name: string;
            control: {
                type: string;
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            if: {
                arg: string;
                eq: string;
            };
        };
        detail: {
            control: {
                type: string;
            };
            description: string;
            if: {
                arg: string;
                eq: string;
            };
        };
        stateColor: {
            name: string;
            control: {
                type: string;
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            if: {
                arg: string;
                eq: string;
            };
        };
    };
};
export declare const FilterChipUncontrolled: {
    (args: ChipProps): import("react/jsx-runtime").JSX.Element;
    args: {
        type: string;
        size: string;
        label: string;
        options: string[];
        variant: string;
        disabled: boolean;
        onIsOpenChange: import("@vitest/spy").Mock<(...args: any[]) => any>;
        onSelectedOptionChange: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
    argTypes: {
        type: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        options: {
            control: {
                type: string;
            };
            description: string;
            defaultValue: string[];
        };
        label: {
            control: {
                type: string;
            };
            description: string;
        };
        variant: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        startIcon: {
            control: {
                type: string;
            };
            description: string;
        };
        endIcon: {
            control: {
                type: string;
            };
            description: string;
        };
        disabled: {
            control: {
                type: string;
            };
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        initialIsOpen: {
            control: {
                type: string;
            };
            description: string;
        };
        initialSelectedOption: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        onIsOpenChange: {
            control: boolean;
            description: string;
        };
        onSelectedOptionChange: {
            control: boolean;
            description: string;
        };
    };
};
export declare const FilterChipControlled: {
    (args: Extract<ChipProps, {
        type: "filter";
    }>): import("react/jsx-runtime").JSX.Element;
    args: {
        type: string;
        size: string;
        label: string;
        options: string[];
        variant: string;
        disabled: boolean;
    };
    argTypes: {
        type: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        options: {
            control: {
                type: string;
            };
            description: string;
            defaultValue: string[];
        };
        label: {
            control: {
                type: string;
            };
            description: string;
        };
        variant: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        startIcon: {
            control: {
                type: string;
            };
            description: string;
        };
        endIcon: {
            control: {
                type: string;
            };
            description: string;
        };
        disabled: {
            control: {
                type: string;
            };
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
    };
};
export declare const InputChip: {
    (args: ChipProps): import("react/jsx-runtime").JSX.Element;
    args: {
        type: string;
        size: string;
        label: string;
        variant: string;
        disabled: boolean;
        onRemoveButtonClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
    argTypes: {
        type: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        label: {
            control: {
                type: string;
            };
            description: string;
        };
        variant: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        startIcon: {
            control: {
                type: string;
            };
            description: string;
        };
        endIcon: {
            control: {
                type: string;
            };
            description: string;
        };
        disabled: {
            control: {
                type: string;
            };
            description: string;
        };
        onRemoveButtonClick: {
            control: boolean;
            description: string;
        };
    };
};
export declare const CategoryChip: {
    (args: ChipProps): import("react/jsx-runtime").JSX.Element;
    args: {
        type: string;
        size: string;
        color: string;
        label: string;
        detail: string;
        disabled: boolean;
    };
    argTypes: {
        type: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        color: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        label: {
            control: {
                type: string;
            };
            description: string;
        };
        detail: {
            control: {
                type: string;
            };
            description: string;
        };
        disabled: {
            control: {
                type: string;
            };
            description: string;
        };
    };
};
export declare const StateChip: {
    (args: ChipProps): import("react/jsx-runtime").JSX.Element;
    args: {
        type: string;
        size: string;
        color: string;
        label: string;
        disabled: boolean;
    };
    argTypes: {
        type: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        color: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        label: {
            control: {
                type: string;
            };
            description: string;
        };
        startIcon: {
            control: {
                type: string;
            };
            description: string;
        };
        disabled: {
            control: {
                type: string;
            };
            description: string;
        };
    };
};
