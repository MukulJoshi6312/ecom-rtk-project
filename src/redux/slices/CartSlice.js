import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [], // Ensure products is an array
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
      }
)

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            state.products.push(action.payload);
        },
        remove: (state, action) => {
            // Correct way to mutate state
            state.products = state.products.filter(item => item.id !== action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status = "loading"
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products = action.payload;
            state.status = "succeeded"
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          });
    }
})

export const { add, remove } = CartSlice.actions;

export default CartSlice.reducer;
