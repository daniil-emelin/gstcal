import { setCurrentRate } from "./setCurrentRate";

export const changeRates = payload => (dispatch) => {
  dispatch({
    type: 'CHANGE_RATES',
    payload,
  });
};
