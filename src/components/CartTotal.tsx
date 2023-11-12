import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors';

const CartTotal = () => {
  const {totalPrice} = useSelector(selectCart);
  return (
    <div className="cart-total">
      <div className="cart-total__inner">
        <div className="cart-total__main">
          <p className="cart-total__top">Итого <span>{totalPrice} ₽</span></p>
          <p className="cart-total__middle">До бесплатной доставки не хватет: <span>100 ₽</span></p>
          <p className="cart-total__bottom">Минимальная сума заказа 1500 ₽</p>
        </div>
        <div className="cart-total__btn">Оформить заказ</div>
      </div>
    </div>
  );
};

export default CartTotal;
