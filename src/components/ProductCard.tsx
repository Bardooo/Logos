import React from 'react';

import busket from '../assets/img/busket.svg'

const ProductCard = ({ item }) => {
  return (
    <div className="product-card__inner-main-item">
      <img
        className="product-card__inner-main-item-img"
        src={item.imageUrl}
        alt="product-img"
      />
      <div className="product-card__inner-main-item-info">
        <div className="product-card__inner-main-item-info-top">
          <div className="product-card__inner-main-item-info-top-text">
            <h5 className="product-card__inner-main-item-info-top-text-title">{item.title}</h5>
            <p className="product-card__inner-main-item-info-top-text-main-text">
              {item.text}
            </p>
          </div>
          <div className="product-card__inner-main-item-info-top-main">
            <p className="product-card__inner-main-item-info-top-main-weight">
              Вес: {item.weight} г
            </p>
            <div className="product-card__inner-main-item-info-top-main-cost">
              <div className="product-card__inner-main-item-info-top-main-cost-btn">
                <p className="product-card__inner-main-item-info-top-main-cost-btn-text">Корзина</p>
                <img
                  className="product-card__inner-main-item-info-top-main-cost-btn-img"
                  src={busket}
                  alt="busket"
                />
              </div>
              <p className="product-card__inner-main-item-info-top-main-cost-text">
                {item.price} ₽
              </p>
            </div>
          </div>
        </div>
        <div className="product-card__inner-main-item-info-buttom">
          <div className="product-card__inner-main-item-info-buttom-wrap">
            {item.info.map((item, index) => (
              <div className="product-card__inner-main-item-info-buttom-wrap-item" key={index}>
                <p className="product-card__inner-main-item-info-buttom-wrap-item-text">
                  {item.title}
                </p>
                <p className="product-card__inner-main-item-info-buttom-wrap-item-number">
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
