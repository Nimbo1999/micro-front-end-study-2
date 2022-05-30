import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn }) => {
    const history = useHistory();
    const divRef = useRef(null);

    const onNavigate = ({ pathname }) => history.location.pathname !== pathname && history.push(pathname);

    useEffect(() => {
        if (!!divRef.current) {
            const { onParentNavigate } = mount(divRef.current, {
                onNavigate,
                initialPath: history.location.pathname,
                onSignIn: event => {
                    event.preventDefault();
                    onSignIn();
                    history.push('/');
                }
            });
            history.listen(onParentNavigate);
        }
    }, []);

    return <div ref={divRef} />;
}

export default AuthApp;
