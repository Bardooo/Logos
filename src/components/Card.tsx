import React from 'react';

import cart from '../assets/img/cart.svg';

type CardProps = { 
  id: number,
  title: string,
  imageUrl: string,
  weight: number,
  text: string,
  price: number
}

const Card: React.FC<CardProps> = ({ id, title, imageUrl, weight, text, price }) => {
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
          <div className="card__button">
            <p className="card__button-text">В корзину</p>
            <img className="card__button-img" src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
