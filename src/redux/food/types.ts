export type Food = {
  id: string,
  imageUrl: string,
  title: string,
  weight: number,
  text: string,
  price: number,
  count: number,
  info: [
    {
      id: number,
      title: string,
      value: number
    }
  ]
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface FoodSliceState {
  items: Food[];
  status: Status;
}