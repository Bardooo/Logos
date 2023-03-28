import React from 'react'
import axios from 'axios';

import Menu from '../components/Menu'
import Info from '../components/Info'

const Home = () => {
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
    <>
      <Menu items={items} navigationTitles={navigationTitles} />
      <Info />
    </>
  )
}

export default Home
