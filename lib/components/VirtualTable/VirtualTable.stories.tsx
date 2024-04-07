import type { Meta, StoryObj } from '@storybook/react';
import VirtualTable from './VirtualTable';

const meta = {
  title: 'Fluidity/VirtualTable',
  component: VirtualTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VirtualTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const ROWS_COUNT = location.href.endsWith('viewMode=story') ? 20000 : 100;

export const Default: Story = {
  args: {
    rows: new Array(ROWS_COUNT).fill(true).map((_, id) => ({
      id,
      firstName: Math.random().toString(20).substring(8),
      lastName: Math.random().toString(20).substring(8),
      age: Math.ceil(Math.random() * 80),
      action: 'focus',
    })),
  },
};
