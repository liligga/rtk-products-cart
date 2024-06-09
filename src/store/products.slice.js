import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(
      "https://dummyjson.com/products"
    )
    return response.data
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    cartItems: [],
    products: [],
    isLoading: false
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
        state.products = []
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload.products
      })
  }
})

export const productsReducer = productsSlice.reducer
export const { addToCart } = productsSlice.actions
