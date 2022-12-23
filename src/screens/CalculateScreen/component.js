import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text } from 'react-native';
import { BreakLine } from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import PriceInput from '../../components/CalculatePriceForm/PriceInput';
import RowWithLabel from '../../components/CalculatePriceForm/RowWithLabel';
import CountrySelect from '../../components/CalculatePriceForm/CountrySelect';
import RateSelect from '../../components/CalculatePriceForm/RateSelect';
import IncludedSwitch from '../../components/CalculatePriceForm/IncludedSwitch';
import ShareInfoButton from '../../components/ShareInfoButton';

export const CalculateScreen = ({ navigation }) => {
  const { included, price, totalBill, goodPrice, tax } = useSelector(
    state => state,
  );

  React.useEffect(() => {
    navigation.setOptions({ headerRight: () => <ShareInfoButton /> });
  }, [navigation]);

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <RowWithLabel label="COUNTRY">
        <CountrySelect />
      </RowWithLabel>
      <PriceInput />
      <RowWithLabel label="RATE">
        <RateSelect />
      </RowWithLabel>
      <BreakLine />
      <RowWithLabel
        label="INCLUDED / EXCLUDED"
        customLabelWrapperStyles={styles.includedSwitchCustomContentStyles}
        customContentStyles={styles.customContentStyles}>
        <IncludedSwitch />
      </RowWithLabel>
      <BreakLine />
      <RowWithLabel
        label="Good price"
        customLabelWrapperStyles={styles.customLabelWrapperStyles}
        customLabelTextStyles={styles.textStyle}
        customContentStyles={styles.customContentStyles}>
        <Text style={styles.numStyle}>
          {!included
            ? Math.round(goodPrice * 100) / 100
            : Math.round(price * 100) / 100}
        </Text>
      </RowWithLabel>
      <BreakLine />
      <RowWithLabel
        label="TAX"
        customLabelWrapperStyles={styles.customLabelWrapperStyles}
        customLabelTextStyles={styles.textStyle}
        customContentStyles={styles.customContentStyles}>
        <Text style={styles.numStyle}>{Math.round(tax * 100) / 100}</Text>
      </RowWithLabel>
      <BreakLine />
      <RowWithLabel
        label="Total Bill"
        customLabelWrapperStyles={styles.customLabelWrapperStyles}
        customLabelTextStyles={styles.textStyle}
        customContentStyles={styles.customContentStyles}>
        <Text style={styles.numStyle}>{Math.round(totalBill * 100) / 100}</Text>
      </RowWithLabel>
    </KeyboardAwareScrollView>
  );
};

//#3B343C
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  textStyle: {
    fontFamily: 'FreeSans',
    fontSize: 15,
    color: '#141414',
  },
  numStyle: {
    fontFamily: 'FreeSans',
    fontSize: 15,
    color: '#141414',
  },
  customLabelWrapperStyles: { flex: 0.6 },
  customContentStyles: { flex: 0.4 },
  includedSwitchCustomContentStyles: {
    flex: 0.6,
    justifyContent: 'flex-end',
  },
});
