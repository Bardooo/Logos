import React from 'react'
import axios from 'axios'
import Info from '../components/Info'
import Menu from '../components/Menu';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [navigationTitles, setNavigationTitles] = React.useState([]);
  // const [totalCount, setTotalCount] = React.useState({})

  // let set = {}
  // console.log(set);
  

  // let totalCount = new Set();
  // totalCount.add(13)
  // totalCount.add(2)
  // console.log(totalCount);
  // console.log(totalCount);

  // const addToTotalCount = (item) => {
  //   totalCount = {...totalCount, ...item}
  // }
  
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
          alert('Ошибка при запросе данных')
          console.error(error)
      }
    }
    fetchData();
  }, []);
  // console.log(items);
  
  // for (const item of items) {
  //   console.log(item);
    
  //   set = {...set, ...{title: item.title, count: item.count}}
  // }
  // items.map((item) => {
  //   setTotalCount({...totalCount, ...{title: item.title, count: item.count}})
  // })  
  // console.log(set);
  return (
    <>
      <Menu items={items} navigationTitles={navigationTitles} />
      <Info />
    </>
  )
}

export default Home
