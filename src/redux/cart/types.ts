export type CartItem = {
  id: string;
  title: string;
  imageUrl: string;
  weight: number;
  text: string;
  price: number;
  count: number;
  info: [{}];
};

export interface CartSliceState {
  totalPrice: number;
  itemCount: number;
  items: CartItem[];
}