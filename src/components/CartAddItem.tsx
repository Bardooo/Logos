import React from 'react'
import cartAddImg from '../assets/img/cart-add-item.jpg'
import plusImg from '../assets/img/plus.svg'

const CartAddItem = () => {
  return (
    <div className='add-item'>
      <img className="add-item__img" src={cartAddImg} alt="cart-add-img" />
      <h4 className="add-item__title">ГРИСССИНИ</h4>
      <div className="add-item__btn">
        <p className="add-item__text">Добавить</p>
        <img className="add-item__btn-img" src={plusImg} alt="add-img" />
      </div>
      <p className="add-item__price">1640 ₽</p>
    </div>
  )
}

export default CartAddItem
