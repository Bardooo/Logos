import React from 'react'

import geo from '../assets/img/geo.svg'
import calling from '../assets/img/calling.svg'
import search from '../assets/img/search.svg'
import banner from '../assets/img/banner.jpg'
import cart from '../assets/img/cart.svg'
import banner2x from '../assets/img/banner@2x.jpg'
import banner3x from '../assets/img/banner@3x.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="header__top"> 
        <div className="header__top-menu">
          <div className="header__top-menu-btn">
            <span className='header__top-menu-btn-span'></span>
          </div>
          <p className="header__top-menu-text">МЕНЮ</p>
        </div>
        <h4 className="header__top-logo">LOGOS</h4>
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
      <div className="header__bottom">
        <img src={banner} srcSet={`${banner2x} 2x, ${banner3x} 3x`} alt="предложение" className="header__bottom-img" />
      </div>
    </div>
  )
}

export default Header
