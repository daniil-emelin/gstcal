import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import store from './store';


export class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' ? <StatusBar barStyle="default" /> : <StatusBar translucent backgroundColor="transparent" />}
            <AppNavigator />
          </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewPager: {
    flex: 1,
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
});
