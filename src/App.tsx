import React from 'react';
import axios from 'axios';


import Header from './components/Header';
import Navigation from './components/Navigation';
import Menu from './components/Menu';
import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get('https://6403abed3bdc59fa8f2acb30.mockapi.io/items')

        setItems(itemsResponse.data);
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
      <Navigation />
      <Menu items={items} />
    </div>
  );
}

export default App;
