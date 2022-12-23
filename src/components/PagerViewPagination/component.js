import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';

const DOT_SIZE = 40;

export const PagerViewPagination = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
  pagerViewRef,
  pages = [],
}) => {
  const inputRange = [0, pages.length];
  const translateX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, pages.length * DOT_SIZE],
  });

  const paginationIndicatorPositionStyles = {
    transform: [{ translateX: translateX }],
  };

  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[styles.paginationIndicator, paginationIndicatorPositionStyles]}
      />
      {pages.map((item, page) => {
        return (
          <TouchableOpacity
            key={item}
            style={styles.paginationDotContainer}
            onPress={() => pagerViewRef.current?.setPage(page)}>
            <View style={styles.paginationDot} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 70,
    flexDirection: 'row',
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
    backgroundColor: 'white',
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    position: 'absolute',
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
});
