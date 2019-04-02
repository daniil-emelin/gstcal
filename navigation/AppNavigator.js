import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {HomeScreen} from '../screens/HomeScreen/component';
import CalculateScreen from '../screens/CalculateScreen/container';
import LoadingScreen from '../screens/LoadingScreen/component';

export default createAppContainer(createStackNavigator({
  Loading: LoadingScreen,
  Main: HomeScreen,
  Calculate: CalculateScreen,
},
{
  initialRouteName: 'Loading',
}));
