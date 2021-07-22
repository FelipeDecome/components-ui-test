import React, { useEffect, useMemo } from 'react';

import { useWindowSize } from '@react-hook/window-size';

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

type TBreakpoints = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

type TMedia = Partial<Record<TBreakpoints, TTypoVariantOptions>>;

export interface ITyposProps {
  variant: TTypoVariantOptions;
  alignment?: TAlignmentOptions;
  color?: TColorsOptions;
  media?: TMedia;
  render?: TRenderOptions;
}

const Typos: React.FC<ITyposProps> = ({
  variant,
  alignment = 'default',
  color = 'base-dark',
  media,
  render,
  children,
}) => {
  const [width] = useWindowSize({ wait: 100 });

  const breakpoint = useMemo(() => {
    /* Definir Hook para recuperar os valores de breakpoint da configuração */
    /* Criar algoritmo para aplicar pros medias abaixo da que foi definida */
    if (width > 1200) return 'xl';
    if (width > 992) return 'lg';
    if (width > 768) return 'md';
    if (width > 640) return 'sm';
    return 'xs';
  }, [width]);

  return (
    <Typo
      $color={color}
      $alignment={alignment}
      $variant={(media && media[breakpoint]) || variant}
      render={render || variantOptions[variant]}
    >
      {children}
    </Typo>
  );
};

export { Typos };
