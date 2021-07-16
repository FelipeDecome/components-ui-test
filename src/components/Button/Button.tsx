import React from 'react';

import * as Styled from './styles';

export interface IButtonProps {
  label: string;
  primary?: boolean;
  size?: Styled.TSizeEnum;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({
  label,
  primary = true,
  size = 'medium',
  onClick,
}) => {
  return (
    <>
      <Styled.Button
        type="button"
        primary={primary}
        size={size}
        onClick={onClick}
      >
        {label}
      </Styled.Button>
    </>
  );
};

export { Button };
