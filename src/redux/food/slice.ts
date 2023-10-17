import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Food, FoodSliceState, Status} from './types'
import {fetchFood} from './asyncActions'

const initialState: FoodSliceState = {
  items: [],
  status: Status.LOADING
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Food[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFood.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchFood.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchFood.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  }
})

export const { setItems } = foodSlice.actions;

export default foodSlice.reducer;