import React from 'react';
import { AvatarProps as MuiAvatarProps } from '@mui/material';
import "./UserAvatar.scss";
declare const variants: readonly ["check", "avatar", "monogram", "photo"];
declare const sizes: readonly ["sm", "md", "lg", "profile-lg"];
interface BaseUserAvatarProps {
    variant?: (typeof variants)[number];
    src?: string;
    size?: (typeof sizes)[number];
    firstName?: string;
    lastName?: string;
    isOnline?: boolean;
}
export type UserAvatarProps = BaseUserAvatarProps & Omit<MuiAvatarProps, keyof BaseUserAvatarProps>;
declare const UserAvatar: React.ForwardRefExoticComponent<Omit<UserAvatarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default UserAvatar;
