import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct} from './productAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchProduct(amount);
    return response.data;
  }
);

export const productListSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment } = productListSlice.actions;

export const selectCount = (state) => state.counter.value;


export default productListSlice.reducer;
