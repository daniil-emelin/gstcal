import { calculatePrice } from './calculatePrice';

export const setPrice = payload => (dispatch) => {
  dispatch({
    type: 'SET_PRICE',
    payload,
  });
  dispatch(calculatePrice());
};
