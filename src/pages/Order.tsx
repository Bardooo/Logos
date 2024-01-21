import React from 'react'

import { Link } from 'react-router-dom'

import arrowImg from '../assets/img/Arrow-left.svg';
import time from '../assets/img/time.svg'

const Order = () => {
  const [active, setActive] = React.useState('1');

  const onClickLi = (e) => {
    const elements = document.querySelectorAll('.order__delivery-li')
    elements.forEach(el => {
      el.classList.remove('active');
    })
    e.target.classList.add('active');
    setActive(e.target.id)
  }

  return (
    <section className='order'>
      <div className="order__inner">
        <Link to="/cart">
          <div className="order__button">
            <img className="order__img" src={arrowImg} alt="arrow-left" />
            <p className="order__text">в корзину</p>
          </div>
        </Link>
        <div className="order__title">ОФОРМЛЕНИЕ ЗАКАЗА</div>
        <div className="order__contacts">
          <h5 className="order__contacts-title">1. Контактная информация</h5>
          <div className="order__contacts-inputs">
            <label className="order__contacts-name">
              <input required type="text" />
              <div className="order__contacts-text">Имя<span className='order__contacts-span'>*</span></div>
            </label>
            <label className="order__contacts-phone">
              <input required type="tel" />
              <div className="order__contacts-text">Телефон<span className='order__contacts-span'>*</span></div>
            </label>
          </div>
        </div>
        <div className="order__delivery">
          <h5 className="order__delivery-title">2. Доставка</h5>
          <div className="order__delivery-selector">
            <ul className="order__delivery-ul">
              <li className='order__delivery-li active' id='1' onClick={(e) => onClickLi(e)}>Доставка</li>
              <li className='order__delivery-li' id='2' onClick={(e) => onClickLi(e)}>Самовызов</li>
            </ul>
            {active === '1' ? (
              <div className="order__delivery-time">
              <img className="order__delivery-img" src={time} alt="time" />
              <p className="order__delivery-text">Доставим через  1 час 30 минут</p>
            </div>
            ) : (
              <></>
            )}
          </div>
          {active === '1' ? (
            <>
              <h5 className="order__delivery-subtitle">Адрес доставки</h5>
              <div className="order__delivery-address">
                <input className="order__delivery-street" type="text" placeholder='Укажите улицу*' />
                <input className="order__delivery-building" type="number" placeholder='Номер дома*' />
                <input className="order__delivery-number" type="number" placeholder='№ квартиры/офиса' />
                <input className="order__delivery-entrance" type="number" placeholder='Подъезд' />
                <input className="order__delivery-level" type="number" placeholder='Этаж' />
                <input className="order__delivery-comment" type="text" placeholder='Комментарий' />
              </div>
            </>
          ) : (
            <>
              <h5 className="order__delivery-subtitle">Выберите ресторан</h5>
              <select className='order__delivery-rest'>
                <option value="Выберите ресторан" disabled>Выберите ресторан</option>
                <option value="Шипиловский">Шипиловский</option>
                <option value="Южный">Южный</option>
                <option value="Каширский">Каширский</option>
                <option value="Frattamaggiore">Frattamaggiore</option>
              </select>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Order
