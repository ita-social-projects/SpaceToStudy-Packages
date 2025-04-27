import * as _mui_material_styles from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface ButtonVariants {
        tonal: React.CSSProperties;
        containedLight: React.CSSProperties;
        danger: React.CSSProperties;
        base: React.CSSProperties;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsSizeOverrides {
        extraLarge: true;
    }
    interface ButtonPropsVariantOverrides {
        tonal: true;
        containedLight: true;
        danger: true;
        base: true;
    }
}

declare const checkbox: {
    styleOverrides: {
        root: {
            [x: string]: "#90a4ae" | {
                color: "#455a64";
            };
            color: "#90a4ae";
        };
    };
};

declare const menuItem: {
    styleOverrides: {
        root: {
            '&:hover': {
                backgroundColor: "#eceff1";
            };
        };
    };
};

declare const select: {
    styleOverrides: {
        select: {
            padding: string;
        };
    };
};

declare const menuList: {
    styleOverrides: {
        root: {
            '& .MuiPaper-root': {
                boxShadow: string;
            };
            '& .MuiMenu-list': {
                padding: number;
            };
        };
    };
};

declare const svgIcon: {
    styleOverrides: {
        colorPrimary: {
            color: "#263238";
        };
        colorSecondary: {
            color: "#455a64";
        };
        colorDisabled: {
            color: "#cfd8dc";
        };
    };
};

declare const textField: {
    styleOverrides: {
        root: {
            '& label': {
                lineHeight: string;
                '&.Mui-focused': {
                    color: "#263238";
                };
                '&.Mui-error': {
                    color: string;
                };
                color: "#607d8b";
            };
            '& .MuiAutocomplete-inputRoot.MuiOutlinedInput-root ': {
                padding: string;
            };
            '& .MuiInputBase-input': {
                padding: string;
                '&.MuiInputBase-inputMultiline': {
                    padding: number;
                };
                '& fieldset': {
                    borderColor: "#607d8b";
                };
                '&.Mui-focused ': {
                    '&.Mui-error fieldset': {
                        borderColor: string;
                    };
                    '& fieldset': {
                        borderColor: "#263238";
                    };
                };
            };
            '& .MuiInput-root:before ': {
                borderColor: "#607d8b";
            };
            '& ::-webkit-scrollbar-track': {
                visibility: string;
            };
            '& ::-webkit-scrollbar-thumb': {
                visibility: string;
            };
            '& :hover': {
                '&::-webkit-scrollbar-track': {
                    visibility: string;
                };
                '&::-webkit-scrollbar-thumb': {
                    visibility: string;
                };
            };
        };
    };
};

declare const fade: {
    name: string;
    styles: string;
    anim: 1;
    toString: () => string;
} & string;
declare const slidesRight: {
    name: string;
    styles: string;
    anim: 1;
    toString: () => string;
} & string;
declare const slidesLeft: {
    name: string;
    styles: string;
    anim: 1;
    toString: () => string;
} & string;
declare const SlidesLeftLong: {
    name: string;
    styles: string;
    anim: 1;
    toString: () => string;
} & string;
declare const colorChange: {
    name: string;
    styles: string;
    anim: 1;
    toString: () => string;
} & string;
declare const fadeAnimation: {
    animation: string;
};
declare const slidesRightAnimation: {
    animation: string;
};
declare const slidesLeftAnimation: {
    animation: string;
};
declare const SlideLeftLongAnimation: {
    animation: string;
};
declare const colorChangeAnimation: {
    animation: string;
};

declare const scrollbar: {
    '&::-webkit-scrollbar-track': {
        visibility: string;
    };
    '&::-webkit-scrollbar-thumb': {
        visibility: string;
    };
    '&:hover': {
        '&::-webkit-scrollbar-track': {
            visibility: string;
        };
        '&::-webkit-scrollbar-thumb': {
            visibility: string;
        };
    };
};
declare const textfieldScrollbar: {
    '& ::-webkit-scrollbar-track': {
        visibility: string;
    };
    '& ::-webkit-scrollbar-thumb': {
        visibility: string;
    };
    '& :hover': {
        '&::-webkit-scrollbar-track': {
            visibility: string;
        };
        '&::-webkit-scrollbar-thumb': {
            visibility: string;
        };
    };
};

declare const mainShadow: string;
declare const commonShadow = "0px 3px 16px 2px rgba(144, 164, 174, 0.12)";
declare const commonHoverShadow = "0px 3px 16px 2px rgba(144, 164, 174, 0.56)";
declare const smallHoverShadow = "0 3px 1px rgba(144, 164, 174, 0.56)";

declare const theme: _mui_material_styles.Theme;

export { SlideLeftLongAnimation, SlidesLeftLong, checkbox, colorChange, colorChangeAnimation, commonHoverShadow, commonShadow, fade, fadeAnimation, mainShadow, menuItem, menuList, scrollbar, select, slidesLeft, slidesLeftAnimation, slidesRight, slidesRightAnimation, smallHoverShadow, svgIcon, textField, textfieldScrollbar, theme };
