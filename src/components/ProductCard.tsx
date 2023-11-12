import busket from '../assets/img/busket.svg'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cart/slice';

type ProductCardType = {
  item: {
    id: string;
    title: string;
    imageUrl: string;
    weight: number;
    text: string;
    price: number;
    count: number;
    info: [{
      id: number,
      title: string,
      value: number,
    }];
  }
};


const ProductCard: React.FC<ProductCardType> = ({ item }) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    dispatch(addItem(item));
  };
  return (
    <div className="product-card">
      <img
        className="product-card__img"
        src={item.imageUrl}
        alt="product-img"
      />
      <div className="product-card__info">
        <div className="product-card__top">
          <div className="product-card__text">
            <h5 className="product-card__title">{item.title}</h5>
            <p className="product-card__main-text">
              {item.text}
            </p>
          </div>
          <div className="product-card__main">
            <p className="product-card__weight">
              Вес: {item.weight} г
            </p>
            <div className="product-card__cost">
              <div className="product-card__btn" onClick={onClickAdd}>
                <p className="product-card__btn-text">В корзину</p>
                <img
                  className="product-card__btn-img"
                  src={busket}
                  alt="busket"
                />
              </div>
              <p className="product-card__cost-text">
                {item.price} ₽
              </p>
            </div>
          </div>
        </div>
        <div className="product-card__buttom">
          <div className="product-card__wrap">
            {item.info.map((item, index) => (
              <div className="product-card__item" key={index}>
                <p className="product-card__item-text">
                  {item.title}
                </p>
                <p className="product-card__item-number">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
