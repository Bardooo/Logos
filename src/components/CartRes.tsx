import React from 'react';

const CartRes = () => {
  return (
    <div className="res">
      <div className="res__inner">
        <div className="res__main">
          <p className="res__top">Итого <span>500 ₽</span></p>
          <p className="res__middle">До бесплатной доставки не хватет: <span>100 ₽</span></p>
          <p className="res__bottom">Минимальная сума заказа 1500 ₽</p>
        </div>
        <div className="res__btn">Оформить заказ</div>
      </div>
    </div>
  );
};

export default CartRes;
