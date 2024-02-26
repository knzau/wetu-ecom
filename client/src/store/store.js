import { createStore } from 'easy-peasy';
import cartModel from './cartModel';
import { persist, action } from 'easy-peasy';

const loadingModel = {
  isLoading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  })
};

export const store = createStore(persist({ cartModel: cartModel, loadingModel }));
