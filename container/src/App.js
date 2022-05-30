import React, { useState } from 'react';
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
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <CssBaseline />
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />

                <Switch>
                    <Route path="/auth">
                        <AuthLazyApp onSignIn={() => setIsSignedIn(true)} />
                    </Route>
                    <Route path="/" component={MarketingLazyApp} />
                </Switch>
            </StylesProvider>
        </BrowserRouter>
    );
}