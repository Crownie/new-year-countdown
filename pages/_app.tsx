import React from 'react';
import App from 'next/app';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import defaultTheme from '../src/config/defaultTheme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <StyledComponentsThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </StyledComponentsThemeProvider>
    );
  }
}
