import React from 'react';
import {TouchableOpacity} from 'react-native';
import { ICClose } from 'assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
      if(icon === 'close'){
          return <ICClose fill="#0f0"/>
      }
      return <ICClose/>
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon/>
    </TouchableOpacity>
  );
};

export default IconOnly;
