import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { Colors, Strings, Images } from '../../constants'
import { View, Text, StyleSheet, BackHandler, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ButtonCustom, BackdropCustom } from '../../components'
import BottomSheet, { BottomSheetView, BottomSheetBackdrop, useBottomSheetDynamicSnapPoints } from '@gorhom/bottom-sheet';
import { pull } from "lodash"
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomLabel from './CustomLabel';
import CustomMarker from './CustomMarker';

const HomeView = props => {
    let a = false;
    const bottomSheetRef = useRef(null);
    // const snapPoints = useMemo(() => ['50%'], []);
    const snapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

    const {
        animatedHandleHeight,
        animatedSnapPoints,
        animatedContentHeight,
        handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(snapPoints);

    const [selectedWorkoutTypeArray, setSelectedWorkoutTypeArray] = useState([])
    const [multiSliderValue, setMultiSliderValue] = useState([3, 7]);

    const arr = [
        { id: 1, value: Strings.cardio },
        { id: 2, value: Strings.fullBody },
        { id: 3, value: Strings.upperBody },
        { id: 4, value: Strings.lowerBody },
        { id: 5, value: Strings.chest },
        { id: 6, value: Strings.arms },
        { id: 7, value: Strings.core },
        { id: 8, value: Strings.shoulders },
        { id: 9, value: Strings.back },
        { id: 10, value: Strings.legs },
    ]

    useEffect(() => {
        const backAction = () => {
            console.log(a)
            if (a) {
                a = false
                bottomSheetRef.current?.close();
            }
            else {
                BackHandler.exitApp()
            }
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
    }, []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const handleOpenPress = useCallback(() => {
        a = true
        bottomSheetRef.current?.expand();
    }, []);

    const handleClosePress = useCallback(() => {
        a = false
        bottomSheetRef.current?.close();
    }, []);

    const handleWorkoutTypeChange = (value) => {
        if (selectedWorkoutTypeArray.includes(value.id)) {
            pull(selectedWorkoutTypeArray, value.id)
            setSelectedWorkoutTypeArray([...selectedWorkoutTypeArray])
        }
        else {
            selectedWorkoutTypeArray.push(value.id)
            setSelectedWorkoutTypeArray([...selectedWorkoutTypeArray])
        }
    }

    const multiSliderValuesChange = values => setMultiSliderValue(values);

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
            <ButtonCustom
                title={Strings.openModal}
                textColor={Colors.txtPillActiveColor}
                backgroundColor={Colors.pillActiveColor}
                onPress={() => handleOpenPress()}
            />
            <ButtonCustom
                title={Strings.openModal}
                textColor={Colors.txtPillActiveColor}
                backgroundColor={Colors.pillActiveColor}
                onPress={() => handleClosePress()}
            />
            <BottomSheet
                index={-1}
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={(backdropProps) => (
                    <BottomSheetBackdrop
                        {...backdropProps}
                        enableTouchThrough={true}
                        appearsOnIndex={0}
                        disappearsOnIndex={-1}
                        closeOnPress={true}
                    />
                )}
                snapPoints={animatedSnapPoints}
                handleHeight={animatedHandleHeight}
                contentHeight={animatedContentHeight}
            >
                <BottomSheetView
                    style={styles.contentContainer}
                    onLayout={handleContentLayout}
                >
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image
                            source={Images.iconClose}
                            style={{ width: 11, height: 11 }}
                            resizeMethod={"resize"}
                            resizeMode={"contain"}
                        />
                        <TextCustom style={{ fontWeight: '600', fontSize: 16 }}>
                            {Strings.filters}
                        </TextCustom>
                        <Image
                            source={Images.iconCheck}
                            style={{ width: 13, height: 9 }}
                            resizeMethod={"resize"}
                            resizeMode={"contain"}
                        />
                    </View>
                    <View style={{ marginTop: 33 }}>
                        <TextCustom style={{ fontSize: 14, color: Colors.txtTitleColor }}>
                            {Strings.workoutType}
                        </TextCustom>
                        <View style={{ flexDirection: 'row', marginTop: 20, flexWrap: 'wrap' }}>
                            {arr.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={{ 
                                            borderRadius: 20,
                                            backgroundColor: selectedWorkoutTypeArray.includes(item.id) ? Colors.pillActiveColor : Colors.pillInactiveColor,
                                            paddingVertical: 13,
                                            paddingHorizontal: 20,
                                            marginRight: 11,
                                            marginTop: 11
                                        }}
                                        onPress={() => handleWorkoutTypeChange(item)}
                                    >
                                        <TextCustom style={{ fontSize: 12, color: Colors.txtPillActiveColor }}>
                                            {item.value}
                                        </TextCustom>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                    <View style={{ marginTop: 33 }}>
                        <MultiSlider
                            values={[multiSliderValue[0], multiSliderValue[1]]}
                            sliderLength={250}
                            onValuesChange={multiSliderValuesChange}
                            min={0}
                            max={10}
                            step={1}
                            allowOverlap
                            snapped
                            enableLabel={true}
                            customMarker={CustomMarker}
                            customLabel={CustomLabel}
                            trackStyle={{ backgroundColor: Colors.sliderBackgroundColor, height: 7 }}
                            selectedStyle={{ backgroundColor: Colors.pillActiveColor }}
                            sliderLength={Dimensions.get('screen').width - 40}
                        />
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
    },
});

export default HomeView