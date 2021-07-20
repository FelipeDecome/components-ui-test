import tw from 'tailwind-styled-components';

export type TSizeEnum = 'xs' | 'sm' | 'md' | 'lg';

export type TColorSchemes = 'primary' | 'secondary' | 'base';

export type TVariantOptions = 'solid' | 'outline';

const buttonSizes: Record<TSizeEnum, string> = {
  xs: `px-1 py-0.5 text-button-xs`,
  sm: `px-1.5 py-1 text-button-sm`,
  md: `px-2 py-1.5 text-button-md`,
  lg: `px-2.5 py-2 text-button-lg`,
};

const colorSchemes: Record<TColorSchemes, Record<TVariantOptions, string>> = {
  primary: {
    outline: `border border-solid border-primary-neutral text-primary-neutral hover:border-primary-light `,
    solid: `bg-primary-neutral text-base-lightest hover:bg-primary-light`,
  },
  secondary: {
    outline: `border border-solid border-secondary-neutral text-secondary-neutral hover:border-secondary-light `,
    solid: `bg-secondary-neutral text-base-lightest hover:bg-secondary-light `,
  },
  base: {
    outline: `border border-solid border-base-lightest text-base-lightest hover:border-base-light `,
    solid: `bg-base-lightest text-base-darkest hover:bg-base-light`,
  },
};

interface IStyledButtonProps {
  colorScheme: TColorSchemes;
  size: TSizeEnum;
  variant: TVariantOptions;
}

export const Button = tw.button<IStyledButtonProps>`
  font-sans
  font-medium
  border-0
  cursor-pointer
  rounded-md
  transition-all

  ${props => buttonSizes[props.size]}

  ${props => colorSchemes[props.colorScheme][props.variant]}
`;
