import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Info from './components/Info';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './scss/app.scss';

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
    <div className="App">
      <Header />
      {/* <Navigation /> */}
      {/* <Menu items={items} navigationTitles={navigationTitles} /> */}
      {/* <Info /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
