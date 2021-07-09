import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { IButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Primary 😃', size: 'large' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, label: 'Secondary 😇' };
