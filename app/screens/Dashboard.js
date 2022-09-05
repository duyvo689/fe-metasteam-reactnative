import React, {useEffect} from 'react';
import {View} from 'react-native';
import AppStore from 'stores/AppStore';

const Dashboard = ({navigation}) => {

    useEffect(() => {
        return navigation.addListener('focus', () => {
            AppStore.setMode('Streamer');
        });
    }, [navigation]);

    useEffect(() => {
        return navigation.addListener('blur', () => {
            AppStore.setMode('User');
        });
    }, [navigation]);

    return (
        <View>
        </View>
    );
};

export default Dashboard;
