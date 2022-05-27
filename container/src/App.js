import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AuthLazyApp from './components/Auth/AuthApp';
import MarketingLazyApp from './components/Marketing/MarketingApp';

import Header from './components/Header/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'container'
});


export default () => {
  return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <CssBaseline />
            <Header />

            <Switch>
                <Route path="/auth" component={AuthLazyApp} />
                <Route path="/" component={MarketingLazyApp} />
            </Switch>
        </StylesProvider>
    </BrowserRouter>
  );
}