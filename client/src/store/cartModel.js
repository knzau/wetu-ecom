import { action, debug } from 'easy-peasy';

const cartModel = {
  cartProducts: [],
  addToCart: action((state, payload) => {
    const item = state.cartProducts.find((item) => item.id === payload.id);

    if (item) {
      item.qty += payload.qty;
    } else {
      state.cartProducts.push(payload);
    }
    console.log(debug(state.cartProducts));
  }),
  removeItem: action((state, payload) => {
    state.cartProducts = state.cartProducts.filter((item) => item.id !== payload.id);
  }),
  resetCart: action((state) => {
    state.cartProducts = [];
  })
};

export default cartModel;
