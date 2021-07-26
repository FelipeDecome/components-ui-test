import React, { useEffect, useMemo, useState } from 'react';

import { useWindowSize } from '@react-hook/window-size';

import {
  Container,
  TColorsOptions,
  TAlignmentOptions,
  TTypographyVariantOptions,
  TSpacingOptions,
  TMaxWidthOptions,
} from './styles';

type TBreakpoints = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

type TMedia = Partial<Record<TBreakpoints, TTypographyVariantOptions>>;

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
  media?: TMedia;
  spacing?: TSpacingOptions;
  maxWidth?: TMaxWidthOptions;
  render?: TRenderOptions;
}

const Typography: React.FC<ITypographyProps> = ({
  variant,
  alignment = 'default',
  color = 'base-dark',
  media = {},
  spacing = '',
  maxWidth = 'full',
  render,
  children,
}) => {
  const [breakpoint, setBreakpoint] = useState<TBreakpoints>('md');
  const [$variant, set$Variant] = useState<TTypographyVariantOptions>('body1');

  const [width] = useWindowSize({ wait: 100 });

  useEffect(() => {
    /* Definir Hook para recuperar os valores de breakpoint da configuração */
    /* Criar algoritmo para aplicar pros medias abaixo da que foi definida */
    if (width > 1200) return setBreakpoint('xl');
    if (width > 992) return setBreakpoint('lg');
    if (width > 768) return setBreakpoint('md');
    if (width > 640) return setBreakpoint('sm');
    return setBreakpoint('xs');
  }, [width]);

  useEffect(
    () => set$Variant(media[breakpoint] || variant),
    [breakpoint, media, variant],
  );

  return (
    <Container
      $color={color}
      $alignment={alignment}
      $variant={$variant}
      $spacing={spacing}
      $maxWidth={maxWidth}
      render={render || variantOptions[$variant]}
    >
      {children}
    </Container>
  );
};

export { Typography };
