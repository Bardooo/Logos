import React from 'react';

import { Link } from 'react-router-dom';

import arrowImg from '../assets/img/Arrow-left.svg';
import time from '../assets/img/time.svg';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

interface OrderForm {
  name: string;
  phoneNum: string;
  sreet: string;
  houseNum: string;
  apartNum: string;
  entranceNum: string;
  level: string;
  comment: string;
}

const Order = () => {
  const [active, setActive] = React.useState('1');
  const {
    register,
    handleSubmit,
  } = useForm<OrderForm>({});

  const sendData = (data = {}) => {
    return fetch('https://6403abed3bdc59fa8f2acb30.mockapi.io/formData', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json());
  };

  const submit: SubmitHandler<OrderForm> = (data) => {
    sendData(data)
  };

  const error: SubmitErrorHandler<OrderForm> = (data) => {
    console.log(data);
  };

  const nameVal = (el) => {
    el.target.value = el.target.value.replace(/[^а-яА-ЯёЁa-zA-Z ]/g, '');
  };

  const numVal = (el) => {
    el.target.value = el.target.value.replace(/[^\d+]/, '');
  };

  const onClickLi = (e) => {
    const elements = document.querySelectorAll('.order__delivery-li');
    elements.forEach((el) => {
      el.classList.remove('active');
    });
    e.target.classList.add('active');
    setActive(e.target.id);
  };

  return (
    <section className="order">
      <form className="order__inner" onSubmit={handleSubmit(submit, error)}>
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
              <input
                {...register('name')}
                type="text"
                required
                onInput={(el) => {
                  nameVal(el);
                }}
              />
              <div className="order__contacts-text">
                Имя<span className="order__contacts-span">*</span>
              </div>
            </label>
            <label className="order__contacts-phone">
              <input
                {...register('phoneNum')}
                type="tel"
                required
                onInput={(el) => {
                  numVal(el);
                }}
              />
              <div className="order__contacts-text">
                Телефон<span className="order__contacts-span">*</span>
              </div>
            </label>
          </div>
        </div>
        <div className="order__delivery">
          <h5 className="order__delivery-title">2. Доставка</h5>
          <div className="order__delivery-selector">
            <ul className="order__delivery-ul">
              <li className="order__delivery-li active" id="1" onClick={(e) => onClickLi(e)}>
                Доставка
              </li>
              <li className="order__delivery-li" id="2" onClick={(e) => onClickLi(e)}>
                Самовызов
              </li>
            </ul>
            {active === '1' ? (
              <div className="order__delivery-time">
                <img className="order__delivery-img" src={time} alt="time" />
                <p className="order__delivery-text">Доставим через 1 час 30 минут</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          {active === '1' ? (
            <>
              <h5 className="order__delivery-subtitle">Адрес доставки</h5>
              <div className="order__delivery-address">
                <input
                  className="order__delivery-street"
                  {...register('sreet')}
                  type="text"
                  required
                  placeholder="Укажите улицу*"
                />
                <input
                  className="order__delivery-building"
                  {...register('houseNum')}
                  type="tel"
                  required
                  onInput={(el) => {
                    numVal(el);
                  }}
                  placeholder="Номер дома*"
                />
                <input
                  className="order__delivery-number"
                  {...register('apartNum')}
                  type="tel"
                  required
                  onInput={(el) => {
                    numVal(el);
                  }}
                  placeholder="№ квартиры/офиса"
                />
                <input
                  className="order__delivery-entrance"
                  {...register('entranceNum')}
                  type="tel"
                  required
                  onInput={(el) => {
                    numVal(el);
                  }}
                  placeholder="Подъезд"
                />
                <input
                  className="order__delivery-level"
                  {...register('level')}
                  type="tel"
                  required
                  onInput={(el) => {
                    numVal(el);
                  }}
                  placeholder="Этаж"
                />
                <input
                  className="order__delivery-comment"
                  {...register('comment')}
                  type="text"
                  required
                  placeholder="Комментарий"
                />
              </div>
            </>
          ) : (
            <>
              <h5 className="order__delivery-subtitle">Выберите ресторан</h5>
              <select className="order__delivery-rest">
                <option value="Выберите ресторан" disabled>
                  Выберите ресторан
                </option>
                <option value="Шипиловский">Шипиловский</option>
                <option value="Южный">Южный</option>
                <option value="Каширский">Каширский</option>
                <option value="Frattamaggiore">Frattamaggiore</option>
              </select>
            </>
          )}
        </div>
        <div className="order__checkout">
          <label className="order__checkout-check">
            <input type="checkbox" name="cart" />
          </label>
          <p className="order__checkout-text">
            Я согласен на обработку моих перс. данных в соответствии с{' '}
            <span className="order__checkout-span">Условиями</span>
          </p>
          <button className="order__checkout-btn">Оформить заказ</button>
          {/* <input className="order__checkout-btn" type="submit" value="Оформить заказ" /> */}
        </div>
      </form>
    </section>
  );
};

export default Order;
