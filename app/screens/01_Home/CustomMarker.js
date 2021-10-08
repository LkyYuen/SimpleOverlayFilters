import React from 'react';
import { View } from 'react-native';
import { Colors } from "../../constants"
import { Shadow } from 'react-native-shadow-2';

const CustomMarker = props => {
  return (
    <Shadow
      startColor={props.pressed ? 'rgba(0,0,0,0.13)' : 'transparent'}
      distance={props.pressed ? 5 : 0}
    >
      <View
        style={{ 
          width: 30,
          height: 30,
          borderRadius: 30/2,
          backgroundColor: Colors.sliderBorderColor,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{ 
            width: 25,
            height: 25,
            borderRadius: 50/2,
            backgroundColor: Colors.pillActiveColor,
            alignSelf: 'center',
          }}
        />
      </View>
    </Shadow>
  );
}

export default CustomMarker;