import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Typography, ITypographyProps } from '.';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

const Template: Story<ITypographyProps> = args => <Typography {...args} />;

interface ITemplate {
  args: React.PropsWithChildren<ITyposProps>;
}

export const Headline1: ITemplate = Template.bind({});
Headline1.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  variant: 'headline1',
  media: {
    md: 'headline3',
    sm: 'headline4',
  },
  render: 'h1',
};

export const Headline2 = Template.bind({});
Headline2.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  variant: 'headline2',
};

export const Headline3 = Template.bind({});
Headline3.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  variant: 'headline3',
};

export const Headline4 = Template.bind({});
Headline4.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  variant: 'headline4',
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: 'Maecenas eget magna pharetra sem consequat lobortis.',
  variant: 'subtitle1',
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  children: 'Maecenas eget magna pharetra sem consequat lobortis.',
  variant: 'subtitle2',
};

export const Body1 = Template.bind({});
Body1.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue in magna eu tristique. Nam ut nisi sapien. Donec id sollicitudin neque, non dapibus sapien. Phasellus maximus porta diam ut vulputate. Pellentesque quis porttitor nibh. In quis sapien eros. Vivamus et blandit urna. Maecenas eget magna pharetra sem consequat lobortis.',
  variant: 'body1',
};

export const Body2 = Template.bind({});
Body2.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue in magna eu tristique. Nam ut nisi sapien. Donec id sollicitudin neque, non dapibus sapien. Phasellus maximus porta diam ut vulputate. Pellentesque quis porttitor nibh. In quis sapien eros. Vivamus et blandit urna. Maecenas eget magna pharetra sem consequat lobortis.',
  variant: 'body2',
};

export const Caption = Template.bind({});
Caption.args = { children: 'Lorem ipsum dolor sit amet', variant: 'caption' };

export const Button = Template.bind({});
Button.args = { children: 'Lorem', variant: 'button' };

export const Overline = Template.bind({});
Overline.args = { children: 'Lorem ipsum', variant: 'overline' };
