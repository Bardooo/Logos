import React from 'react';

import busket from '../assets/img/busket.svg'

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img
        className="product-card__img"
        src={item.imageUrl}
        alt="product-img"
      />
      <div className="product-card__info">
        <div className="product-card__top">
          <div className="product-card__text">
            <h5 className="product-card__title">{item.title}</h5>
            <p className="product-card__main-text">
              {item.text}
            </p>
          </div>
          <div className="product-card__main">
            <p className="product-card__weight">
              Вес: {item.weight} г
            </p>
            <div className="product-card__cost">
              <div className="product-card__btn">
                <p className="product-card__btn-text">Корзина</p>
                <img
                  className="product-card__btn-img"
                  src={busket}
                  alt="busket"
                />
              </div>
              <p className="product-card__cost-text">
                {item.price} ₽
              </p>
            </div>
          </div>
        </div>
        <div className="product-card__buttom">
          <div className="product-card__wrap">
            {item.info.map((item, index) => (
              <div className="product-card__item" key={index}>
                <p className="product-card__item-text">
                  {item.title}
                </p>
                <p className="product-card__item-number">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
