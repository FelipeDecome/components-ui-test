import { PropsWithChildren } from 'react';

import tw from 'tailwind-styled-components';

import { RenderComponentAs, IRenderComponentAs } from '../RenderComponentAs';
import { concat } from '../utils/concat';

/**
 *
 * Color Types
 *
 */
type TColorSchemeOptions = 'primary' | 'secondary';
type TColorWeigthOptions = 'light' | 'neutral' | 'dark';
type TColorBaseOptions = `base-${TColorWeigthOptions | 'darkest' | 'lightest'}`;
export type TColorsOptions =
  | `${TColorSchemeOptions}-${TColorWeigthOptions}`
  | TColorBaseOptions
  | 'inherit';
/**
 *
 * Spacing Types
 *
 */
type TSpacingSizeOptions = '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '4';
type TMarginOptions = 'm' | 'mx' | 'my' | 'mt' | 'mr' | 'mb' | 'ml';
type TPaddingOptions =
  | 'p'
  | 'px'
  | 'py'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'; /* Will text need padding? */
export type TSpacingOptions =
  | `${TMarginOptions | TPaddingOptions}-${TSpacingSizeOptions}`
  | '';

/**
 *
 * Alignment Types
 *
 */
export type TAlignmentOptions =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'default';

/**
 *
 * Variants Types
 *
 */
export type TTypographyVariantOptions =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';

/**
 *
 * Max Width Types
 *
 */
export type TMaxWidthOptions =
  | '0'
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | 'full';

const fontDefault = `font-sans font-normal`;
const fontWeight: Record<TTypographyVariantOptions, string> = {
  headline1: `font-medium`,
  headline2: `font-medium`,
  headline3: `font-medium`,
  headline4: `font-semibold`,
  subtitle1: `font-semibold`,
  subtitle2: `font-semibold`,
  body1: `font-normal`,
  body2: `font-normal`,
  button: `font-semibold`,
  caption: `font-medium`,
  overline: `font-medium`,
};

interface IContainerProps extends IRenderComponentAs {
  $variant: TTypographyVariantOptions;
  $alignment: TAlignmentOptions;
  $color: TColorsOptions;
  $spacing: TSpacingOptions;
  $maxWidth: TMaxWidthOptions;
}

export const Container = tw(RenderComponentAs)<
  PropsWithChildren<IContainerProps>
>`
  w-full

  ${() => fontDefault}
  ${props =>
    concat([
      `text-${props.$variant}`,
      `text-${props.$alignment}`,
      `text-${props.$color}`,
      `max-w-${props.$maxWidth}`,
      fontWeight[props.$variant],
      props.$spacing,
      props.$variant === 'overline' ? `uppercase` : null,
    ])}
`;
