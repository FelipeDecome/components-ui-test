import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Button, IButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = args => <Button {...args} />;

export const Base = Template.bind({});
Base.args = { label: 'Base', size: 'md' };

export const Primary = Template.bind({});
Primary.args = { ...Base.args, colorScheme: 'primary', label: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { ...Base.args, colorScheme: 'secondary', label: 'Secondary' };
