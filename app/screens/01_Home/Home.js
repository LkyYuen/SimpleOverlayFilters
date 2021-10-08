import React, { memo } from 'react';
import { View } from 'react-native';
import HomeView from './Home.View';

const Home = props => {
    return (
        <View style={{ flex: 1 }}>
            <HomeView />
        </View>
    )
};

export default Home