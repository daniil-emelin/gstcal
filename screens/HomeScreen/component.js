import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import { ViewPager } from 'rn-viewpager';
import StepIndicator from 'react-native-step-indicator';

const PAGES = [<Text>123</Text>, <Text>321</Text>, <Text>123</Text>];

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  static navigationOptions = {
    header: null,
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('DONE', 'DONE');
    } catch (error) {
      console.log('error', error);
    }
  };


  componentWillMount(){
    console.log('didmount');
    // this._retrieveData();
  }

    _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('DONE');
      if (value !== null) {
        console.log('VALUE', value);
        this.props.navigation.navigate('Calculate');
      }
    } catch (error) {
      console.log('error', error);
    }
  };


  componentWillReceiveProps(nextProps, nextState) {
    if (nextState.currentPage !== this.state.currentPage) {
      if (this.viewPager) {
        this.viewPager.setPage(nextState.currentPage);
      }
    }
  }


  render() {
    const { currentPage } = this.state;
    return (
      <View style={styles.container}>
        <ViewPager
          style={{ flexGrow: 1, backgroundColor: 'transparent' }}
          ref={(viewPager) => {
            this.viewPager = viewPager;
          }}
          onPageSelected={(page) => {
            this.setState({ currentPage: page.position });
          }}
        >
          {PAGES.map((page, currentPage) => this.renderViewPagerPage(page, currentPage))}
        </ViewPager>
        <View
          style={{
            width: 100,
            position: 'absolute',
            bottom: 70,
            left: '50%',
            transform: [{ translateX: -50 }],
          }}
        >
          <StepIndicator
            stepCount={3}
            customStyles={indicatorStyles}
            currentPosition={currentPage}
            onPress={position => this.viewPager.setPage(position)}
          />
        </View>
        <View
          style={{
            width: 100,
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: [{ translateX: -50 }],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (currentPage < 2) {
                this.viewPager.setPage(currentPage + 1);
              } else {
                this.props.navigation.navigate('Calculate');
                this._storeData();
              }
            }}
          >
            <Text
              style={styles.nextButtonText}
            >
              {currentPage <= 1 ? 'SKIP' : 'DONE'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderViewPagerPage = (data, currentPage) => {
    const images = [
      require('./../../assets/images/1.png'), 
      require('./../../assets/images/2.png'), 
      require('./../../assets/images/3.png')
    ];
    return (
      <View style={styles.page} key={currentPage}>
        <ImageBackground source={images[currentPage]} style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
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
    fontFamily: 'FreeSans'
  },
});

const indicatorStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 20,
  separatorStrokeWidth: 0,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: 'white',
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: 'white',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#7eaec4',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: 'transparent',
  stepIndicatorUnFinishedColor: 'transparent',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: 'transparent',
  labelSize: 13,
  currentStepLabelColor: 'transparent',
};
