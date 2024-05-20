import React from 'react';

import { formatPhoneAndMask } from '@artmizu/utils';

import { Link } from 'react-router-dom';

import arrowImg from '../assets/img/Arrow-left.svg';
import time from '../assets/img/time.svg';
import { SubmitErrorHandler, FieldErrors, SubmitHandler, useForm } from 'react-hook-form';

interface OrderForm {
  name: string;
  phoneNum: string;
  sreet: string;
  houseNum: string;
  apartNum: string;
  entranceNum: string;
  level: string;
  comment: string;
  checkbox: boolean;
}

const Order = () => {
  const [active, setActive] = React.useState('1');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderForm>({});

  const sendData = (data: OrderForm) => {
    return fetch('https://6403abed3bdc59fa8f2acb30.mockapi.io/formData', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json());
  };

  const submit: SubmitHandler<OrderForm> = (data: OrderForm) => {
    sendData(data);
  };

  const error: SubmitErrorHandler<OrderForm> = (errors: FieldErrors<OrderForm>) => {
    console.error(errors);
  };

  const setName = (el: React.FormEvent<HTMLInputElement>) => {
    el.currentTarget.value = el.currentTarget.value.replace(/[^а-яА-ЯёЁa-zA-Z ]/g, '');
  };

  const setNum = (el: React.FormEvent<HTMLInputElement>) => {
    el.currentTarget.value = el.currentTarget.value.replace(/[^\d+]/, '');
  };

  const onClickLi = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const elements = document.querySelectorAll('.order__delivery-li');
    elements.forEach((el) => {
      el.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    setActive(e.currentTarget.id);
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
                id="name"
                className="order__contacts-text"
                {...register('name', { required: 'Поле "Имя" обязательно к заполнению' })}
                type="text"
                placeholder="Имя*"
                onInput={(el) => {
                  setName(el);
                }}
              />
              {errors.name && (
                <p style={{ color: 'red', fontSize: '12px' }}>{errors.name.message}</p>
              )}
            </label>
            <label className="order__contacts-phone">
              <input
                id="phoneNum"
                className="order__contacts-text"
                {...register('phoneNum', { required: 'Поле "Телефон" обязательно к заполнению' })}
                type="tel"
                onChange={(val) => {
                  val.target.value = formatPhoneAndMask(val.target.value);
                }}
                placeholder="Телефон*"
              />
              {errors.phoneNum && (
                <p style={{ color: 'red', fontSize: '12px' }}>{errors.phoneNum.message}</p>
              )}
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
                <div style={{ marginRight: '15px', marginBottom: '15px' }}>
                  <input
                    id="sreet"
                    {...register('sreet', { required: 'Поле "Улица" обязательно к заполнению' })}
                    className="order__delivery-street"
                    type="text"
                    placeholder="Укажите улицу*"
                  />
                  {errors.sreet && (
                    <p style={{ color: 'red', fontSize: '12px' }}>{errors.sreet.message}</p>
                  )}
                </div>
                <div style={{ marginRight: '15px', marginBottom: '15px' }}>
                  <input
                    id="houseNum"
                    {...register('houseNum', {
                      required: 'Поле "Номер дома" обязательно к заполнению',
                    })}
                    className="order__delivery-building"
                    type="tel"
                    onInput={(el) => {
                      setNum(el);
                    }}
                    placeholder="Номер дома*"
                  />
                  {errors.houseNum && (
                    <p style={{ color: 'red', fontSize: '12px' }}>{errors.houseNum.message}</p>
                  )}
                </div>
                <div style={{ marginRight: '15px', marginBottom: '15px' }}>
                  <input
                    id="apartNum"
                    {...register('apartNum', {
                      required: 'Поле "№ квартиры/офиса" обязательно к заполнению',
                    })}
                    className="order__delivery-number"
                    type="tel"
                    onInput={(el) => {
                      setNum(el);
                    }}
                    placeholder="№ квартиры/офиса*"
                  />
                  {errors.apartNum && (
                    <p style={{ color: 'red', fontSize: '12px' }}>{errors.apartNum.message}</p>
                  )}
                </div>
                <div style={{ marginRight: '15px', marginBottom: '15px' }}>
                  <input
                    id="entranceNum"
                    {...register('entranceNum', {
                      required: 'Поле "Подъезд" обязательно к заполнению',
                    })}
                    className="order__delivery-entrance"
                    type="tel"
                    onInput={(el) => {
                      setNum(el);
                    }}
                    placeholder="Подъезд*"
                  />
                  {errors.entranceNum && (
                    <p style={{ color: 'red', fontSize: '12px' }}>{errors.entranceNum.message}</p>
                  )}
                </div>
                <div style={{ marginRight: '15px', marginBottom: '15px' }}>
                  <input
                    id="level"
                    {...register('level', { required: 'Поле "Этаж" обязательно к заполнению' })}
                    className="order__delivery-level"
                    type="tel"
                    onInput={(el) => {
                      setNum(el);
                    }}
                    placeholder="Этаж*"
                  />
                  {errors.level && (
                    <p style={{ color: 'red', fontSize: '12px' }}>{errors.level.message}</p>
                  )}
                </div>
                <div>
                  <input
                    id="comment"
                    className="order__delivery-comment"
                    type="text"
                    placeholder="Комментарий"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <h5 className="order__delivery-subtitle">Выберите ресторан</h5>
              <select className="order__delivery-rest" style={{ backgroundColor: '#504B4A' }}>
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
            <input
              id="checkbox"
              {...register('checkbox', { required: 'Согласитесь с условиями или катитесь' })}
              type="checkbox"
            />
          </label>
          <p className="order__checkout-text">
            Я согласен на обработку моих перс. данных в соответствии с{' '}
            <span className="order__checkout-span">Условиями</span>
          </p>
          <button className="order__checkout-btn">Оформить заказ</button>
          {errors.checkbox && (
            <p style={{ color: 'red', fontSize: '12px', position: 'absolute', bottom: '27px' }}>
              {errors.checkbox.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Order;
