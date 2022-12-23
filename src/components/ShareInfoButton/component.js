import React from 'react';
import { TouchableOpacity, Image, Share, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const ShareInfoButton = () => {
  const { included, price, totalBill, goodPrice, tax, currentRate } =
    useSelector(state => state);

  return (
    <TouchableOpacity
      style={styles.shareButtonStyles}
      onPress={() => {
        return Share.share({
          message: `Good/Services Cost - ${
            !included
              ? Math.round(goodPrice * 100) / 100
              : Math.round(price * 100) / 100
          }, Total Tax - ${
            Math.round(tax * 100) / 100
          }, Tax Rate - ${currentRate}, Total Bill - ${
            Math.round(totalBill * 100) / 100 || '0.00'
          }`,
        });
      }}>
      <Image
        style={styles.shareIconStyles}
        source={require('@assets/images/export_icon.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shareIconStyles: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  shareButtonStyles: {
    paddingRight: 20,
  },
});
