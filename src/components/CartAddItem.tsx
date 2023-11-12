import React from 'react';
import cartAddImg from '../assets/img/cart-add-item.jpg';
import plusImg from '../assets/img/plus.svg';

const CartAddItem = () => {
  return (
    <div className="add-item">
      <img className="add-item__img" src={cartAddImg} alt="cart-add-img" />
      <div className='add-item__main'>
        <h4 className="add-item__title">ГРИСССИНИ</h4>
        <div className="add-item__wrap">
          <div className="add-item__btn">
            <p className="add-item__text">Добавить</p>
            <img className="add-item__btn-img" src={plusImg} alt="add-img" />
          </div>
          <p className="add-item__price">1640 ₽</p>
        </div>
      </div>
    </div>
  );
};

export default CartAddItem;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

