import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  StyleSheet,
} from 'react-native';

// const Switch = ({
//   animationTime,
//   padding,
//   value,
//   onChangeValue,
//   activeText,
//   inactiveText,
//   fontSize,
//   activeTextColor,
//   inactiveTextColor,
//   activeBackgroundColor,
//   inactiveBackgroundColor,
//   activeButtonBackgroundColor,
//   inactiveButtonBackgroundColor,
//   switchWidth,
//   switchHeight,
//   switchBorderRadius,
//   switchBorderColor,
//   switchBorderWidth,
//   buttonWidth,
//   buttonHeight,
//   buttonBorderRadius,
//   buttonBorderColor,
//   buttonBorderWidth,
//   shadowColor,
//   shadowOffset,
//   shadowRadius,
//   shadowOpacity,
// }) => {
//   const [state, setState] = useState({
//     transformValue: new Animated.Value(value ? transformValue : padding, {
//       useNativeDriver: false,
//     }),
//     backgroundColor: new Animated.Value(value ? 90 : -90, {
//       useNativeDriver: false,
//     }),
//     buttonBackgroundColor: new Animated.Value(value ? 90 : -90, {
//       useNativeDriver: false,
//     }),
//   });

//   const updatedPadding = padding === true ? 5 : padding || 0;
//   const updatedTransformValue = switchWidth - buttonWidth - padding;

//   const startGroupAnimations = useCallback(() => {
//     Animated.parallel([
//       Animated.spring(state.transformValue, {
//         toValue: value ? updatedTransformValue : updatedPadding,
//         duration: animationTime,
//         useNativeDriver: false,
//       }),
//       Animated.timing(state.backgroundColor, {
//         toValue: value ? 75 : -75,
//         duration: animationTime,
//         useNativeDriver: false,
//       }),
//       Animated.timing(state.buttonBackgroundColor, {
//         toValue: value ? 75 : -75,
//         duration: animationTime,
//         useNativeDriver: false,
//       }),
//     ]).start();
//   }, [
//     state.transformValue,
//     state.backgroundColor,
//     state.buttonBackgroundColor,
//     value,
//     animationTime,
//     updatedPadding,
//     updatedTransformValue,
//   ]);

//   useEffect(() => {
//     if (value) {
//       startGroupAnimations();
//     }
//   }, [value, startGroupAnimations]);

//   const {transformValue, backgroundColor, buttonBackgroundColor} = state;

//   const backgroundColorValue = backgroundColor.interpolate({
//     inputRange: [-90, 90],
//     outputRange: [inactiveBackgroundColor, activeBackgroundColor],
//   });

//   const buttonBackgroundColorValue = buttonBackgroundColor.interpolate({
//     inputRange: [-90, 90],
//     outputRange: [inactiveButtonBackgroundColor, activeButtonBackgroundColor],
//   });

//   const containerHeight =
//     switchHeight > buttonHeight ? switchHeight : buttonHeight;
//   const containerWidth = switchWidth > buttonWidth ? switchWidth : buttonWidth;

//   return (
//     <TouchableWithoutFeedback onPress={onChangeValue}>
//       <View
//         style={[
//           styles.container,
//           {
//             height: containerHeight,
//             width: containerWidth,
//           },
//         ]}>
//         <Animated.View
//           style={{
//             backgroundColor: backgroundColorValue,
//             height: switchHeight,
//             width: switchWidth,
//             borderRadius: switchBorderRadius,
//             borderWidth: switchBorderWidth,
//             borderColor: switchBorderColor,
//             zIndex: 1,
//             position: 'absolute',
//             top: (containerHeight - switchHeight) / 2,
//             left: (containerWidth - switchWidth) / 2,
//           }}>
//           <View style={styles.animatedContainer}>
//             <View style={styles.textContainer}>
//               <Text style={{color: activeTextColor, fontSize}}>
//                 {value ? activeText : ''}
//               </Text>
//             </View>
//             <View style={styles.textContainer}>
//               <Text style={{color: inactiveTextColor, fontSize}}>
//                 {value ? '' : inactiveText}
//               </Text>
//             </View>
//           </View>
//         </Animated.View>
//         <Animated.View
//           style={{
//             backgroundColor: buttonBackgroundColorValue,
//             borderRadius: buttonBorderRadius,
//             borderWidth: buttonBorderWidth,
//             borderColor: buttonBorderColor,
//             width: buttonWidth,
//             height: buttonHeight,
//             zIndex: 3,
//             position: 'absolute',
//             top: (containerHeight - buttonHeight) / 2,
//             left: transformValue,
//             shadowColor: shadowColor,
//             shadowOpacity: shadowOpacity,
//             shadowOffset: shadowOffset,
//             shadowRadius: shadowRadius,
//           }}
//         />
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// export default Switch;

