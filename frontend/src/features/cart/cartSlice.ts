import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: string[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 15,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: { payload: string }) => {
      console.log("add item from cart slice", action.payload);

      // TODO: I should have products from the productSlice, check if the
      // item is not there return null, otherwise add the item to the cart.

      state.items.push(action.payload);
      state.totalQuantity++;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
