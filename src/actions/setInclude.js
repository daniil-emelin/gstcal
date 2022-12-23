import { calculatePrice } from './calculatePrice';
export const setInclude = payload => (dispatch) => {
  dispatch({
    type: 'SET_INCLUDE',
    payload,
  });
  dispatch(calculatePrice());
};
