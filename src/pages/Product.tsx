import { Link, useParams } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import MenuSwiper from '../components/MenuSwiper'

import backImg from '../assets/img/back-img.svg'
import ProductCard from '../components/ProductCard'
import { itemsType } from '../components/Menu'

const Product = () => {
  const [items, setItems] = React.useState<itemsType[]>()
  const { id } = useParams()
  
  React.useEffect(() => {
    async function fetchFood() {
      try {
        const {data} = await axios.get('https://6403abed3bdc59fa8f2acb30.mockapi.io/items')        
        setItems(data)
      } catch (error) {
        alert('Ошибка при получении данных')
      }
    }
    fetchFood()
  }, [])  
  
  return (
    <section className='product-card'>
      <div className="product-card__inner">
        <div className="product-card__inner-main">
          <Link to='/'>
            <div className="product-card__inner-main-back">
              <img className="product-card__inner-main-back-img" src={backImg} alt="back-img"/>
              <p className="product-card__inner-main-back-text">Вернуться назад</p>
            </div>
          </Link>
          {items === undefined ? (
            <>Получаем данные...</>
          ) : (
            <ProductCard item={items[id]}/>
          )}
        </div>
        <div className="product-card__inner-extra">
          <h4 className="product-card__inner-extra-title title">С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h4>
          {items === undefined ? (<>Получаем данные...</>) : (
            <MenuSwiper items={items} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Product
