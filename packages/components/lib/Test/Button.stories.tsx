import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@mui/material';

const meta: Meta<typeof Button> = {
    title: 'Test/Buttons',
    component: Button,
    argTypes: {
        variant: { control: 'text' },
        color: { control: 'text' },
        children: { control: 'text' },
        sx: { control: 'object' },
    },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const TonalButton: Story = {
    args: {
        variant: 'tonal',
        children: 'Tonal Button',
        sx: {
            width: 200,
            height: 50,
            bgcolor: 'primary.blueGrey',
            color: 'white',
            '&:hover': {
                bgcolor: 'primary.dark',
            },
        },
    },
};

export const ContainedLightButton: Story = {
    args: {
        variant: 'containedLight',
        children: 'Contained Light Button',
        sx: {
            width: 200,
            height: 50,
            bgcolor: '#F5F5F5',
            color: '#333',
            '&:hover': {
                bgcolor: '#E0E0E0',
            },
        },
    },
};

export const DangerButton: Story = {
    args: {
        variant: 'danger',
        children: 'Danger Button',
        sx: {
            width: 200,
            height: 50,
            bgcolor: 'error.500',
            color: 'white',
            '&:hover': {
                bgcolor: 'error.900',
            },
        },
    },
};

export const BaseButton: Story = {
    args: {
        variant: 'base',
        children: 'Base Button',
        sx: {
            width: 200,
            height: 50,
            bgcolor: 'basic.blue',
            color: 'white',
            '&:hover': {
                bgcolor: 'basic.darkGray',
            },
        },
    },
};
