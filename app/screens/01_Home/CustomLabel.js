import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Strings, Colors } from '../../constants'

const sliderRadius = 3;
const width = 50;

export default function CustomLabel(props) {
  const {
    oneMarkerValue,
    twoMarkerValue,
    oneMarkerLeftPosition,
    twoMarkerLeftPosition,
    oneMarkerPressed,
    twoMarkerPressed,
  } = props;

  return (
    <View style={{ position: 'relative', marginTop: 15 }}>
        {Number.isFinite(oneMarkerLeftPosition) &&
          Number.isFinite(oneMarkerValue) && (
            <View
              style={[
                styles.sliderLabel,
                { left: oneMarkerLeftPosition - width / sliderRadius - 11 },
                oneMarkerPressed && styles.markerPressed,
              ]}
            >
              <Text style={styles.sliderLabelText}>{oneMarkerValue} {Strings.mins}</Text>
            </View>
          )}

        {Number.isFinite(twoMarkerLeftPosition) &&
          Number.isFinite(twoMarkerValue) && (
            <View
              style={[
                styles.sliderLabel,
                { left: twoMarkerLeftPosition - width / sliderRadius - 11 },
                twoMarkerPressed && styles.markerPressed,
              ]}
            >
              <Text style={styles.sliderLabelText}>{twoMarkerValue} {Strings.mins}</Text>
            </View>
          )}
      </View>
  );
}

const styles = StyleSheet.create({
  sliderLabel: {
    position: 'absolute',
    bottom: 0,
    minWidth: width,
    padding: 8,
  },
  sliderLabelText: {
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 12,
    color: Colors.txtGeneralColor
  },
  markerPressed: {
  },
});