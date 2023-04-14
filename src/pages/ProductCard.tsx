import MenuSwiper from '../components/MenuSwiper'
import { itemsType } from '../components/Menu'

import backImg from '../assets/img/back-img.svg'
import busket from '../assets/img/busket.svg'
import { Link } from 'react-router-dom'

const info = [
  {
    id: 0,
    title: 'Белки',
    value: '17.23'
  },
  {
    id: 1,
    title: 'Жиры',
    value: '7.63'
  },
  {
    id: 2,
    title: 'Углеводы',
    value: '22.35'
  },
  {
    id: 3,
    title: 'Ккал',
    value: '234'
  },
  {
    id: 4,
    title: 'Вес',
    value: '210 г'
  }
]

type ProductCardProps = {
  items: itemsType[],
}

const ProductCard: React.FC<ProductCardProps> = ({ items }) => {
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
            <img className='product-card__inner-main-item-img' src={items[0].imageUrl} alt="product-img" />
            <div className="product-card__inner-main-item-info">
              <div className="product-card__inner-main-item-info-top">
                <div className="product-card__inner-main-item-info-top-text">
                  <h5 className="product-card__inner-main-item-info-top-text-title">{items[0].title}</h5>
                  <p className="product-card__inner-main-item-info-top-text-main-text">помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек</p>
                </div>
                <div className="product-card__inner-main-item-info-top-main">
                  <p className="product-card__inner-main-item-info-top-main-weight">Вес: 210 г</p>
                  <div className="product-card__inner-main-item-info-top-main-cost">
                    <div className="product-card__inner-main-item-info-top-main-cost-btn">
                      <p className="product-card__inner-main-item-info-top-main-cost-btn-text">Корзина</p>
                      <img className="product-card__inner-main-item-info-top-main-cost-btn-img" src={busket} alt="busket" />
                    </div>
                    <p className="product-card__inner-main-item-info-top-main-cost-text">259 ₽</p>
                  </div>
                </div>
              </div>
              <div className="product-card__inner-main-item-info-buttom">
                <div className="product-card__inner-main-item-info-buttom-wrap">
                  {info.map((item) => (
                    <div className="product-card__inner-main-item-info-buttom-wrap-item">
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
          <MenuSwiper items={items} />
        </div>
      </div>
    </section>
  )
}

export default ProductCard
