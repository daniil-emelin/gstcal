import { calculatePrice } from './calculatePrice';
import store from '../store';
export const setCurrentRate = payload => (dispatch, getState) => {
  const price = store.getState().price;
  const isEmpty = !price.length;
  dispatch({
    type: 'SET_CURRENT_RATE',
    payload,
  });
  !isEmpty && dispatch(calculatePrice());
};
