import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

const setTotalBill = createAction('gstcal/setTotalBill');
const changeCountry = createAction('gstcal/changeCountry');
const changeRates = createAction('gstcal/changeRates');
const setCurrentRate = createAction('gstcal/setCurrentRate');
const setInclude = createAction('gstcal/setInclude');
const setPrice = createAction('gstcal/setPrice');
const setGoodPrice = createAction('gstcal/setGoodPrice');
const setTax = createAction('gstcal/setTax');

const calculateTotalBill = createAsyncThunk(
  'gstcal/calculateTotalBill',
  async (_, { getState, dispatch }) => {
    console.log('dispatchddd');
    const { price, included, currentRate } = getState();
    console.log('getState', getState());

    if (!price.length) {
      dispatch(setGoodPrice(0));
      dispatch(setTotalBill(0));
      return;
    }

    if (!included) {
      const totalBill = (parseFloat(price) / (100 + currentRate)) * currentRate;
      const priceWithoutTax = price - totalBill;

      dispatch(setTotalBill(price));
      dispatch(setTax(totalBill));
      dispatch(setGoodPrice(priceWithoutTax));
    } else {
      const tax = parseFloat(price) * (currentRate / 100);
      const totalBill = parseFloat(price) + tax;

      dispatch(setTotalBill(totalBill));
      dispatch(setTax(tax));
    }
  },
);

export {
  setTotalBill,
  changeCountry,
  changeRates,
  setCurrentRate,
  setInclude,
  setPrice,
  setGoodPrice,
  setTax,
  calculateTotalBill,
};
