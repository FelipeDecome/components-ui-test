import tw from 'tailwind-styled-components';

export type TColorSchemes = 'primary' | 'secondary' | 'base';

export type TVariantOptions = 'solid' | 'outline';

const colorSchemes: Record<TColorSchemes, Record<TVariantOptions, string>> = {
  primary: {
    outline: `border-primary-neutral text-primary-neutral hover:border-primary-light `,
    solid: `bg-primary-neutral text-base-lightest hover:bg-primary-light`,
  },
  secondary: {
    outline: `border-secondary-neutral text-secondary-neutral hover:border-secondary-light `,
    solid: `bg-secondary-neutral text-base-lightest hover:bg-secondary-light `,
  },
  base: {
    outline: `border-base-lightest text-base-lightest hover:border-base-light `,
    solid: `bg-base-lightest text-base-darkest hover:bg-base-light`,
  },
};

interface IStyledButtonProps {
  $colorScheme: TColorSchemes;
  $variant: TVariantOptions;
}

export const Button = tw.button<IStyledButtonProps>`
  font-sans
  font-medium
  bg-transparent
  border
  border-solid
  border-transparent
  cursor-pointer
  rounded-0.5
  transition-all
  text-button

  px-1 py-0.5
  sm:px-1.5 sm:py-1
  md:px-2 md:py-1.5
  lg:px-2.5 lg:py-2

  ${props => colorSchemes[props.$colorScheme][props.$variant]}
`;
