import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Promotions from './pages/Promotions';
import Product from './pages/Product';
import Cart from './pages/Cart';
import axios from 'axios';

function App() {
  // TODO: когда перейдём на редакс, надо перенести запросы и данные в редакс
  const [items, setItems] = React.useState([])
  // React.useEffect(() => {
  //   async function fetchFood() {
  //     try {
  //       const {data} = await axios.get('https://6403abed3bdc59fa8f2acb30.mockapi.io/items')
  //       setItems(data)
  //     } catch (error) {
  //       alert('Ошибка при получении данных')
  //     }
  //   }
  //   fetchFood()
  // }, [])  

  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='' element={<Home/>} />
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<div>Идет загрузка корзины...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route path='promotions' element={<Promotions />} />
        <Route path='product-card/:id' element={<Product items={items} />} />
      </Route>
    </Routes>
  );
}

export default App;
