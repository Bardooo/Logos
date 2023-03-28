import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Promotions from './pages/Promotions';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='' element={<Home />} />
        <Route path='promotions' element={<Promotions />} />
      </Route>
    </Routes>
    // <div className="App">
    //   <Header />
    //   <Navigation />
    //   <Menu items={items} navigationTitles={navigationTitles} />
    //   <Info />
    //   <Footer />
    // </div>
  );
}

export default App;
