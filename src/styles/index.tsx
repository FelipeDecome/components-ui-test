import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as TailwindGlobalStyles } from 'twin.macro';

const GlobalStyles = createGlobalStyle`
  :root {
      --cllr-primary-600: #B524BC;
      --cllr-primary-500: #D031D8;
      --cllr-secondary-600: #05c7c0;
      --cllr-secondary-500: #06EFE7;
  }

  body {
      background: #E9F1F7;
}`;

export const UiGlobalStyles = (): JSX.Element => (
  <>
    <GlobalStyles />
    <TailwindGlobalStyles />
  </>
);
