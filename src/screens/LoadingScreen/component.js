import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { AsyncStorage } from '@react-native-community/async-storage';

const LoadingScreen = ({ navigation }) => {
  const getIsIntroDone = async () => {
    try {
      const done = await AsyncStorage.getItem('DONE');

      return done;
    } catch (e) {
      console.log('Failed to fetch the data from storage');
    }
  };

  useEffect(() => {
    async function fetchUser() {
      const isIntroDone = await getIsIntroDone();

      navigation.navigate(isIntroDone ? 'Calculate' : 'Main');
    }

    fetchUser();
  }, [navigation]);

  return (
    <ImageBackground
      source={require('@assets/images/splash.png')}
      style={styles.imageBackgroundStyles}
    />
  );
};

const styles = StyleSheet.create({
  imageBackgroundStyles: { width: '100%', height: '100%' },
});

export default LoadingScreen;
