import { Link, useParams } from 'react-router-dom'
import React from 'react'
import MenuSwiper from '../components/MenuSwiper'

import backImg from '../assets/img/back-img.svg'
import ProductCard from '../components/ProductCard'
import { fetchFood } from '../redux/food/asyncActions'
import { useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { selectFoodData } from '../redux/food/selectors'

const Product = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const { items, status } = useSelector(selectFoodData);

  const getFood = async () => {
    dispatch(fetchFood())
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    getFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <section className='product'>
      <div className="product__inner">
        <div className="product__main">
          <Link to='/'>
            <div className="product__back">
              <img className="product__img" src={backImg} alt="back-img"/>
              <p className="product__text">Вернуться назад</p>
            </div>
          </Link>
          {status === 'error' ? (
            <div className="content__error-info">
              <h2>Произошла ошибка</h2>
              <p>Не удалось получить пиццы. Попробуйте повторить попытку позже</p>
            </div>
          ) : (
            <>{status === 'loading' ? <>Получаем данные</> : <ProductCard item={items[id]} />}</>
          )}
        </div>
        <div className="product__extra">
          <h4 className="product__title">С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h4>
          {status === 'error' ? (
            <div className="content__error-info">
              <h2>Произошла ошибка</h2>
              <p>Не удалось получить пиццы. Попробуйте повторить попытку позже</p>
            </div>
          ) : (
            <>{status === 'loading' ? <>Получаем данные</> : <MenuSwiper items={items} />}</>
          )}
        </div>
      </div>
    </section>
  )
}

export default Product