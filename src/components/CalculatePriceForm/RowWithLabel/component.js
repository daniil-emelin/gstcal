import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

export const RowWithLabel = ({
  label,
  children,
  customLabelWrapperStyles,
  customLabelTextStyles,
  customContentStyles,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColorStyle = { color: isDarkMode ? 'white' : '#4f4f4f' };

  return (
    <View style={styles.flexRowSpaceBetween}>
      <View style={customLabelWrapperStyles ?? styles.labelWrapper}>
        <Text
          style={[customLabelTextStyles ?? styles.labelText, textColorStyle]}>
          {label}
        </Text>
      </View>
      <View style={[customContentStyles ?? styles.content]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelWrapper: {
    display: 'flex',
    flex: 0.3,
  },
  labelText: {
    fontFamily: 'FreeSans',
    fontSize: 16,
    // color: '#4f4f4f',
  },
  content: {
    display: 'flex',
    flex: 0.7,
  },
  flexRowSpaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 20,
  },
});
