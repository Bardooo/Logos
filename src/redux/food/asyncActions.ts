import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Food } from './types'

export const fetchFood = createAsyncThunk<Food[]>(
  'food/fetchFoodStatus',
  async() => {
    const {data} = await axios.get<Food[]>(
      'https://6403abed3bdc59fa8f2acb30.mockapi.io/items'
    );
    return data
  }
);
