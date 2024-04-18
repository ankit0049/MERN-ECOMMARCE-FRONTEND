import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchBrands, fetchCategories, fetchProductsByFilters} from './productAPI';

const initialState = {
  products : [{
    "id": 30,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/30/1.jpg",
      "https://cdn.dummyjson.com/product-images/30/2.jpg",
      "https://cdn.dummyjson.com/product-images/30/3.jpg",
      "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg"
    ]
  }] ,  
  category:[],
  brands:[],
  totalItems:0,
  status: 'idle',
};

 export const fetchCategoriesAsync= createAsyncThunk(
  'product/fetchCategories',
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
); 

export const fetchBrandsAsync = createAsyncThunk(
  'product/fetchBrands',
  async () => {
    const response = await fetchBrands();
    return response.data;
  }
); 

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const fetchProductsByFilterAsync = createAsyncThunk(
  'product/fetchProductsByFIlters',
  async ({filter,sort ,pagination}) => {
    const response = await fetchProductsByFilters(filter,sort ,pagination);
    return response.data;
  }
);
export const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      }) .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      }).addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands= action.payload;
      }).addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.category = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products; 
export const selectTotalItems = (state) => state.product.totalItems;  
export const selectAllBrands  = (state)=> state.product.brands;
export const selectAllCategory = (state)=> state.product.category;

export default productSlice.reducer;
