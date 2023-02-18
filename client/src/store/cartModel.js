import { action, computed } from 'easy-peasy';

const cartModel = {
  cartProducts: [],
  showCart: false,
  addToCart: action((state, payload) => {
    const item = state.cartProducts.find((item) => item.id === payload.id);

    if (item) {
      item.qty += payload.qty;
    } else {
      state.cartProducts.push(payload);
    }
  }),
  increment: action((state, payload) => {
    const item = state.cartProducts.find((item) => item.id === payload.id);
    if (item) {
      item.qty++;
    }
  }),
  decrement: action((state, payload) => {
    const item = state.cartProducts.find((item) => item.id === payload.id);
    if (item) {
      item.qty--;
    }
  }),
  removeItem: action((state, payload) => {
    state.cartProducts = state.cartProducts.filter((item) => item.id !== payload.id);
  }),
  totalCartItems: computed((state) => {
    return state.cartProducts.reduce((acc, item) => acc + item?.qty, 0);
  }),
  totalPrice: computed((state) => {
    return state.cartProducts.reduce(
      (total, item) => total + Number(item?.qty) * Number(item?.price),
      0
    );
  }),
  resetCart: action((state) => {
    state.cartProducts = [];
  }),
  handleShowHideCart: action((state) => {
    state.showCart = !state.showCart;
  })
};

export default cartModel;
