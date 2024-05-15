import React from 'react';
import axios from 'axios';
import Info from '../components/Info';
import Menu from '../components/Menu';

const Home = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const {data} = await axios.get('https://6403abed3bdc59fa8f2acb30.mockapi.io/items')
        setItems(data);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Menu items={items}/>
      <Info />
    </>
  );
};

export default Home;
