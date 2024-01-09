import React from 'react';

import cart from '../assets/img/cart.svg';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/cart/slice';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors';

import plusImg from '../assets/img/plus.svg';
import minusImg from '../assets/img/minus.svg';

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
  const { items } = useSelector(selectCart);
  
  const [totalCount] = React.useState(() => {
    return items.find((item) => item.title === title)?.count || 0;
  })
  
  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickAdd = () => {
    dispatch(
      addItem({
        id,
        title,
        imageUrl,
        weight,
        text,
        price,
        count,
        info,
      }),
      );
    };

  return (
    <div className="card">
      <div className="card__inner">
        <Link to={`/product-card/${id}`}>
          <img className="card__img" src={imageUrl} alt="food" />
          <div className="card__main">
            <div className="card__info">
              <h5 className="card__info-title">{title}</h5>
              <p className="card__info-text">Вес: {weight}г</p>
            </div>
            <p className="card__text">{text}</p>
          </div>
        </Link>
        <div className="card__bottom">
          <p className="card__price">{price} ₽</p>
          {
            totalCount === 0 ? (
              <div className="card__button" onClick={onClickAdd}>
                <p className="card__button-text">В корзину</p>
                <img className="card__button-img" src={cart} alt="cart" />
              </div>
            ) : (
              <div className="card__quantity">
                {totalCount === 1 ? (
                  <button className="card__quantity-btn" onClick={onClickRemove}>
                    <img className="card__quantity-img" src={minusImg} alt="cart-arrow-left" />
                  </button>
                ) : (
                  <button className="card__quantity-btn" onClick={onClickMinus}>
                    <img className="card__quantity-img" src={minusImg} alt="cart-arrow-left" />
                  </button>
                )}
                <p className="card__quantity-counter">{totalCount}</p>
                <button className="card__quantity-btn">
                  <img
                    className="card__quantity-img"
                    src={plusImg}
                    alt="cart-arrow-right"
                    onClick={onClickAdd}
                  />
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Card;