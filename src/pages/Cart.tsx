import React from 'react';
import { Link } from 'react-router-dom';
import arrowImg from '../assets/img/Arrow-left.svg';
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors';

const Cart = () => {
  const { items } = useSelector(selectCart);
  
  return (
    <section className="cart">
      <div className="cart__inner">
        <Link to="/">
          <div className="cart__button">
            <img className="cart__img" src={arrowImg} alt="arrow-left" />
            <p className="cart__text">к выбору блюда</p>
          </div>
        </Link>
        <div className="cart__title">
          <p className="cart__title-text">КОРЗИНА</p>
          <p className="cart__title-span">(в корзине 3 товара)</p>
        </div>
        <div className="cart__items">
          {items.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <CartTotal />
      </div>
    </section>
  );
};
export default Cart;
