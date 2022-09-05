import React from 'react';
import {Platform} from 'react-native';
import {Icon} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {useMediaQuery} from 'react-responsive';
import colors from 'configs/colors';
import dimens from 'configs/dimens';

import ContentDrawer from 'screens/drawers/ContentDrawer';
import LeftHeader from 'screens/headers/LeftHeader';
import TitleHeader from 'screens/headers/TitleHeader';
import RightHeader from 'screens/headers/RightHeader';

import Home from 'screens/Home';
import Game from 'screens/Game';
import Trending from 'screens/Trending';
import Notification from 'screens/Notification';
import Profile from 'screens/Profile';
import Dashboard from 'screens/Dashboard';
import ManageContent from 'screens/ManageContent';
import StreamManager from 'screens/StreamManager';
import ManageAsset from 'screens/ManageAsset';
import Setting from 'screens/Setting';
import StreamDetail from 'screens/StreamDetail';
import CategoryDetail from 'screens/CategoryDetail';
import NFTDetail from 'screens/NFTDetail';
import VideoDetail from 'screens/VideoDetail';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Explore = () => {
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name={'Home'} component={Home} options={{headerShown: false}}/>
            <Stack.Screen name={'StreamDetail'} component={StreamDetail} options={{headerShown: false}}/>
            <Stack.Screen name={'CategoryDetail'} component={CategoryDetail} options={{headerShown: false}}/>
            <Stack.Screen name={'NFTDetail'} component={NFTDetail} options={{headerShown: false}}/>
            <Stack.Screen name={'Profile'} component={Profile} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};
const Principle = () => {
    return (
        <Stack.Navigator initialRouteName={'Game'}>
            <Stack.Screen name={'Game'} component={Game} options={{headerShown: false}}/>
            <Stack.Screen name={'CategoryDetail'} component={CategoryDetail} options={{headerShown: false}}/>
            <Stack.Screen name={'StreamDetail'} component={StreamDetail} options={{headerShown: false}}/>
            <Stack.Screen name={'NFTDetail'} component={NFTDetail} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};
export const RootTabOrDrawer = () => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});
    if (isMobile) {
        return (
            <Tab.Navigator screenOptions={({navigation, route}) => ({
                headerLeft: () => <LeftHeader navigation={navigation}/>,
                headerTitle: () => <TitleHeader navigation={navigation}/>,
                headerRight: () => <RightHeader navigation={navigation}/>,
                tabBarIcon: ({color}) => {
                    const {name} = route;
                    switch (name) {
                        case 'Explore':
                            return <Icon type={'material'} name={'home'} color={color} size={25}/>;
                        case 'Trending':
                            return <Icon type={'material'} name={'local-fire-department'} color={color} size={25}/>;
                        case 'Principle':
                            return <Icon type={'entypo'} name={'grid'} color={color} size={30}/>;
                        case 'Notification':
                            return <Icon type={'ionicon'} name={'notifications'} color={color} size={25}/>;
                        case 'Profile':
                            return <Icon type={'ionicon'} name={'person-circle'} color={color} size={25}/>;
                        default:
                            return null;
                    }
                },
                lazy: true,
                headerTitleAlign: 'left',
                headerTintColor: colors.white,
                headerStyle: {
                    borderBottomColor: 'transparent',
                    shadowColor: 'transparent'
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopWidth: 0
                }
            })} initialRouteName={'Explore'}>
                <Tab.Screen name={'Explore'} component={Explore} options={{title: 'Home'}}/>
                <Tab.Screen name={'Trending'} component={Trending} options={{title: 'Trending'}}/>
                <Tab.Screen name={'Principle'} component={Principle} options={{title: 'Game'}}/>
                <Tab.Screen name={'Notification'} component={Notification} options={{title: 'Notification'}}/>
                <Tab.Screen name={'Profile'} component={Profile} options={{title: 'Profile'}}/>
            </Tab.Navigator>
        );
    } else {
        return (
            <Drawer.Navigator drawerContent={(props) => {console.log(props); return <ContentDrawer {...props}/>}} screenOptions={({navigation, route}) => ({
                headerLeft: () => <LeftHeader navigation={navigation}/>,
                headerTitle: () => <TitleHeader navigation={navigation}/>,
                headerRight: () => <RightHeader navigation={navigation}/>,
                drawerIcon: ({color}) => {
                    const {name} = route;
                    switch (name) {
                        case 'Explore':
                            return <Icon type={'material'} name={'home'} color={color} size={20}/>;
                        case 'Trending':
                            return <Icon type={'material'} name={'local-fire-department'} color={color} size={20}/>;
                        case 'Principle':
                            return <Icon type={'entypo'} name={'grid'} color={color} size={20}/>;
                        case 'Setting':
                            return <Icon type={'ionicon'} name={'settings'} color={color} size={20}/>;
                        default:
                            return null;
                    }
                },
                lazy: true,
                headerTitleAlign: 'left',
                headerTintColor: colors.white,
                headerStyle: {
                    borderBottomWidth: 0
                },
                drawerType: isDesktop ? 'permanent' : 'front',
                drawerStyle: {
                    width: 300,
                    borderRightWidth: 0
                },
                drawerActiveTintColor: colors.white,
                drawerActiveBackgroundColor: colors.primaryBetaDarkColor,
                drawerItemStyle: {
                    padding: 0,
                    borderRadius: 10
                },
                drawerLabelStyle: {
                    fontSize: dimens.mediumText,
                    fontFamily: 'Montserrat-Bold'
                }
            })} initialRouteName={'Explore'}>
                <Drawer.Screen name={'Explore'} component={Explore} listeners={({navigation, route}) => ({
                    drawerItemPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('Explore', {screen: 'Home'});
                    }
                })} options={{title: 'Home'}}/>
                <Drawer.Screen name={'Principle'} component={Principle} listeners={({navigation, route}) => ({
                    drawerItemPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('Principle', {screen: 'Game'});
                    }
                })} options={{title: 'Game'}}/>
                
                {/* TODO: Uncomment when Dashboard is ready
                <Drawer.Screen name={'Dashboard'} component={Dashboard} options={{title: 'Dashboard'}}/> */}
                <Drawer.Screen name={'ManageContent'} component={ManageContent} options={{title: 'Manage Content'}}/>
                <Drawer.Screen name={'StreamManager'} component={StreamManager} options={{title: 'Stream Manager'}}/>
                <Drawer.Screen name={'ManageAsset'} component={ManageAsset} options={{title: 'Manage Asset'}}/>
                <Drawer.Screen name={'Setting'} component={Setting} options={{title: 'Setting'}}/>
                <Drawer.Screen name={'VideoDetail'} component={VideoDetail} options={{title: 'Video'}}/>
            </Drawer.Navigator>
        );
    }
};


