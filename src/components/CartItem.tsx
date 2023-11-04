import cartItemImg from '../assets/img/cart-item.jpg';
import plusImg from '../assets/img/plus.svg';
import minusImg from '../assets/img/minus.svg';
import deleteImg from '../assets/img/delete.svg';

const CartItem = () => {
  return (
    <div className="cart-item">
      <img className="cart-item__img" src={cartItemImg} alt="cart-item-img" />
      <div className="cart-item__main">
        <div className="cart-item__text">
          <h4 className="cart-item__text-title">ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</h4>
          <p className="cart-item__text-value">
            Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто
          </p>
        </div>
        <div className="cart-item__right">
          <div className="cart-item__quantity">
            <img className="cart-item__quantity-img" src={minusImg} alt="cart-arrow-left" />
            <p className="cart-item__quantity-counter">1</p>
            <img className="cart-item__quantity-img" src={plusImg} alt="cart-arrow-right" />
          </div>
          <div className="cart-item__wrap">
            <p className="cart-item__price">1640 ₽</p>
            <img className="cart-item__delete" src={deleteImg} alt="button-delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
