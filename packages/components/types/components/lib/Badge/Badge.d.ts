import React from 'react';
import { BadgeProps as MuiBadgeProps } from '@mui/material'
import './Badge.scss'
export type BadgeColor = 'primary' | 'success' | 'error'
type SmallBadgeProps = {
    variant: 'sm'
    color?: BadgeColor
    isVisible?: boolean
}
type LargeBadgeProps = {
    variant: 'lg'
    badgeContent: number
    maxContent?: number
    color?: BadgeColor
    isVisible?: boolean
    isZeroShown?: boolean
}
export type BadgeProps = (LargeBadgeProps | SmallBadgeProps) & Omit<MuiBadgeProps, 'variant'>
declare const Badge: React.ForwardRefExoticComponent<Omit<BadgeProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Badge;