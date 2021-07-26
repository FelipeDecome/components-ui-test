import React from 'react';

import { ITypographyProps } from '../Typography';

export interface ITextContext {
  props: ITypographyProps;
}

export const TextContext = React.createContext({} as ITextContext);
