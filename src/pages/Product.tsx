import { Link, useParams } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import ContentLoader from "react-content-loader"
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
  console.log(items);
  
  
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
            // <ContentLoader 
            // speed={2}
            // width={1300}
            // height={600}
            // viewBox="0 0 1281 600"
            // backgroundColor="#707070"
            // foregroundColor="#bfbfbf"
            // >
            //   <rect x="48" y="8" rx="15" ry="15" width="1200" height="400" />
            // </ContentLoader>
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
