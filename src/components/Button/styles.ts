import tw, { styled, theme, TwStyle } from 'twin.macro';

import { TSizeEnum } from '..';

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
  color: ${theme`colors.white`};
  ${tw`font-sans font-bold border-0 cursor-pointer rounded-lg transition-all`}

  ${props => buttonSizes[props.size]}
  ${props =>
    props.primary
      ? tw`bg-purple-600 hover:(bg-purple-500)`
      : tw`bg-pink-400 hover:(bg-pink-500)`}
`;
