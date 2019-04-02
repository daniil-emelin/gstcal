import store from '../store';
import { setGoodPrice } from './setGoodPrice';
import { setGoodRate } from './setGoodRate';
export const calculatePrice = payload => (dispatch) => {
  let bill = 0;
  const { price } = store.getState();
  const { included } = store.getState();
  const { currentRate } = store.getState();
  if (!price.length) {
    dispatch(setGoodPrice(0));
    dispatch({
      type: 'CALCULATE_PRICE',
      payload: 0,
    });
    return;
  }
  if (!included) {
    bill = (parseFloat(price) / (parseFloat(price) + currentRate)) * currentRate;
    dispatch({
      type: 'CALCULATE_PRICE',
      payload: price,
    });
    dispatch(setGoodRate(bill));
    const priceWithoutTax = price - bill;
    dispatch(setGoodPrice(priceWithoutTax));
  } else {
    const tax = parseFloat(price) * (currentRate / 100);
    bill = parseFloat(price) + tax;
    dispatch({
      type: 'CALCULATE_PRICE',
      payload: bill,
    });
    dispatch(setGoodRate(tax));
  }
};
