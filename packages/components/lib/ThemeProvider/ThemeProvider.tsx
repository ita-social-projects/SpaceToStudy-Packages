import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
// import { theme } from '@space2study-packages/theme/app-theme/theme';
import { theme } from "../../../theme/app-theme/theme";

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </StyledEngineProvider>
    );
};