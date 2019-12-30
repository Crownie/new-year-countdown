import React from 'react';
import App from 'next/app';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import defaultTheme from '../src/config/defaultTheme';
import { initGA, logPageView } from '../src/utils/analytics';

export default class MyApp extends App {
  componentDidMount() {
    if (!window['GA_INITIALIZED']) {
      initGA();
      window['GA_INITIALIZED'] = true;
    }
    logPageView();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StyledComponentsThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </StyledComponentsThemeProvider>
    );
  }
}
