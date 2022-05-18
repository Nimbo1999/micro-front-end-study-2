import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, MarketingApp } from './components';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
}