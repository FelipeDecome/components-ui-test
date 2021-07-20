import React from 'react';

import * as Styled from './styles';

export interface IButtonProps {
  label: string;
  colorScheme?: Styled.TColorSchemes;
  size?: Styled.TSizeEnum;
  variant?: Styled.TVariantOptions;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({
  label,
  colorScheme = 'base',
  size = 'md',
  variant = 'solid',
  onClick,
}) => {
  return (
    <Styled.Button
      type="button"
      colorScheme={colorScheme}
      size={size}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </Styled.Button>
  );
};

export { Button };
