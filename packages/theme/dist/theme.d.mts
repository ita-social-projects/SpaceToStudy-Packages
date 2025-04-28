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

declare const palette: {
    readonly primary: {
        50: "#eceff1";
        100: "#cfd8dc";
        200: "#b0bec5";
        300: "#90a4ae";
        400: "#78909c";
        500: "#607d8b";
        600: "#546e7a";
        700: "#455a64";
        800: "#37474f";
        900: "#263238";
        A100: "#cfd8dc";
        A200: "#b0bec5";
        A400: "#78909c";
        A700: "#455a64";
    };
    readonly backgroundColor: "#F7F7F7";
    readonly imageOverlay: "rgba(38, 50, 56, 0.7)";
    readonly basic: {
        readonly black: "#000000";
        readonly gray: "#B0BEC5";
        readonly softGray: "#F1F2F3";
        readonly softWhite: "#F7F8F8";
        readonly blue: "#0B8AF8";
        readonly white: "#FFFFFF";
        readonly grey: "#ECEFF1";
        readonly yellow: "#FFB000";
        readonly carmenRed: "#B91F1B";
        readonly lightRed: "#F5D7D7";
        readonly pinkishRed: "#EBAFAF";
        readonly mediumRed: "#CD3636";
        readonly deepRed: "#A42B2B";
        readonly burntOrange: "#F56F36";
        readonly yellowBrown: "#F5D636";
        readonly yellowGreen: "#9BC541";
        readonly yellowDark: "#948760";
        readonly fruitSalad: "#4CAF50";
        readonly orientalHerbs: "#12A03A";
        readonly lime: "#99CC00";
        readonly turquoise: "#489DA0";
        readonly turquoiseDark: "#3B8587";
        readonly turquoiseChat: "#A0F0F2";
        readonly turquoiseLight: "#F5FFFF";
        readonly turquoise50: "#F2FAFA";
        readonly turquoise100: "#DAF1F1";
        readonly turquoise500: "#47B8B8";
        readonly turquoise700: "#2B6E6E";
        readonly blueGray: "#607D8B";
        readonly bismark: "#546E7A";
        readonly darkGray: "#455A64";
        readonly lightGray: "#CFD8DC";
        readonly lightBlue: "#263238";
    };
    readonly companyBlue: "rgba(0, 167, 167, 0.2)";
    readonly error: {
        readonly 50: "#FFEFF2";
        readonly 100: "#FFCFD4";
        readonly 200: "#F19B9A";
        readonly 300: "#E77574";
        readonly 400: "#F25750";
        readonly 500: "#F54636";
        readonly 600: "#E63C35";
        readonly 700: "#D32F2F";
        readonly 800: "#C72A28";
        readonly 900: "#B91F1B";
    };
    readonly warning: {
        readonly 50: "#FFF8E1";
        readonly 100: "#FFECb3";
        readonly 200: "#FFE082";
        readonly 300: "#FFD54F";
        readonly 400: "#FFCA28";
        readonly 500: "#FFC107";
        readonly 600: "#FFB300";
        readonly 700: "#FFA000";
        readonly 800: "#FF8F00";
        readonly 900: "#FF6F00";
    };
    readonly success: {
        readonly 50: "#EBF3EB";
        readonly 100: "#CCE7CD";
        readonly 200: "#A7D5A8";
        readonly 300: "#82C684";
        readonly 400: "#68BA6A";
        readonly 500: "#4CAF50";
        readonly 600: "#44A148";
        readonly 700: "#388D3C";
        readonly 800: "#2C7C32";
        readonly 900: "#1E5F23";
    };
};
type Palette = typeof palette;

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
                    color: "#F54636";
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
                        borderColor: "#F54636";
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

export { type Palette, SlideLeftLongAnimation, SlidesLeftLong, checkbox, colorChange, colorChangeAnimation, commonHoverShadow, commonShadow, fade, fadeAnimation, mainShadow, menuItem, menuList, palette, scrollbar, select, slidesLeft, slidesLeftAnimation, slidesRight, slidesRightAnimation, smallHoverShadow, svgIcon, textField, textfieldScrollbar, theme };
