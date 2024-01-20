import { CartItem } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
}
export const calcItemCount = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0)
}
export const calcTotalCount = (items: CartItem[]) => {
  let totalCount = new Map()
  for (const item of items) {
    totalCount.set(item.title, item.count)
  }
  
  return totalCount
}