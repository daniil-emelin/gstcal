/**
 * @format
 */
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';

const Apps = () => <App />;

AppRegistry.registerComponent(appName, ()=>Apps);
