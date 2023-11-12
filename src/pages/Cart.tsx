import React from 'react';
import { Link } from 'react-router-dom';
import arrowImg from '../assets/img/Arrow-left.svg';
import CartItem from '../components/CartItem';
import CartAddItem from '../components/CartAddItem';
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
        <div className="cart__add">
          <h4 className="cart__add-title">ДОБАВИТЬ К ЗАКАЗУ</h4>
          <div className="cart__wrap">
            <div className="cart__wrap-items">
              <CartAddItem />
              <CartAddItem />
              <CartAddItem />
              <CartAddItem />
            </div>
          </div>
        </div>
        <CartTotal />
      </div>
    </section>
  );
};
export default Cart;
