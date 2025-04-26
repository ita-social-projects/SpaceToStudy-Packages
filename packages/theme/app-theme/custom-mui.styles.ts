import { createTheme } from '@mui/material/styles'

import palette from './Pallete/app.pallete'
import appTypography from './Typography/app.typography'
import './Button/app.button'
import tooltip from './Tooltip/app.tooltip'
import table from './Table/app.table'
import { svgIcon } from './SvgIcon/app.svgicon'
import { checkbox } from './Checkbox/app.checkbox'
import { textField } from './TextField/app.textfield'
import { menuItem } from './MenuItem/app.menu-item'
import { menuList } from './MenuList/app.menu-list'
import { select } from './Select/app.select'

export const theme = createTheme({
  palette,
  typography: appTypography,
  components: {
    MuiSvgIcon: svgIcon,
    MuiCheckbox: checkbox,
    MuiTextField: textField,
    MuiSelect: select,
    MuiTooltip: tooltip,
    MuiMenuItem: menuItem,
    MuiMenu: menuList,
    MuiTableRow: table
  }
})
