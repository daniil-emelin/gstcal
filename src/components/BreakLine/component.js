import React from 'react';
import { View, StyleSheet } from 'react-native';

const BreakLine = ({ style }) => (
  <View style={{ ...styles.breakLineWrapper, ...style }}>
    <View style={styles.breakLine} />
  </View>
);

const styles = StyleSheet.create({
  breakLineWrapper: {
    width: '100%',
  },
  breakLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgrey',
  },
});

export default BreakLine;
