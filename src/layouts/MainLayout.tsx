import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

import banner from '../assets/img/banner.jpg'
import banner2x from '../assets/img/banner@2x.jpg'
import banner3x from '../assets/img/banner@3x.jpg'

const MainLayout: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <img src={banner} srcSet={`${banner2x} 2x, ${banner3x} 3x`} alt="предложение" className="header-bottom-img" />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
