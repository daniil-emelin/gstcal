import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

import { countryNamesForPickerSelector } from '@redux/selectors';
import { changeCountry } from '@redux/actions';
import { pickerSelectStyles } from '@constants/styles';

const SELECT_COUNTRY_PLACEHOLDER = {
  label: 'Select a country...',
  value: null,
  color: '#5d5d5d',
  fontFamily: 'FreeSans',
};

export const CountrySelect = React.memo(() => {
  const dispatch = useDispatch();

  const countryNamesForPicker = useSelector(countryNamesForPickerSelector);
  const { country } = useSelector(state => state);

  const handleCountryChange = value => dispatch(changeCountry(value));

  return (
    <RNPickerSelect
      placeholder={SELECT_COUNTRY_PLACEHOLDER}
      items={countryNamesForPicker}
      onValueChange={handleCountryChange}
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          top: 15,
          right: 12,
        },
      }}
      value={country}
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
});

const styles = StyleSheet.create({
  inputIcon: {
    width: 20,
    height: 20,
    tintColor: '#282828',
  },
});