export default class Switch extends Component {
  constructor(props, context) {
    super(props, context);
    // Backwards compatibility: `padding` used to be bool, where `true = 5`
    this.padding = props.padding === true ? 5 : props.padding || 0;
    this.transformValue = props.switchWidth - props.buttonWidth - this.padding;
    this.state = {
      transformValue: new Animated.Value(
        props.value ? this.transformValue : this.padding,
        { useNativeDriver: false },
      ),
      backgroundColor: new Animated.Value(props.value ? 90 : -90, {
        useNativeDriver: false,
      }),
      buttonBackgroundColor: new Animated.Value(props.value ? 90 : -90, {
        useNativeDriver: false,
      }),
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps) {
      this.startGroupAnimations();
    }
  }

  startGroupAnimations = () => {
    const { animationTime, value } = this.props;

    Animated.parallel([
      Animated.spring(this.state.transformValue, {
        toValue: value ? this.transformValue : this.padding,
        duration: animationTime,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.backgroundColor, {
        toValue: value ? 75 : -75,
        duration: animationTime,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.buttonBackgroundColor, {
        toValue: value ? 75 : -75,
        duration: animationTime,
        useNativeDriver: false,
      }),
    ]).start();
  };

  render() {
    const { transformValue, backgroundColor, buttonBackgroundColor } =
      this.state;

    const {
      value,
      onChangeValue,
      activeText,
      inactiveText,
      fontSize,
      activeTextColor,
      inactiveTextColor,
      activeBackgroundColor,
      inactiveBackgroundColor,
      activeButtonBackgroundColor,
      inactiveButtonBackgroundColor,
      switchWidth,
      switchHeight,
      switchBorderRadius,
      switchBorderColor,
      switchBorderWidth,
      buttonWidth,
      buttonHeight,
      buttonBorderRadius,
      buttonBorderColor,
      buttonBorderWidth,
      shadowColor,
      shadowOffset,
      shadowRadius,
      shadowOpacity,
    } = this.props;

    const backgroundColorValue = backgroundColor.interpolate({
      inputRange: [-90, 90],
      outputRange: [inactiveBackgroundColor, activeBackgroundColor],
    });

    const buttonBackgroundColorValue = buttonBackgroundColor.interpolate({
      inputRange: [-90, 90],
      outputRange: [inactiveButtonBackgroundColor, activeButtonBackgroundColor],
    });

    const containerHeight =
      switchHeight > buttonHeight ? switchHeight : buttonHeight;
    const containerWidth =
      switchWidth > buttonWidth ? switchWidth : buttonWidth;

    return (
      <TouchableWithoutFeedback onPress={onChangeValue}>
        <View
          style={[
            styles.container,
            {
              height: containerHeight,
              width: containerWidth,
            },
          ]}>
          <Animated.View
            style={{
              backgroundColor: backgroundColorValue,
              height: switchHeight,
              width: switchWidth,
              borderRadius: switchBorderRadius,
              borderWidth: switchBorderWidth,
              borderColor: switchBorderColor,
              zIndex: 1,
              position: 'absolute',
              top: (containerHeight - switchHeight) / 2,
              left: (containerWidth - switchWidth) / 2,
            }}>
            <View style={styles.animatedContainer}>
              <View style={styles.textContainer}>
                <Text style={{ color: activeTextColor, fontSize }}>
                  {value ? activeText : ''}
                </Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={{ color: inactiveTextColor, fontSize }}>
                  {value ? '' : inactiveText}
                </Text>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            style={{
              backgroundColor: buttonBackgroundColorValue,
              borderRadius: buttonBorderRadius,
              borderWidth: buttonBorderWidth,
              borderColor: buttonBorderColor,
              width: buttonWidth,
              height: buttonHeight,
              zIndex: 3,
              position: 'absolute',
              top: (containerHeight - buttonHeight) / 2,
              left: transformValue,
              shadowColor: shadowColor,
              shadowOpacity: shadowOpacity,
              shadowOffset: shadowOffset,
              shadowRadius: shadowRadius,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },
  animatedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
