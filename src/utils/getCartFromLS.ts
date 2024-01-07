import { CartItem } from '../redux/cart/types';
import { calcTotalPrice, calcItemCount } from './calcTotalPrice';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  const itemCount = calcItemCount(items);

  return {
    items: items as CartItem[],
    totalPrice,
    itemCount
  };
};
