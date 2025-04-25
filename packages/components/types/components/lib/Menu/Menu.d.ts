import React from 'react';
import { PopoverOrigin } from '@mui/material';
import { MenuItemProps as CommonMenuItemProps, OnItemClickArgs } from '../MenuItem/MenuItem.types';
import './Menu.scss';
interface NestedMenuItemProps extends CommonMenuItemProps {
    defaultOnItemClickArgs?: OnItemClickArgs;
    isInitiallyToggled?: boolean;
}
interface MenuItemProps extends NestedMenuItemProps {
    nestedMenuItems?: NestedMenuItemProps[];
}
interface MenuProps {
    anchorEl: HTMLElement | null;
    setAnchorEl: (anchorEl: HTMLElement | null) => void;
    menuItems: MenuItemProps[];
    allowToggleMultipleItems?: boolean;
    anchorOrigin?: PopoverOrigin;
    density?: 1 | 2;
    defaultOnItemClick?: (args: OnItemClickArgs) => void;
    isItemsRemovalEnabled?: boolean;
    noItemsMessage?: string;
    maxHeight?: number;
    minWidth?: number;
    removeAllItemsTitle: string;
    transformOrigin?: PopoverOrigin;
    toggledItemsTitles?: string[];
    onToggleItemsChange?: (newTitles: string[]) => void;
}
declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
export default Menu;
