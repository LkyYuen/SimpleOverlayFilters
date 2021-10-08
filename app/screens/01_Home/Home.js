import React, { useEffect, useState, useCallback, useRef } from 'react';
import { View, BackHandler } from 'react-native';
import HomeView from './Home.View';
import { pull } from "lodash"

const Home = props => {
    let isBottomSheetOpened = false;
    const bottomSheetRef = useRef(null);

    const [selectedWorkoutTypeArray, setSelectedWorkoutTypeArray] = useState([])
    const [selectedWorkoutLevel, setSelectedWorkoutLevel] = useState(1)
    const [selectedEquipment, setSelectedEquipment] = useState(1)
    const [selectedTimeFrame, setSelectedTimeFrame] = useState([0, 20]);

    useEffect(() => {
        const backAction = () => {
            if (isBottomSheetOpened) {
                isBottomSheetOpened = false
                bottomSheetRef.current?.close();
            } else BackHandler.exitApp()
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
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

    const handleWorkoutLevelChange = (value) => {
        setSelectedWorkoutLevel(value.id)
    }

    const handleEquipmentChange = (value) => {
        setSelectedEquipment(value.id)
    }

    const handleOpenSheetPress = useCallback(() => {
        isBottomSheetOpened = true
        bottomSheetRef.current?.expand();
    }, []);

    const handleCloseSheetPress = useCallback(() => {
        isBottomSheetOpened = false
        bottomSheetRef.current?.close();
    }, []);

    const handleSheetChange = useCallback((index) => {
        // console.log('handleSheetChanges', index);
    }, []);

    const handleTimeFrameChange = values => setSelectedTimeFrame(values);

    return (
        <View style={{ flex: 1 }}>
            <HomeView
                bottomSheetRef={bottomSheetRef}
                selectedWorkoutTypeArray={selectedWorkoutTypeArray}
                selectedWorkoutLevel={selectedWorkoutLevel}
                selectedEquipment={selectedEquipment}
                selectedTimeFrame={selectedTimeFrame}
                handleOpenSheetPress={handleOpenSheetPress}
                handleCloseSheetPress={handleCloseSheetPress}
                handleSheetChange={handleSheetChange}
                handleWorkoutTypeChange={handleWorkoutTypeChange}
                handleWorkoutLevelChange={handleWorkoutLevelChange}
                handleEquipmentChange={handleEquipmentChange}
                handleTimeFrameChange={handleTimeFrameChange}
            />
        </View>
    )
};

export default Home