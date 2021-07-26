import React from 'react';

import { ITypographyProps } from '../Typography';
import { ITextContext, TextContext } from './TextContext';

type TTextProps = ITypographyProps;

const Text: React.FC<TTextProps> = ({ children, ...props }) => {
  return (
    <TextContext.Provider value={{ props } as ITextContext}>
      {children}
    </TextContext.Provider>
  );
};

export { Text };
