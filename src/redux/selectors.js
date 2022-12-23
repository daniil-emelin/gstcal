import { createSelector } from '@reduxjs/toolkit';

const stateSelector = state => state;

const countryNamesForPickerSelector = createSelector(stateSelector, state =>
  Object.keys(state.data).map(countryName => ({
    label: countryName,
    value: countryName,
  })),
);
const ratesForPickerSelector = createSelector(stateSelector, state =>
  state.rates.map(rate => ({ label: `${rate}%`, value: rate })),
);

export { countryNamesForPickerSelector, ratesForPickerSelector };
