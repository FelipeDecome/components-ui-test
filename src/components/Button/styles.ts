import tw, { styled, TwStyle } from 'twin.macro';

export type TSizeEnum = 'small' | 'medium' | 'large';

interface IButtonProps {
  primary: boolean;
  size: TSizeEnum;
}

const buttonSizes: Record<TSizeEnum, TwStyle> = {
  small: tw`px-4 py-2 text-xs`,
  medium: tw`px-5 py-3 text-sm`,
  large: tw`px-6 py-4 text-base`,
};

export const Button = styled.button<IButtonProps>`
  ${tw`font-sans font-bold border-0 text-white cursor-pointer rounded-lg transition-all`}

  ${props => buttonSizes[props.size]}
  ${props =>
    props.primary
      ? tw`bg-primary-600 hover:bg-primary-500`
      : tw`bg-secondary-600 hover:bg-secondary-500`}
`;
