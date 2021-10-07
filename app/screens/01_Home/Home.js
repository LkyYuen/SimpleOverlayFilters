import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import {
    PrimaryBackgroundCustom,
    headerTheme
} from '../../lib/moduleExporter'
import { HomeView } from './Home.View';

const Home = props => {
    return (
        <PrimaryBackgroundCustom type={"login"}>
            <StatusBar barStyle={headerTheme.headerBackgroundColor[0] === "white" ? "default" : "light-content"} />
            <LoginController />
        </PrimaryBackgroundCustom>
    )
};

export default Home