import React from 'react';
import "./MenuItem.scss"
import {MenuItemProps as CommonMenuItemProps} from "./MenuItem.types";
import {MenuItemVariant} from "./MenuItem.constants";
interface MenuItemProps extends CommonMenuItemProps {
    isDropdown?: boolean
    density?: 1 | 2
    isToggled?: boolean
    onRemove?: () => void
    variant?: MenuItemVariant
}
declare const MenuItem: React.ForwardRefExoticComponent<Omit<MenuItemProps, "ref"> & React.RefAttributes<HTMLElement>>;
export default MenuItem;