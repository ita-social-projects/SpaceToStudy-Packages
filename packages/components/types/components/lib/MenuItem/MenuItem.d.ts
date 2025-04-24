import React  from 'react';
import { MenuItemVariant } from "./MenuItem.constants";
import './MenuItem.scss';

import {MenuItemProps as CommonMenuItemProps} from "./MenuItem.types";
interface MenuItemProps extends CommonMenuItemProps {
    isDropdown?: boolean
    density?: 1 | 2
    isToggled?: boolean
    onRemove?: () => void
    variant?: MenuItemVariant
}
declare const MenuItem: React.ForwardRefExoticComponent<Omit<MenuItemProps, "ref"> & React.RefAttributes<HTMLElement>>;
export default MenuItem;
