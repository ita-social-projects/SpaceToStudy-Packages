import React, { type ReactNode } from 'react';
import { MenuItemVariant, MenuItemColorVariant } from './MenuItem.constants';
import './MenuItem.scss';
interface MenuItemProps {
    title: string;
    additionalInfo?: string;
    alignVariant?: 'left' | 'center' | 'right';
    colorVariant?: MenuItemColorVariant;
    isDisabled?: boolean;
    graphics?: ReactNode;
    isBottomBorder?: boolean;
    onClick?: () => void;
    isDropdown?: boolean;
    density?: 1 | 2;
    isToggled?: boolean;
    onRemove?: () => void;
    variant?: MenuItemVariant;
}

declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLLIElement>>;
export default MenuItem;
