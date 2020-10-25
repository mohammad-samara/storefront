import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
// import Status from './components/status.js';

import './style.scss';

export default props => {
  return (
    <>
      <Header/> 
      <Categories/>
      <Products/>
      <Footer/> 
    </>
  );
};
