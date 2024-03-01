// store.js
import { action, thunk } from 'easy-peasy';

const userModel = {
  user: null,
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  signIn: thunk(async (actions, payload) => {
    try {
      actions.setUser(payload);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }),
  signOut: thunk(async (actions) => {
    try {
      actions.setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  })
};

export default userModel;
