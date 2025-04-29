import React from 'react'
import type { Preview } from '@storybook/react'
import { StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from "@space2study-packages/theme";

import '@s2s-packages/styles'
import '@space2study-packages/theme/dist/index.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
     (Story) => (
       <StyledEngineProvider injectFirst>
         <ThemeProvider theme={theme}>
             <Story />
         </ThemeProvider>
       </StyledEngineProvider>
     )
  ]
};

export default preview;