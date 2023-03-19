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
        <img className="card__inner-img" src={imageUrl} alt="food" />
        <div className="card__inner-main">
          <div className="card__inner-main-info">
            <h5 className="card__inner-main-info-title">{title}</h5>
            <p className="card__inner-main-info-text">Вес: {weight}г</p>
          </div>
          <p className="card__inner-main-text">{text}</p>
        </div>
        <div className="card__inner-bottom">
          <p className="card__inner-bottom-price">{price} ₽</p>
          <div className="card__inner-bottom-button">
            <p className="card__inner-bottom-button-text">В корзину</p>
            <img className="card__inner-bottom-button-img" src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
