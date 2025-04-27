import { mainShadow } from '../Custom-shadows/custom-shadows'

export const menuList = {
  styleOverrides: {
    root: {
      '& .MuiPaper-root': {
        boxShadow: mainShadow
      },
      '& .MuiMenu-list': {
        padding: 0
      }
    }
  }
}
