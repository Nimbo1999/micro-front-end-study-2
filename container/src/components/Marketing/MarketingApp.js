import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const marketingRef = useRef(null);
  const history = useHistory();

  const onNavigate = ({ pathname: nextPathname }) => history.location.pathname !== nextPathname && history.push(nextPathname);

  useEffect(() => {
    const { onParentNavigate } = mount(marketingRef.current, { onNavigate });
    history.listen(onParentNavigate);
  }, []);

  return (
    <div ref={marketingRef} />
  );
}

export default MarketingApp;
