import MenuSwiper from '../components/MenuSwiper'
import { itemsType } from '../components/Menu'

import backImg from '../assets/img/back-img.svg'

type ProductCardProps = {
  items: itemsType[],
}

const ProductCard: React.FC<ProductCardProps> = ({ items }) => {
  return (
    <section className='product-card'>
      <div className="product-card__inner">
        <div className="product-card__inner-main">
          <div className="product-card__inner-main-back">
            <img className="product-card__inner-main-back-img" src={backImg} alt="back-img"/>
            <p className="product-card__inner-main-back-text">Вернуться назад</p>
          </div>
          <div className="product-card__inner-main-item">
            <img className='product-card__inner-main-item-img' src={items[0].imageUrl} alt="product-img" />
            <div className="product-card__inner-main-item-info">
              <h5 className="product-card__inner-main-item-info-title">{items[0].title}</h5>
              <p className="product-card__inner-main-item-info-text">помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек</p>
              
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
