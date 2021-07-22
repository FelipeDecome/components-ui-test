import { ReactNode } from 'react';

import tw from 'tailwind-styled-components';

import { RenderComponentAs, IRenderComponentAs } from '../RenderComponentAs';
import { concat } from '../utils/concat';
import {
  getClassName,
  TColorsOptions,
  TAlignmentOptions,
  TTypoVariantOptions,
} from '../utils/getClassName';

const fontDefault = `font-sans font-normal`;

interface ITypoProps extends IRenderComponentAs {
  $variant: TTypoVariantOptions;
  $alignment: TAlignmentOptions;
  $color: TColorsOptions;
  children?: ReactNode;
}

export const Typo = tw(RenderComponentAs)<ITypoProps>`
  max-w-full
  w-full

  ${() => fontDefault}
  ${props =>
    concat([
      getClassName('text', props.$variant),
      getClassName('text', props.$alignment),
      getClassName('text', props.$color),
      props.$variant === 'overline' ? `uppercase` : null,
    ])}
`;
