import React, { type ReactNode } from 'react';
import './MenuItem.scss';
declare const variant: readonly ["default", "nested"];
declare const colorVariant: readonly ["default", "danger", "secondary"];
interface MenuItemProps {
    title: string;
    additionalInfo?: string;
    alignVariant?: 'left' | 'center' | 'right';
    colorVariant?: (typeof colorVariant)[number];
    isDisabled?: boolean;
    graphics?: ReactNode;
    isBottomBorder?: boolean;
    onClick?: () => void;
    isDropdown?: boolean;
    density?: 1 | 2;
    isToggled?: boolean;
    onRemove?: () => void;
    variant?: (typeof variant)[number];
}

declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLLIElement>>;
export default MenuItem;
