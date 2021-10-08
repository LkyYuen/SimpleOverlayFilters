import React from 'react';
import { Colors, Strings, Images, Options } from '../../constants'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ButtonCustom, ImageButtonCustom, BottomSheetCustom } from '../../components'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomLabel from './CustomLabel';
import CustomMarker from './CustomMarker';

const HomeView = props => {
    let { 
        bottomSheetRef,
        handleOpenSheetPress,
        handleSheetChange,
        handleCloseSheetPress,
        handleTimeFrameChange,
        handleWorkoutTypeChange,
        handleWorkoutLevelChange,
        handleEquipmentChange,
        selectedTimeFrame,
        selectedWorkoutTypeArray,
        selectedWorkoutLevel,
        selectedEquipment,
    } = props;

    const renderTimeFrame = () => {
        return (
            <View>
                <TextCustom style={styles.sectionTitle}>
                    {Strings.timeFrame}
                </TextCustom>
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <MultiSlider
                        values={[selectedTimeFrame[0], selectedTimeFrame[1]]}
                        onValuesChange={handleTimeFrameChange}
                        min={0}
                        max={60}
                        step={5}
                        allowOverlap
                        snapped
                        enableLabel={true}
                        customMarker={CustomMarker}
                        customLabel={CustomLabel}
                        trackStyle={{ backgroundColor: Colors.sliderBackgroundColor, height: 7 }}
                        selectedStyle={{ backgroundColor: Colors.pillActiveColor }}
                        sliderLength={Dimensions.get('screen').width - 60}
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', width: '100%' }}>
                <ButtonCustom
                    title={Strings.openModal}
                    textColor={Colors.txtPillActiveColor}
                    backgroundColor={Colors.pillActiveColor}
                    onPress={handleOpenSheetPress}
                />
            </View>
            <BottomSheetCustom
                bottomSheetRef={bottomSheetRef}
                sheetViewStyles={styles.contentContainer}
                handleSheetChange={handleSheetChange}
            >
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                    <ImageButtonCustom
                        image={Images.iconClose}
                        style={styles.imageStyle}
                        onPress={handleCloseSheetPress}
                    />
                    <TextCustom style={{ fontWeight: '600', fontSize: 16 }}>
                        {Strings.filters}
                    </TextCustom>
                    <ImageButtonCustom
                        image={Images.iconCheck}
                        style={styles.imageStyle}
                        onPress={handleCloseSheetPress}
                    />
                </View>
                <BottomSheetSection
                    title={Strings.workoutType}
                    options={Options.workoutTypeArray}
                    onPillPress={handleWorkoutTypeChange}
                    selectedOption={selectedWorkoutTypeArray}
                />
                {renderTimeFrame()}
                <BottomSheetSection
                    title={Strings.workoutLevel}
                    options={Options.workoutLevelArray}
                    onPillPress={handleWorkoutLevelChange}
                    selectedOption={selectedWorkoutLevel}
                />
                <BottomSheetSection
                    title={Strings.equipment}
                    options={Options.equipmentArray}
                    onPillPress={handleEquipmentChange}
                    selectedOption={selectedEquipment}
                />
            </BottomSheetCustom>
        </View>
    )
}

const BottomSheetSection = props => {
    const { title, options, selectedOption, onPillPress } = props
    let isSelected = false;

    return (
        <View>
            <TextCustom style={styles.sectionTitle}>
                {title}
            </TextCustom>
            <View style={styles.pillContainer}>
                {options.map((item, index) => {
                    isSelected = typeof(selectedOption) == "object" ? selectedOption.includes(item.id) ? true : false : selectedOption == item.id ? true : false
                    return (
                        
                        <TouchableOpacity
                            key={index}
                            onPress={() => onPillPress(item)}
                            style={[styles.pillStyle, {
                                backgroundColor: isSelected ? Colors.pillActiveColor : Colors.pillInactiveColor,
                            }]}
                        >
                            <TextCustom style={[styles.pillValue, { color: isSelected ? Colors.txtPillActiveColor : Colors.txtPillInactiveColor }]}>
                                {item.value}
                            </TextCustom>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 14,
        marginTop: 20,
        color: Colors.txtTitleColor
    },
    imageStyle: {
        width: 15,
        height: 15
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    pillContainer: {
        flexDirection: 'row',
        marginTop: 5,
        flexWrap: 'wrap'
    },
    pillStyle: {
        borderRadius: 20,
        paddingVertical: 13,
        paddingHorizontal: 20,
        marginRight: 11,
        marginTop: 11,
    },
    pillValue: {
        fontSize: 12
    }
});

export default HomeView