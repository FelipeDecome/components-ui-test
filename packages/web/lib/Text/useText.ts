import { useContext } from 'react';

import { ITextContext, TextContext } from './TextContext';

export const useText = (): ITextContext => useContext(TextContext);
