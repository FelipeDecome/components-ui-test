type TTypes = 'text' | 'bg';

/**
 * Color Types
 */
type TColorSchemeOptions = 'primary' | 'secondary';
type TColorWeigthOptions = 'light' | 'neutral' | 'dark';

type TColorBaseOptions = `base-${TColorWeigthOptions | 'darkest' | 'lightest'}`;

export type TColorsOptions =
  | `${TColorSchemeOptions}-${TColorWeigthOptions}`
  | TColorBaseOptions
  | 'inherit';

/**
 * Alignment Types
 */
export type TAlignmentOptions =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'default';

/**
 * Variants Types
 */
export type TTypoVariantOptions =
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

type TSearch = TColorsOptions | TAlignmentOptions | TTypoVariantOptions;

export const getClassName = (type: TTypes, search: TSearch): string => {
  return `${type}-${search}`;
};
