import { createReducer } from '@reduxjs/toolkit';
import {
  setTotalBill,
  changeCountry,
  changeRates,
  setCurrentRate,
  setInclude,
  setPrice,
  setGoodPrice,
  setTax,
} from './actions';

const initialState = {
  data: {
    Albania: [6, 20],
    Argentina: [21, 1, 2, 3, 3.5, 4, 5, 6, 7, 8, 9],
    Armenia: [0, 20],
    Aruba: [1, 1.5, 2],
    Australia: [10],
    Austria: [10, 13, 19, 20],
    Azerbaijan: [18],
    Bahamas: [0, 7.5],
    Bahrain: [0, 5],
    Barbados: [0, 7.5, 17.5, 22],
    Belarus: [0, 10, 20, 25],
    Belgium: [0, 6, 12, 21],
    Bolivia: [0, 13, 14.94],
    'Bonaire, Sint Eustatius and Saba': [4, 5, 6, 7, 8, 10, 18, 22, 25, 30],
    Botswana: [0, 12],
    Brazil: [0, 0.65, 1.65, 1, 2, 3, 4, 5, 7.6, 10, 20, 30, 35],
    Bulgaria: [0, 9, 20],
    Canada: [0, 5, 13, 14, 15, 9.975],
    Chile: [15, 19, 20, 30, 40, 50],
    China: [3, 5, 6, 11, 17],
    Colombia: [0, 5, 19],
    'Costa Rica': [0, 5, 10, 13],
    Croatia: [5, 13, 25],
    Curaçao: [7, 6, 9],
    Cyprus: [0, 5, 9, 19],
    'Czech Republic': [0, 10, 15, 21],
    Denmark: [0, 25],
    'Dominican Republic': [0, 16, 18],
    Ecuador: [0, 12],
    Egypt: [0, 5, 14],
    'El Salvador': [0, 13],
    Estonia: [0, 9, 20],
    'European Union': [],
    Finland: [0, 10, 14, 24],
    France: [2.1, 5.5, 10, 20],
    GCC: [],
    Georgia: [0.54, 18],
    Germany: [7, 19],
    Ghana: [0, 2.5, 3, 15, 17.5],
    Greece: [6, 13, 24],
    Guatemala: [0, 5, 12],
    Honduras: [15, 18],
    Hungary: [5, 18, 27],
    Iceland: [0, 11, 24],
    India: [0.25, 3, 5, 12, 18, 28],
    Indonesia: [0, 10],
    Ireland: [0, 9, 13.5, 23],
    'Isle of Man': [0, 5, 20],
    Israel: [0, 17],
    Italy: [4, 5, 10, 22],
    Japan: [8],
    Jersey: [0, 5],
    Jordan: [0, 4, 5, 10, 16],
    Kazakhstan: [0, 12],
    Kenya: [0, 16],
    Korea: [0, 10],
    Kosovo: [8, 18],
    Kuwait: [0, 5],
    Latvia: [0, 12, 21],
    Lebanon: [0, 11],
    Lithuania: [0, 5, 9, 21],
    Luxembourg: [3, 8, 14, 17],
    Macedonia: [0, 5, 18],
    Madagascar: [0, 20],
    Malaysia: [0, 6],
    Maldives: [0, 6, 12],
    Malta: [5, 7, 18],
    Mauritius: [0, 15],
    Mexico: [0, 16],
    Moldova: [8, 20],
    Mongolia: [0, 10],
    Morocco: [7, 10, 14, 20],
    Myanmar: [1, 3, 5],
    Namibia: [0, 15],
    Netherlands: [0, 6, 21],
    'New Zealand': [0, 15],
    Nicaragua: [0, 15],
    Nigeria: [0, 5],
    Norway: [0, 12, 15, 25],
    Oman: [0, 5],
    Pakistan: [0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 14, 15, 16, 17, 19.5],
    Panama: [10, 15, 7],
    'Papua New Guinea': [0, 10],
    Paraguay: [5, 10],
    Peru: [0, 18],
    Philippines: [0, 12],
    Poland: [0, 5, 8, 23],
    Portugal: [4, 5, 9, 12, 13, 18, 22, 23],
    'Puerto Rico': [1, 4, 10.5],
    Qatar: [0, 5],
    Romania: [5, 9, 19],
    'Russian Federation': [0, 10, 18],
    Rwanda: [0, 18],
    'Saint Lucia': [0, 10, 12.5],
    'Saudi Arabia': [0, 5],
    Serbia: [0, 10, 20],
    Seychelles: [0, 15],
    Singapore: [0, 7],
    'Sint Maarten': [5],
    'Slovak Republic': [0, 10, 20],
    Slovenia: [0, 9.5, 22],
    'South Africa': [0, 14],
    Spain: [4, 10, 21],
    Suriname: [0, 8, 10, 25],
    Sweden: [6, 12, 25],
    Switzerland: [0, 2.5, 3.7, 7.7],
    Taiwan: [
      0, 0.1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25,
    ],
    Tanzania: [0, 18],
    Thailand: [0, 7],
    'Trinidad and Tobago': [0, 12.5],
    Tunisia: [7, 13, 19],
    Turkey: [1, 8, 18],
    Uganda: [0, 18],
    Ukraine: [0, 7, 20],
    'United Arab Emirates': [0, 5],
    'United Kingdom': [0, 5, 20],
    'United States': [0, 1, 2, 3, 4, 5, 6, 7.25],
    Uruguay: [0, 10, 22],
    Venezuela: [0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    Vietnam: [0, 5, 10],
    Zambia: [0, 16],
    Zimbabwe: [0, 15],
  },
  country: '',
  rates: [],
  currentRate: 0,
  included: false,
  price: 0,
  totalBill: 0,
  goodPrice: 0,
  tax: 0,
};

export const rootReducer = createReducer(initialState, builder => {
  builder
    .addCase(changeCountry, (state, action) => {
      state.country = action.payload;
      state.rates = state.data[action.payload] ?? [];
      state.goodPrice = 0;
      state.price = 0;
      state.totalBill = 0;
      state.tax = 0;
    })
    .addCase(changeRates, (state, action) => {
      state.rates = action.payload;
    })
    .addCase(setCurrentRate, (state, action) => {
      state.currentRate = action.payload;
    })
    .addCase(setInclude, (state, action) => {
      state.included = action.payload;
    })
    .addCase(setPrice, (state, action) => {
      state.price = action.payload;
    })
    .addCase(setTotalBill, (state, action) => {
      state.totalBill = action.payload;
    })
    .addCase(setGoodPrice, (state, action) => {
      state.goodPrice = action.payload;
    })
    .addCase(setTax, (state, action) => {
      state.tax = action.payload;
    });
});
