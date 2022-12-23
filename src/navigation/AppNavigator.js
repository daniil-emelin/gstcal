import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen/component';
import { CalculateScreen } from '../screens/CalculateScreen/component';
import LoadingScreen from '../screens/LoadingScreen/component';
import { themes } from '@constants/themes';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.fullscreen}>
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Loading"
        component={LoadingScreen}
      />
      <Stack.Screen
        name="Calculate"
        options={{
          headerTitle: 'GST CAL',
          headerStyle: {
            fontFamily: 'FreeSans',
            height: 80,
            paddingTop: 20,
            backgroundColor: isDarkMode
              ? themes.dark.mainColor
              : themes.white.mainColor,
            textAlign: 'center',
          },
          headerTitleStyle: {
            flexGrow: 1,
            alignSelf: 'center',
            color: 'white',
            textAlign: 'center',
            letterSpacing: 5,
          },
          headerTintColor: 'white',
          headerLayoutPreset: 'center',
        }}
        component={CalculateScreen}
      />
    </Stack.Navigator>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    width: '100%',
    height: '100%',
  },
});

export default AppNavigator;
