import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {
  // {
  //   type: ADD_TO_CART,
  //   payload: {
  //     itemId,
  //   },
  // };

  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case REMOVE_FROM_CART:
      //TODO
      return { ...state, cartItems: state.cartItems.filter((el) => el.itemId !== action.payload.itemId) };

    case SET_QUANTITY:
      let targetIdx = state.cartItems.findIndex((el) => el.itemId === action.payload.itemId);
      //TODO
      return {
        ...state,
        cartItems: state.cartItems.map((el, idx) => {
          if (idx === targetIdx) {
            return action.payload;
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
};

export default itemReducer;
