import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchProducts} from "./shopApi";
import {sortByPrice} from "../utils/sortByPrice";

const initialState = {
  products: [],
  limit: 6,
  page: 1,
  totalCountProducts: 0,
  sortCurrent: {name: 'По умолчанию', type: 'default'},
  isLoading: false
};

export const fetchAllProducts = createAsyncThunk(
  'shop/fetchAllProducts',
  async () => {
    return await fetchProducts();
  }
);

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload
    },
    setSortCurrent: (state, action) => {
      state.sortCurrent = action.payload
    }
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state)=>{
      state.isLoading = true
    },

    [fetchAllProducts.fulfilled]: (state, action) => {
      state.totalCountProducts = action.payload.length
      state.page = 1
      state.isLoading = false
      // Добавление поля цены со скидкой
      const productListWithDiscountPrice = action.payload.map(product => {
        return {
          ...product,
          priceWithDiscount: product.discount ? product.price - (product.price * product.discount / 100) : product.price
        }
      })

      state.products = sortByPrice(productListWithDiscountPrice, state.sortCurrent)
    },
    [fetchAllProducts.rejected]: (state) => {
      state.isLoading = false
      alert('Не предвиденная ошибка')
    }
  },
});

export const { setPage, setSortCurrent } = shopSlice.actions;

export const selectShop = (state) => state.shop;


export default shopSlice.reducer;
