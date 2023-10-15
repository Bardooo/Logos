import { Link, useParams } from 'react-router-dom'
import React from 'react'
import MenuSwiper from '../components/MenuSwiper'

import backImg from '../assets/img/back-img.svg'
import mobileBackImg from '../assets/img/mobile-back-img.svg'

import ProductCard from '../components/ProductCard'
import { fetchFood } from '../redux/food/asyncActions'
import { useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { selectFoodData } from '../redux/food/selectors'
import ErrorBlock from '../components/ErrorBlock'
import LoadingBlock from '../components/LoadingBlock'

const Product = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const { items, status } = useSelector(selectFoodData);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchFood())
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (status === 'error') {
    return (
      <section className='product'>
        <div className="product__inner">
          <ErrorBlock />
        </div>  
      </section>
    )
  } else if (status === 'loading') {
    return (
      <section className='product'>
        <div className="product__inner">
          <LoadingBlock />
        </div>
      </section>
    )
  } else {
    return (
      <section className='product'>
        <div className="product__inner">
          <div className="product__main">
            <Link to='/'>
              <div className="product__back">
                <img className="product__img" src={backImg} alt="back-img"/>
                <p className="product__text">Вернуться назад</p>
              </div>
              <div className="product__back-mobile">
                <img className="product__mobile-img" src={mobileBackImg} alt="back-img"/>
              </div>
            </Link>
            <ProductCard item={items[id]} />
          </div>
          <div className="product__extra">
            <h4 className="product__title">С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h4>
            <MenuSwiper items={items} />
          </div>
        </div>
      </section>
    )
  }
}

export default Product