import React from 'react';
import { MenuItemProps as CommonMenuItemProps } from './MenuItem.types';
import { MenuItemVariant } from './MenuItem.constants';
import './MenuItem.scss';
interface MenuItemProps extends CommonMenuItemProps {
    isDropdown?: boolean;
    density?: 1 | 2;
    isToggled?: boolean;
    onRemove?: () => void;
    variant?: MenuItemVariant;
}
declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLLIElement>>;
export default MenuItem;
