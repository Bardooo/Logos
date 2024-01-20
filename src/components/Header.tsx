import React from 'react'
import { Link } from 'react-router-dom';

import geo from '../assets/img/geo.svg'
import calling from '../assets/img/calling.svg'
import search from '../assets/img/search.svg'
import cart from '../assets/img/cart.svg'
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors';


export type ItemType = {
  id: string;
  title: string;
  imageUrl: string;
  weight: number;
  text: string;
  price: number;
  count: number;
  info: [{}]
}

const Header = () => {
  const { items } = useSelector(selectCart);
  const isMounted = React.useRef(false);

  const totalCount = items.reduce((sum: number, item: ItemType) => sum + item.count, 0);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <section className="header">
      <div className="header__top">
        <div className="header__menu">
          <div className="header__btn">
            <span className="header__span"></span>
          </div>
          <p className="header__text">МЕНЮ</p>
        </div>
        <h4><Link className="header__logo" to='/'>LOGOS</Link></h4>
        <div className="header__input">
          <img className="header__geo-img" src={geo} alt="геоточка" />
          <input className="header__enter" placeholder='Введите адрес доставки' type="text" />
          <img className="header__search-img" src={search} alt="поиск" />
        </div>
        <div className="header__contacts">
          <img className="header__img" src={calling} alt="телефон" />
          <div className="header__contacts-text">
            <p className="header__content">Контакты:</p>
            <p className="header__number">+7 (917) 510-57-59</p>
          </div>
        </div>
        <Link className="header__basket" to='/cart'>
          <p className="header__basket-text">Корзина</p>
          <p className="header__basket-number">{totalCount}</p>
        </Link>
        <div className="header-mobile__basket">
          <img className='header-mobile__img' src={cart} alt="cart-img" />
          <p className="header-mobile__text">корзина</p>
        </div>
      </div>
      <div className="header-mobile">
        <div className="header-mobile__input">
          <img src={geo} alt="геоточка" className="header-mobile__geo-img" />
          <input placeholder='Введите адрес доставки' type="text" className="header-mobile__enter" />
          <img src={search} alt="поиск" className="header-mobile__search-img" />
        </div>
      </div>
    </section>
  )
}

export default Header
