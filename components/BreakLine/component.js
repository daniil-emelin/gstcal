import React from 'react';
import { View } from 'react-native';

const BreakLine = ({ style }) => (
  <View style={{ width: '100%', ...style }}>
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: 'lightgrey',
      }}
    />
  </View>
);

export default BreakLine;
