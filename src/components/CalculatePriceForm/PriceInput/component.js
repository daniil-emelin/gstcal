import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, TextInput } from 'react-native';
import { setPrice } from '@redux/actions';

export const PriceInput = () => {
  const dispatch = useDispatch();
  const { price } = useSelector(state => state);

  const handlePriceChange = text => {
    dispatch(setPrice(text.replace(/[^0-9.]/g, '')));
  };

  return (
    <TextInput
      style={styles.priceInput}
      keyboardType="numeric"
      onChangeText={handlePriceChange}
      value={price}
      placeholder="Enter the price"
      placeholderTextColor="#d5d5da"
    />
  );
};

const styles = StyleSheet.create({
  priceInput: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
    color: 'black',
    fontFamily: 'FreeSans',
  },
});
