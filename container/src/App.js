import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Header, MarketingApp } from './components';

const generateClassName = createGenerateClassName({
    productionPrefix: 'container'
});

export default () => {
  return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <Header />
            <MarketingApp />
        </StylesProvider>
    </BrowserRouter>
  );
}