import { createStore } from 'easy-peasy';
import cartModel from './cartModel';
import { persist } from 'easy-peasy';

export const store = createStore(persist({ cartModel: cartModel }));
