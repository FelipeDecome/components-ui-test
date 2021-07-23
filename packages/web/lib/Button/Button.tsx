import React from 'react';

import { Typography } from '../Typography';
import * as Styled from './styles';

export interface IButtonProps {
  label: string;
  colorScheme?: Styled.TColorSchemes;
  variant?: Styled.TVariantOptions;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({
  label,
  colorScheme = 'base',
  variant = 'solid',
  onClick,
}) => {
  return (
    <Styled.Button
      type="button"
      $colorScheme={colorScheme}
      $variant={variant}
      onClick={onClick}
    >
      <Typography variant="button" color="inherit">
        {label}
      </Typography>
    </Styled.Button>
  );
};

export { Button };
