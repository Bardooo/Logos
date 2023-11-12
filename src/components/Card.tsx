import React from 'react';

import cart from '../assets/img/cart.svg';
import { useDispatch } from 'react-redux';
import { CartItem } from '../redux/cart/types';
import { addItem } from '../redux/cart/slice';

type CardProps = {
  id: string;
  title: string;
  imageUrl: string;
  weight: number;
  text: string;
  price: number;
  count: number;
  info: [{}];
};

const Card: React.FC<CardProps> = ({ id, title, imageUrl, weight, text, price, count, info }) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      imageUrl,
      weight,
      text,
      price,
      count,
      info,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="card">
      <div className="card__inner">
        <img className="card__img" src={imageUrl} alt="food" />
        <div className="card__main">
          <div className="card__info">
            <h5 className="card__info-title">{title}</h5>
            <p className="card__info-text">Вес: {weight}г</p>
          </div>
          <p className="card__text">{text}</p>
        </div>
        <div className="card__bottom">
          <p className="card__price">{price} ₽</p>
          <div className="card__button" onClick={onClickAdd}>
            <p className="card__button-text">В корзину</p>
            <img className="card__button-img" src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
