import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';

const meta: Meta<typeof Box> = {
    title: 'Test/Colors',
    component: Box,
    argTypes: {
        bgcolor: { control: 'color' },
        width: { control: 'number' },
        height: { control: 'number' },
        children: { control: 'text' }
    },
};
export default meta;

type Story = StoryObj<typeof Box>;

export const SxIsMoreImportantBackground: Story = {
    args: {
        width: 200,
        height: 100,
        bgcolor: 'basic.carmenRed',
        children: 'Sx Is More Important Background',
        sx: {
            width: 200,
            height: 100,
            bgcolor: 'primary.blueGrey',
        }
    },
};

export const WithoutSxBackground: Story = {
    args: {
        width: 200,
        height: 100,
        bgcolor: 'basic.carmenRed',
        children: 'Without Sx Background',
    },
};

export const ErrorBackground: Story = {
    args: {
        sx: {
            width: 200,
            height: 100,
            bgcolor: 'error.400',
        },
        children: 'Error Background',
    },
};

export const SuccessBackground: Story = {
    args: {
        sx: {
            width: 200,
            height: 100,
            bgcolor: 'success.900',
        },
        children: 'Success Background',
    },
};