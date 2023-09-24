import { Link, useParams } from 'react-router-dom'
import React from 'react'
import axios from 'axios'

import MenuSwiper from '../components/MenuSwiper'
import { itemsType } from '../components/Menu'

import backImg from '../assets/img/back-img.svg'
import busket from '../assets/img/busket.svg'

type ProductProps = {
  items: itemsType[]
} 

const Product: React.FC<ProductProps> = ({items}) => {
  const [item, setItem] = React.useState([])
  const { id } = useParams()
  
  React.useEffect(() => {
    async function fetchFood() {
      try {
        const {data} = await axios.get('https://6403abed3bdc59fa8f2acb30.mockapi.io/items')
        setItem(data)
      } catch (error) {
        alert('Ошибка при получении данных')
      }
    }
    fetchFood()
  }, [])  
  console.log(item);
  
  
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
          <div className="product-card__inner-main-item">
            <img className='product-card__inner-main-item-img' src={items[id].imageUrl} alt="product-img" />
            <div className="product-card__inner-main-item-info">
              <div className="product-card__inner-main-item-info-top">
                <div className="product-card__inner-main-item-info-top-text">
                  <h5 className="product-card__inner-main-item-info-top-text-title">{items[id].title}</h5>
                  <p className="product-card__inner-main-item-info-top-text-main-text">{items[id].text}</p>
                </div>
                <div className="product-card__inner-main-item-info-top-main">
                  <p className="product-card__inner-main-item-info-top-main-weight">Вес: {items[id].weight} г</p>
                  <div className="product-card__inner-main-item-info-top-main-cost">
                    <div className="product-card__inner-main-item-info-top-main-cost-btn">
                      <p className="product-card__inner-main-item-info-top-main-cost-btn-text">Корзина</p>
                      <img className="product-card__inner-main-item-info-top-main-cost-btn-img" src={busket} alt="busket" />
                    </div>
                    <p className="product-card__inner-main-item-info-top-main-cost-text">{items[id].price} ₽</p>
                  </div>
                </div>
              </div>
              <div className="product-card__inner-main-item-info-buttom">
                <div className="product-card__inner-main-item-info-buttom-wrap">
                  {items[id].info.map((item, index) => (
                    <div className="product-card__inner-main-item-info-buttom-wrap-item" key={index}>
                      <p className="product-card__inner-main-item-info-buttom-wrap-item-text">{item.title}</p>
                      <p className="product-card__inner-main-item-info-buttom-wrap-item-number">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-card__inner-extra">
          <h4 className="product-card__inner-extra-title title">С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h4>
          <MenuSwiper items={item} />
        </div>
      </div>
    </section>
  )
}

export default Product
