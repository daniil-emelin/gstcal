import React from 'react';
import { Switch } from '..';

const CustomSwitch = ({ value, onChange }) => (
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
        activeButtonBackgroundColor={'purple'}
        inactiveButtonBackgroundColor={'purple'}
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

export default CustomSwitch