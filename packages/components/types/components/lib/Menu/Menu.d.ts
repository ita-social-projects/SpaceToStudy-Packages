import React, { ReactNode } from 'react';
import { PopoverOrigin } from '@mui/material';
import { colorVariant } from '../MenuItem/MenuItem.constants';
import './Menu.scss';
type OnItemClickArgs = Record<string, string | Event>;
interface NestedMenuItemProps {
    title: string;
    additionalInfo?: string;
    alignVariant?: 'left' | 'center' | 'right';
    colorVariant?: (typeof colorVariant)[number];
    density?: 1 | 2;
    isDisabled?: boolean;
    graphics?: ReactNode;
    isBottomBorder?: boolean;
    onClick?: () => void;
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
