import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

import { setCurrentRate } from '@redux/actions';
import { ratesForPickerSelector } from '@redux/selectors';
import { pickerSelectStyles } from '@constants/styles';

const SELECT_RATE_PLACEHOLDER = {
  label: 'Select a rate...',
  value: null,
  color: '#5d5d5d',
  fontFamily: 'FreeSans',
};

export const RateSelect = () => {
  const dispatch = useDispatch();
  const ratesForPicker = useSelector(ratesForPickerSelector);
  const { currentRate } = useSelector(state => state);

  const handleCurrentRateChange = value => {
    dispatch(setCurrentRate(value));
  };

  return (
    <RNPickerSelect
      placeholder={SELECT_RATE_PLACEHOLDER}
      items={ratesForPicker}
      onValueChange={handleCurrentRateChange}
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          top: 15,
          right: 12,
        },
      }}
      value={currentRate}
      useNativeAndroidPickerStyle={false}
      textInputProps={{ underlineColor: 'yellow' }}
      Icon={() => (
        <Image
          style={styles.inputIcon}
          source={require('@assets/images/down.png')}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  inputIcon: {
    width: 20,
    height: 20,
    tintColor: '#282828',
  },
});
