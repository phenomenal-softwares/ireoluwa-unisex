import { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  cartItems: [],
};

// Reducer for cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, selectedSize, selectedColor } = action.payload;
      const existing = state.cartItems.find(
        (item) =>
          item.id === id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === id &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
            // 👇 ensure original & sale prices are preserved
            price: action.payload.price,
            salePrice: action.payload.salePrice,
            onSale: action.payload.onSale,
          },
        ],
      };
    }

    case "REMOVE_FROM_CART": {
      const { id, selectedSize, selectedColor } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) =>
            !(
              item.id === id &&
              item.selectedSize === selectedSize &&
              item.selectedColor === selectedColor
            )
        ),
      };
    }

    case "INCREASE_QTY": {
      const { id, selectedSize, selectedColor } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DECREASE_QTY": {
      const { id, selectedSize, selectedColor } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === id &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor &&
            item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    }

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
}

// Create context
const CartContext = createContext();

// Provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Actions
  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (id, selectedSize, selectedColor) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id, selectedSize, selectedColor },
    });

  const increaseQty = (id, selectedSize, selectedColor) =>
    dispatch({
      type: "INCREASE_QTY",
      payload: { id, selectedSize, selectedColor },
    });

  const decreaseQty = (id, selectedSize, selectedColor) =>
    dispatch({
      type: "DECREASE_QTY",
      payload: { id, selectedSize, selectedColor },
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Cart totals → use salePrice if available & cheaper
  const totalItems = state.cartItems.length;
  const totalPrice = state.cartItems.reduce((sum, item) => {
    const effectivePrice =
      item.onSale && item.salePrice && item.salePrice < item.price
        ? item.salePrice
        : item.price;
    return sum + effectivePrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook for easier use
export function useCart() {
  return useContext(CartContext);
}
