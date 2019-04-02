import store from '../store';
import { changeRates } from './changeRates';
import { setCurrentRate } from './setCurrentRate';
import { setGoodPrice } from './setGoodPrice';
import { setGoodRate } from './setGoodRate';
import { setPrice } from './setPrice';

export const changeCountry = payload => (dispatch, getState) => {
  console.log('GET',  store.getState().data[payload]);
  const rates = store.getState().data[payload];
  dispatch({
    type: 'CHANGE_COUNTRY',
    payload,
  });
  dispatch(changeRates(rates));
  dispatch(setGoodPrice(0));
  dispatch(setPrice(0));
  dispatch(setGoodRate(0));
  // rates.length && dispatch(setCurrentRate(rates[0]));
};
