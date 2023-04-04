import React from 'react'
import { Link } from 'react-router-dom';

import geo from '../assets/img/geo.svg'
import calling from '../assets/img/calling.svg'
import search from '../assets/img/search.svg'
import cart from '../assets/img/cart.svg'

const Header = () => {
  return (
    <section className="header">
      <div className="header__top">
        <div className="header__top-menu">
          <div className="header__top-menu-btn">
            <span className="header__top-menu-btn-span"></span>
          </div>
          <p className="header__top-menu-text">МЕНЮ</p>
        </div>
        <Link to='/'>
          <h4 className="header__top-logo">LOGOS</h4>
        </Link>
        <div className="header__top-input">
          <img src={geo} alt="геоточка" className="header__top-input-geo-img" />
          <input placeholder='Введите адрес доставки' type="text" className="header__top-input-enter" />
          <img src={search} alt="поиск" className="header__top-input-search-img" />
        </div>
        <div className="header__top-contacts">
          <img src={calling} alt="телефон" className="header__top-contacts-img" />
          <div className="header__top-contacts-text">
            <p className="header__top-contacts-text-content">Контакты:</p>
            <p className="header__top-contacts-text-number">+7 (917) 510-57-59</p>
          </div>
        </div>
        <div className="header__top-basket">
          <p className="header__top-basket-text">Корзина</p>
          <p className="header__top-basket-number">4</p>
        </div>
        <div className="header__top-mobile-basket">
          <img className='header__top-mobile-basket-img' src={cart} alt="cart-img" />
          <p className="header__top-mobile-basket-text">корзина</p>
        </div>
      </div>
      <div className="header__mobile">
        <div className="header__mobile-input">
          <img src={geo} alt="геоточка" className="header__mobile-input-geo-img" />
          <input placeholder='Введите адрес доставки' type="text" className="header__mobile-input-enter" />
          <img src={search} alt="поиск" className="header__mobile-input-search-img" />
        </div>
      </div>
    </section>
  )
}

export default Header
