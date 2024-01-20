import { ActionTypes } from "../../../redux/constants/action-type";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      
      return {
        ...state,
        cart: [...state.cart, payload.product],
      };

    case ActionTypes.REMOVE_FROM_CART:
      
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
};
