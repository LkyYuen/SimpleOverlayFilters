import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CustomMarker extends React.Component {
  render() {
    return (
        <View
            style={{ 
                width: 30,
                height: 30,
                borderRadius: 30/2,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View
                style={{ 
                    width: 25,
                    height: 25,
                    borderRadius: 30/2,
                    backgroundColor: 'red',
                    alignSelf: 'center',
                }}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 2,
    width: 40,
  },
});

export default CustomMarker;