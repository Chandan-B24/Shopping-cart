import React, { createContext, useContext, useReducer } from 'react';

type CartItem = {
  id: number,
  name: string,
  price: number,
  quantity: number
};

type CartState = {
  cart: CartItem[]
};

type Action =
  | { type: 'NEW_ITEM', payload: CartItem }
  | { type: 'INCREMENT_ITEM', payload: CartItem }
  | { type: 'DECREMENT_ITEM', payload: CartItem }
  | { type: 'REMOVE_FROM_CART', payload: number };

type CartContextType = {
  state: CartState,
  dispatch: React.Dispatch<Action>,
  totalPrice: number
};

const initialState: CartState = {
  cart: [],
};

const CartContext = createContext<CartContextType | undefined>(undefined);



const cartReducer = (state: CartState, action: Action): CartState => {
    switch (action.type) {
      case 'NEW_ITEM':
          return { ...state, cart: [...state.cart, action.payload] };
    case 'INCREMENT_ITEM':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case 'DECREMENT_ITEM':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
                )
            };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
      default: 
        return state;
    }
  };
  






export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalPrice = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return <CartContext.Provider value={{ state, dispatch,totalPrice}}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('out of context');
  }
  return context;
};
