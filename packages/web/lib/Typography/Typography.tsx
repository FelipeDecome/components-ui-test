import React from 'react';

import {
  Container,
  TColorsOptions,
  TAlignmentOptions,
  TTypographyVariantOptions,
  TSpacingOptions,
  TMaxWidthOptions,
} from './styles';

export type TRenderOptions =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

const variantOptions: Record<TTypographyVariantOptions, keyof React.ReactHTML> =
  {
    headline1: 'h1',
    headline2: 'h2',
    headline3: 'h3',
    headline4: 'h4',
    subtitle1: 'h5',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    button: 'span',
    overline: 'span',
  };

export interface ITypographyProps {
  variant: TTypographyVariantOptions;
  alignment?: TAlignmentOptions;
  color?: TColorsOptions;
  spacing?: TSpacingOptions;
  maxWidth?: TMaxWidthOptions;
  render?: TRenderOptions;
}

const Typography: React.FC<ITypographyProps> = ({
  variant,
  alignment = 'default',
  color = 'base-dark',
  spacing = '',
  maxWidth = 'full',
  render,
  children,
}) => {
  return (
    <Container
      $color={color}
      $alignment={alignment}
      $variant={variant}
      $spacing={spacing}
      $maxWidth={maxWidth}
      render={render || variantOptions[variant]}
    >
      {children}
    </Container>
  );
};

export { Typography };
