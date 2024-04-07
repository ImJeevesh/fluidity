import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';

export default {
  title: 'Fluidity/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = function ({
  children,
  ...args
}) {
  return <Button {...args}>{children}</Button>;
};

export const WithClass = Template.bind({});
WithClass.args = {
  className: 'color-it',
  children: 'Text',
};
