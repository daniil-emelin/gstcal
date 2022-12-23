import React from 'react';
import Switch from '@components/Switch';
import { useColorScheme } from 'react-native';
import { themes } from '@constants/themes';

const CustomSwitch = ({ value, onChange }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Switch
      value={value}
      onChangeValue={onChange}
      activeText={''}
      inactiveText={''}
      fontSize={16}
      activeTextColor={'rgba(255, 255, 255, 1)'}
      inactiveTextColor={'rgba(255, 255, 255, 1)'}
      activeBackgroundColor={'white'}
      inactiveBackgroundColor={'white'}
      activeButtonBackgroundColor={
        isDarkMode ? themes.dark.mainColor : themes.white.mainColor
      }
      inactiveButtonBackgroundColor={
        isDarkMode ? themes.dark.mainColor : themes.white.mainColor
      }
      switchWidth={100}
      switchHeight={50}
      switchBorderRadius={4}
      switchBorderColor={'lightgrey'}
      switchBorderWidth={1}
      buttonWidth={50}
      buttonHeight={50}
      buttonBorderRadius={4}
      buttonBorderColor={'lightgrey'}
      buttonBorderWidth={1}
      animationTime={150}
    />
  );
};

export default CustomSwitch;
