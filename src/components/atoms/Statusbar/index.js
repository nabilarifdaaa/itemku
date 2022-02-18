import React from 'react';
import {StatusBar} from 'react-native';

const Statusbar = ({color}) => {
  return (
    <StatusBar
      barStyle="dark-content"
      hidden={false}
      backgroundColor={color}
      translucent={true}
    />
  );
};

export default Statusbar;
