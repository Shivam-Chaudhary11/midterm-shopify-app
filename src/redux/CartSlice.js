import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  wishListItems: [],
  heartActive: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        const tempItem = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(tempItem);
        toast.success(`${action.payload.title} added to the cart`, {
          position: "top-right",
          autoClose: 600,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        state.cartItems[itemIndex].itemQuantity += 1;
      }
    },

    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].itemQuantity > 1) {
          state.cartItems[itemIndex].itemQuantity -= 1;
        } else {
          state.cartItems.map(() => {
            const filteredCartItems = state.cartItems.filter(
              (item) => item.id !== action.payload.id
            );
            state.cartItems = filteredCartItems;
          });
        }
      }
    },
    deleteFromCart(state, action) {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = filteredCartItems;
      toast.error(`${action.payload.title} removed from the cart`, {
        position: "top-right",
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
    addToWishlist(state, action) {
      let itemIndex = state.wishListItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const filteredWishItems = state.wishListItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.wishListItems = filteredWishItems;
        toast.warning(`${action.payload.title} removed from wishlist`, {
          position: "top-right",
          autoClose: 600,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        const tempItem = { ...action.payload, heart: true };
        state.wishListItems.push(tempItem);
        toast.info(`${action.payload.title} successfully added to wishlist`, {
          position: "top-right",
          autoClose: 600,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
    removeFromWishlist(state, action) {
      state.wishListItems.map(() => {
        const filteredWishItems = state.wishListItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.wishListItems = filteredWishItems;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  deleteFromCart,
  addToWishlist,
  removeFromWishlist,
} = cartSlice.actions;
export default cartSlice.reducer;