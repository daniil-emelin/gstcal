import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';

import PagerView from 'react-native-pager-view';
import { AsyncStorage } from '@react-native-community/async-storage';

import PagerViewPagination from '@components/PagerViewPagination';

const PAGES = ['1', '2', '3'];
const DOT_SIZE = 40;

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export const HomeScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const ref = useRef(null);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('DONE', 'DONE');
    } catch (error) {
      console.log('error', error);
    }
  };

  const renderViewPagerPage = page => {
    const images = [
      require('@assets/images/1.png'),
      require('@assets/images/2.png'),
      require('@assets/images/3.png'),
    ];

    return (
      <View style={styles.page} key={page}>
        <ImageBackground
          source={images[page]}
          style={styles.imageBackgroundStyles}
        />
      </View>
    );
  };

  return (
    <View style={styles.fullscreen}>
      <AnimatedPagerView
        ref={ref}
        initialPage={0}
        style={styles.pagerViewStyles}
        onPageScroll={Animated.event(
          [
            {
              nativeEvent: {
                offset: scrollOffsetAnimatedValue,
                position: positionAnimatedValue,
              },
            },
          ],
          {
            listener: ({ nativeEvent: { offset, position } }) => {
              console.log(`Position: ${position} Offset: ${offset}`);
            },
            useNativeDriver: true,
          },
        )}
        onPageSelected={({ nativeEvent }) => {
          setCurrentPage(nativeEvent.position);
        }}>
        {PAGES.map((_, page) => renderViewPagerPage(page))}
      </AnimatedPagerView>
      <PagerViewPagination
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
        pagerViewRef={ref}
        pages={PAGES}
      />
      <View style={styles.doneButtonStyles}>
        <TouchableOpacity
          onPress={() => {
            if (currentPage < 2) {
              ref.current?.setPage(currentPage + 1);
            } else {
              navigation.navigate('Calculate');
              storeData();
            }
          }}>
          <Text style={styles.nextButtonText}>
            {currentPage < 2 ? 'SKIP' : 'DONE'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    width: '100%',
    height: '100%',
  },
  stepIndicator: {
    backgroundColor: 'transparent',
  },
  page: {
    flex: 1,
  },
  nextButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'FreeSans',
  },
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
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  imageBackgroundStyles: {
    width: '100%',
    height: '100%',
  },
  doneButtonStyles: {
    width: 100,
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  pagerViewStyles: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
});
