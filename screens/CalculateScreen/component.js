import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Share, TouchableOpacity, Image, Platform
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { CustomSwitch, BreakLine } from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export class CalculateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      included: false,
      stateIncluded: false,
    };
  }

  static navigationProps = {
    header: ({ state }) => ({
      bill: state.params.bill,
    }),
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'GST CAL',
    headerLayoutPreset: 'center',
    headerStyle: {
      fontFamily: 'FreeSans',
      height: 80,
      paddingTop: 20,
      backgroundColor: 'purple',
      textAlign: 'center',
    },
    headerLeft: <View style={{padding:6}}></View>,
    headerTitleStyle: {
      flexGrow:1,
      alignSelf:'center',
      color: 'white',
      textAlign: 'center',
      letterSpacing: 5,
    },
    headerRight: <TouchableOpacity
      style={{ paddingRight: 20 }}
      onPress={() => {
        const {included, goodPrice, price, goodRate, currentRate, bill} = navigation.state.params;
        return(
          Share.share({
            message:
            `Good/Services Cost - ${!included ? (Math.round(goodPrice * 100) / 100) : (Math.round(price * 100) / 100)}, Total Tax - ${(Math.round(goodRate * 100) / 100)}, Tax Rate - ${currentRate}, Total Bill - ${(Math.round(bill * 100) / 100) || '0.00'}`
          }).then(res => console.log(navigation.state))
        )
      }}
    >
      <Image style={{ width: 30, height: 30, tintColor: 'white' }} source={require('./../../assets/images/export_icon.png')} />
    </TouchableOpacity>,
  })

  componentDidMount() {
    this.props.navigation.setParams({
      bill: this.props.bill,
      goodPrice: this.props.goodPrice,
      price: this.props.price,
      currentRate: this.props.currentRate,
      goodRate: this.props.goodRate,
      included: this.props.included,
    });
  }

  componentDidUpdate(prevProps) {
    const {bill, goodPrice, price, currentRate, goodRate, included} = this.props;
    if (bill !== prevProps.bill || goodPrice !== prevProps.goodPrice || currentRate !== prevProps.currentRate || goodRate !== prevProps.goodRate || included !== prevProps.included) {
      this.props.navigation.setParams({
        bill: this.props.bill,
        goodPrice: this.props.goodPrice,
        price: this.props.price,
        currentRate: this.props.currentRate,
        goodRate: this.props.goodRate,
        included: this.props.included,
      });
    }
  }

  render() {
    const { stateIncluded } = this.state;
    const {
      data, country, rates, currentRate, included, price, bill, goodPrice, goodRate,
    } = this.props;
    const {
      changeCountry, changeRates, setCurrentRate, setInclude, setPrice,
    } = this.props;
    const countries = Object.keys(data);
    const arr = [];
    const ratesArr = [];
    countries.map(i => arr.push({ label: i, value: i }));
    rates.length && rates.map(i => ratesArr.push({ label: `${i}%`, value: i }));
    const countrySelectPlaceholder = {
      label: 'Select a country...',
      value: null,
      color: '#5d5d5d',
      fontFamily: 'FreeSans',
    };
    const rateSelectPlaceholder = {
      label: 'Select a rate...',
      value: null,
      color: '#5d5d5d',
      fontFamily: 'FreeSans',
    };
    return (
      <KeyboardAwareScrollView style={styles.container}>
          <View style={styles.flexRowSpaceBetween}>
            <View style={{ display: 'flex', flex: 0.3 }}>
              <Text style={{fontFamily: 'FreeSans', fontSize: 16, color: '#4f4f4f'}}>
                COUNTRY
              </Text>
            </View>
            <View style={{ display: 'flex', flex: 0.7 }}>
              <RNPickerSelect
                placeholder={countrySelectPlaceholder}
                items={arr}
                onValueChange={(value) => {
                  changeCountry(value);
                }}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: 15,
                    right: 12,
                  },
                }}
                value={country}
                useNativeAndroidPickerStyle={false}
                textInputProps={{ underlineColor: 'yellow' }}
                Icon={() => <Image style={{width:20, height:20, tintColor: '#282828'}} source={require('./../../assets/images/down.png')}/>}
              />
            </View>
          </View>
          <TextInput
            style={styles.priceInput}
            keyboardType="numeric"
            onChangeText={(text) => {
              setPrice(text.replace(/[^0-9\.]/g, ''));
            }
            }
            value={price}
            placeholder="Enter the price"
            placeholderTextColor="#d5d5da"
          />
          <View
            style={styles.flexRowSpaceBetween}
          >
            <View style={{ display: 'flex', flex: 0.3 }}><Text style={{fontFamily: 'FreeSans', fontSize: 16, color: '#4f4f4f'}}>RATE</Text></View>
            <View style={{ display: 'flex', flex: 0.7 }}>
              <RNPickerSelect
                placeholder={rateSelectPlaceholder}
                items={ratesArr}
                onValueChange={(value) => {
                  setCurrentRate(value);
                }}
                style={{
                  ...pickerSelectStyles,
                  iconContainer: {
                    top: 15,
                    right: 12,
                  },
                }}
                value={currentRate}
                useNativeAndroidPickerStyle={false}
                textInputProps={{ underlineColor: 'yellow' }}
                Icon={() => <Image style={{width:20, height:20, tintColor: '#282828'}} source={require('./../../assets/images/down.png')}/>}
              />
            </View>
          </View>
          <BreakLine />
          <View
            style={styles.flexRowSpaceBetween}
          >
            <View style={{ flex: 0.6 }}><Text style={{fontFamily: 'FreeSans', fontSize: 16, color: '#4f4f4f'}}>INCLUDED / EXCLUDED</Text></View>
            <View style={{ flex: 0.4, justifyContent: 'flex-end' }}>
              <CustomSwitch
                value={included}
                onChange={() => {
                  setInclude(!included);
                  this.setState({ stateIncluded: !stateIncluded });
                }
                }
              />
            </View>
          </View>
          <BreakLine />
          <View
            style={styles.flexRowSpaceBetween}
          >
            <View style={{ flex: 0.6 }}><Text style={styles.textStyle}>Good price</Text></View>
            <View style={{ flex: 0.4 }}><Text style={styles.numStyle}>{!included ? (Math.round(goodPrice * 100) / 100) : (Math.round(price * 100) / 100)}</Text></View>
          </View>
          <BreakLine />
          <View
            style={styles.flexRowSpaceBetween}
          >
            <View style={{ flex: 0.6 }}><Text style={styles.textStyle}>TAX</Text></View>
            <View style={{ flex: 0.4 }}><Text style={styles.numStyle}>{(Math.round(goodRate * 100) / 100)}</Text></View>
          </View>
          <BreakLine />
          <View
            style={styles.flexRowSpaceBetween}
          >
            <View style={{ flex: 0.6 }}><Text style={styles.textStyle}>Total Bill</Text></View>
            <View style={{ flex: 0.4 }}><Text style={styles.numStyle}>{(Math.round(bill * 100) / 100)}</Text></View>
          </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  textStyle : {
    fontFamily: 'FreeSans',
    fontSize: 15,
    color: '#141414',
  },
  numStyle : {
    fontFamily: 'FreeSans',
    fontSize: 15,
    color: '#141414',
  },
  flexRowSpaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 20,
  },
  priceInput: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
    color: 'black',
    fontFamily: 'FreeSans',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
});
