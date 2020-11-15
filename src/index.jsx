import React from 'react';
import { render } from 'react-dom';
import './index.html';
import Header from './Header/index.jsx';
import Footer from './Footer/index.jsx';
import AboutProject from './AboutProject/index.jsx';
import AboutUs from './AboutUs/index.jsx';

const App = () => {
  return (
    <>
      <Header />
      <AboutProject />
      <AboutUs />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector('#app'));
