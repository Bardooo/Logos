import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Promotions from './pages/Promotions';
import ProductCard from './pages/ProductCard';
import axios from 'axios';

function App() {
  // TODO: когда перейдём на редакс, надо перенести запросы и данные в редакс
  const [items, setItems] = React.useState([]);
  const [navigationTitles, setNavigationTitles] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, navigationTitlesResponse] = await Promise.all([
          axios.get('https://6403abed3bdc59fa8f2acb30.mockapi.io/items'),
          axios.get('https://6403abed3bdc59fa8f2acb30.mockapi.io/navigation '),
        ])
        setItems(itemsResponse.data);
        setNavigationTitles(navigationTitlesResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(')
        console.error(error)
      }
    }

    fetchData();
  }, []);
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='' element={<Home items={items} navigationTitles={navigationTitles} />} />
        <Route path='promotions' element={<Promotions />} />
        <Route path='product-card' element={<ProductCard items={items} />} />
      </Route>
    </Routes>
  );
}

export default App;
