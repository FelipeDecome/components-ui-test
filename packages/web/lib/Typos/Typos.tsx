import React from 'react';

import {
  TColorsOptions,
  TAlignmentOptions,
  TTypoVariantOptions,
} from '../utils/getClassName';
import { Typo } from './styles';

export type TRenderOptions =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

const variantOptions: Record<TTypoVariantOptions, keyof React.ReactHTML> = {
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

export interface ITyposProps {
  variant: TTypoVariantOptions;
  alignment?: TAlignmentOptions;
  color?: TColorsOptions;
  render?: TRenderOptions;
}

const Typos: React.FC<ITyposProps> = ({
  variant,
  alignment = 'default',
  color = 'base-dark',
  render,
  children,
}) => {
  return (
    <Typo
      $color={color}
      $alignment={alignment}
      $variant={variant}
      render={render || variantOptions[variant]}
    >
      {children}
    </Typo>
  );
};

export { Typos };
