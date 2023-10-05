import React from 'react'
import cartItemImg from '../assets/img/cart-item.jpg'
import arrowImg from '../assets/img/Arrow-left.svg'
import plusImg from '../assets/img/plus.svg'
import minusImg from '../assets/img/minus.svg'
import deleteImg from '../assets/img/delete.svg'

const Cart = () => {
  return (
    <section className='cart'>
      <div className="cart__inner">
        <div className="cart__button">
          <img className='cart__button-img' src={arrowImg} alt="arrow-left" />
          <p className="cart__button-text">к выбору блюда</p>
        </div>
        <div className="cart__title">
          <p className="cart__title-text">КОРЗИНА</p>
          <p className="cart__title-span">(в корзине 3 товара)</p>
        </div>
        <div className="cart__main">
          <div className="cart__item">
            <img className="cart__img" src={cartItemImg} alt="cart-item-img" />
            <div className="cart__text">
              <h4 className="cart__text-title">ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</h4>
              <p className="cart__text-value">Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто</p>
            </div>
            <div className="cart__quantity">
              <img className="cart__quantity-img" src={minusImg} alt="cart-arrow-left"/>
              <p className="cart__quantity-counter">1</p>
              <img className="cart__quantity-img" src={plusImg} alt="cart-arrow-right"/>
            </div>
            <p className="cart__price">1640 ₽</p>
            <img className="cart__delete" src={deleteImg} alt='button-delete'/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Cart
