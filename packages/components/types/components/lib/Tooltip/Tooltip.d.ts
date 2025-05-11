import './Tooltip.scss';
import React from 'react';
type TooltipProps = {
    variant: 'icon' | 'text' | 'icon-text';
    title: string;
    description?: string;
    position: 'up' | 'down' | 'right' | 'left' | 'none';
    icon?: React.ReactNode;
};
declare const ToolTip: React.FC<TooltipProps>;
export default ToolTip;
