import busket from '../assets/img/busket.svg';
import { useDispatch } from 'react-redux';

import { addItem, minusItem, removeItem } from '../redux/cart/slice';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors';

import plusImg from '../assets/img/plus.svg';
import minusImg from '../assets/img/minus.svg';
import React from 'react';

type ProductCardType = {
  item: {
    id: string;
    title: string;
    imageUrl: string;
    weight: number;
    text: string;
    price: number;
    count: number;
    info: [
      {
        id: number;
        title: string;
        value: number;
      },
    ];
  };
};

const ProductCard: React.FC<ProductCardType> = ({ item }) => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectCart);
  
  const [totalCount, setTotalCount] = React.useState(0)
  
  const onClickRemove = () => {
    dispatch(removeItem(item.id))
    setTotalCount(0);
  }

  const onClickMinus = () => {
    dispatch(minusItem(item.id));
  };

  const onClickAdd = () => {
    dispatch(addItem(item));
  };

  React.useEffect(() => {
    items.forEach(el => {
      if (item.title === el.title) {
        setTotalCount(el.count)
      }
    })
  })

  return (
    <div className="product-card">
      <img className="product-card__img" src={item.imageUrl} alt="product-img" />
      <div className="product-card__info">
        <div className="product-card__top">
          <div className="product-card__text">
            <h5 className="product-card__title">{item.title}</h5>
            <p className="product-card__main-text">{item.text}</p>
          </div>
          <div className="product-card__main">
            <p className="product-card__weight">Вес: {item.weight} г</p>
            <div className="product-card__cost">
              {totalCount === 0 ? (
                <div className="product-card__btn" onClick={onClickAdd}>
                  <p className="product-card__btn-text">В корзину</p>
                  <img className="product-card__btn-img" src={busket} alt="busket" />
                </div>
              ) : (
                <div className="product-card__quantity">
                  {totalCount === 1 ? (
                    <button className="product-card__quantity-btn" onClick={onClickRemove}>
                      <img className="product-card__quantity-img" src={minusImg} alt="cart-arrow-left" />
                    </button>
                  ) : (
                    <button className="product-card__quantity-btn" onClick={onClickMinus}>
                      <img className="product-card__quantity-img" src={minusImg} alt="cart-arrow-left" />
                    </button>
                  )}
                  <p className="product-card__quantity-counter">{totalCount}</p>
                  <button className="product-card__quantity-btn">
                    <img
                      className="product-card__quantity-img"
                      src={plusImg}
                      alt="cart-arrow-right"
                      onClick={onClickAdd}
                    />
                  </button>
                </div>
              )}
              <p className="product-card__cost-text">{item.price} ₽</p>
            </div>
          </div>
        </div>
        <div className="product-card__buttom">
          <div className="product-card__wrap">
            {item.info.map((item, index) => (
              <div className="product-card__item" key={index}>
                <p className="product-card__item-text">{item.title}</p>
                <p className="product-card__item-number">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
