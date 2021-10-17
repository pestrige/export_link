import React from 'react';
import { components, DropdownIndicatorProps } from 'react-select';
import { ReactComponent as DropdownSVG } from '../../assets/images/dropdown-icon.svg';

const DropdownIndicator = (
  props: DropdownIndicatorProps
): JSX.Element => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownSVG />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
