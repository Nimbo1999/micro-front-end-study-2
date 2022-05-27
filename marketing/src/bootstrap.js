import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (element, { onNavigate = () => {}, defaultHistory = undefined, initialPath }) => {
    const history = defaultHistory
        ? defaultHistory()
        : createMemoryHistory({initialEntries: [initialPath]});
    history.listen(onNavigate);

    const onParentNavigate = ({ pathname }) => history.location.pathname !== pathname && history.push(pathname);

    ReactDom.render(
        <App history={history} />,
        element
    );

    return {onParentNavigate}
}

if (process.env.NODE_ENV === 'development') {
  const element = document.getElementById('root');
  if (element) mount(element, { defaultHistory: createBrowserHistory });
}

export { mount };
