import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setInclude } from '@redux/actions';
import { CustomSwitch } from '../../';

export const IncludedSwitch = () => {
  const dispatch = useDispatch();
  const { included } = useSelector(state => state);

  const handleIsIncludedSwitch = () => {
    dispatch(setInclude(!included));
  };

  return <CustomSwitch value={included} onChange={handleIsIncludedSwitch} />;
};
