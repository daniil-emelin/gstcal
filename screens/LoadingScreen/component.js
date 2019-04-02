import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  ImageBackground
} from 'react-native';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  static navigationOptions = {
    header: null,
  }

  _bootstrapAsync = async () => {
    const DONE = await AsyncStorage.getItem('DONE');
    this.props.navigation.navigate(DONE ? 'Calculate' : 'Main');
  };

  render() {
    return (
        <ImageBackground source={require('./../../assets/images/splash.png')} style={{ width: '100%', height: '100%' }}/>
    );
  }
}

export default LoadingScreen;