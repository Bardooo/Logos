import React from 'react';
import { Link } from 'react-router-dom';
import arrowImg from '../assets/img/Arrow-left.svg';
import cartEmptyImg from '../assets/img/cart-empty.svg'
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors';
import { ItemType } from '../components/Header'

const Cart = () => {
  const { items } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: ItemType) => sum + item.count, 0);

  return totalCount === 0 ? (
    <section className="cart">
      <div className="cart__inner">
        <div className="cart__title">
          <p className="cart__title-text">КОРЗИНА</p>
          <p className="cart__title-span">(в корзине {totalCount} товара)</p>
        </div>
        <div className="cart__main">
          <img className="cart__main-img" src={cartEmptyImg} alt="cart-empty" />
          <h4 className="cart__main-title">КОРЗИНА ПУСТАЯ</h4>
          <Link to="/">
            <button className='cart__main-btn'>Посмотреть меню</button>
          </Link>
        </div>
      </div>
    </section>
  ) : (
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
          <p className="cart__title-span">(в корзине {totalCount} товара)</p>
        </div>
        <div className="cart__items">
          {items.map((item: ItemType) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <CartTotal />
      </div>
    </section>
  );
};
export default Cart;
