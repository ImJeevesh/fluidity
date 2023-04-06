import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VirtualTable from './VirtualTable';

export default {
  title: 'Fluidity/VirtualTable',
  component: VirtualTable,
} as ComponentMeta<typeof VirtualTable>;

const Template: ComponentStory<typeof VirtualTable> = function ({ ...args }) {
  return (
    <>
      <h3>Open in view mode and reload to test for more records</h3>
      <VirtualTable {...args} />
    </>
  );
};

const ROWS_COUNT = location.href.endsWith('viewMode=story') ? 20000 : 100;

export const Default = Template.bind({});
Default.args = {
  rows: new Array(ROWS_COUNT).fill(true).map((_, id) => ({
    id,
    firstName: Math.random().toString(20).substring(8),
    lastName: Math.random().toString(20).substring(8),
    age: Math.ceil(Math.random() * 80),
    action: 'focus',
  })),
};
