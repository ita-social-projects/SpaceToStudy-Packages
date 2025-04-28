import { checkboxClasses } from '@mui/material/Checkbox'
import { palette } from '../Pallete/app.pallete'

export const checkbox = {
  styleOverrides: {
    root: {
      color: palette.primary[300],
      [`&.${checkboxClasses.checked}`]: {
        color: palette.primary[700]
      }
    }
  }
}
