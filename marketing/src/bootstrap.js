import React from 'react';
import ReactDom from 'react-dom';

const mount = element => {
  ReactDom.render(
    <h1>
      Hello Word!
    </h1>,
    element
  )
}

if (process.env.NODE_ENV === 'development') {
  const element = document.getElementById('root');
  if (element) mount(element);
}

export { mount };
