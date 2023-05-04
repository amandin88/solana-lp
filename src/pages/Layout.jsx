import React, { useEffect } from 'react';

import { NewsBar, NavBar, Footer } from '../components/sections';
import { Home } from './contents';

const Layout = (props) => {
  const renderContentPages = () => {
    switch (props.pageName) {
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    document.title = props.pageName + ' | SOLANA';
  }, [props.pageName]);

  return (
    <>
      <NewsBar content='Breakpoint 2023 - New City. New Vibes - Get Early Access' />
      <NavBar />
      {renderContentPages()}
      <Footer />
    </>
  );
};

export default Layout;
