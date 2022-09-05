import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Divider, Icon, Image} from 'react-native-elements';
import TrendCategoryStore from 'stores/TrendCategoryStore';
import AppStore from 'stores/AppStore';
import ImageUtil from 'utils/ImageUtil';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';
import {observer} from 'mobx-react';

const ContentDrawer = observer((props) => {

    const onRedirect = (index) => () => {
        if (index === 0) onRedirectHome();
        else if (index === 1) onRedirectGame();
        // else if (index === 2) onRedirectDashboard(); // // TODO: Uncomment when Dashboard is ready
        else if (index === 2) onRedirectManageContent();
        else if (index === 3) onRedirectStreamManager();
        else if (index === 4) onRedirectManageAsset();
        else if (index === 5) onRedirectSetting();
        // else if (index === 6) onRedirectVideoDetail();
    };

    const onRedirectVideoDetail = () => {
        const {navigation} = props;
        navigation.navigate('VideoDetail');
    };

    const onRedirectHome = () => {
        const {navigation} = props;
        navigation.navigate('Explore', {screen: 'Home'});
        AppStore.setMode('User');
    };

    const onRedirectGame = () => {
        const {navigation} = props;
        navigation.navigate('Principle', {screen: 'Game'});
    };

    const onRedirectDashboard = () => {
        const {navigation} = props;
        navigation.navigate('Dashboard');
    };

    const onRedirectManageContent = () => {
        const {navigation} = props;
        navigation.navigate('ManageContent');
    };

    const onRedirectStreamManager = () => {
        const {navigation} = props;
        navigation.navigate('StreamManager');
    };

    const onRedirectManageAsset = () => {
        const {navigation} = props;
        navigation.navigate('ManageAsset');
    };

    const onRedirectSetting = () => {
        const {navigation} = props;
        navigation.navigate('Setting');
    };

    const onRedirectCategoryDetail = (category) => () => {
        const {navigation} = props;
        navigation.navigate('CategoryDetail', {id: category.getId()});
    };

    const pages = [
        {mode: 'User', type: 'entypo', name: 'home', color: colors.white, size: 20, title: 'Home'},
        {mode: 'User', type: 'entypo', name: 'grid', color: colors.white, size: 20, title: 'Game'},
        // {mode: 'Streamer', type: 'material', name: 'dashboard', color: colors.white, size: 20, title: 'Dashboard'}, // TODO: Uncomment when Dashboard is ready
        {mode: 'Streamer', type: 'material', name: 'edit', color: colors.white, size: 20, title: 'Manage Content'},
        {mode: 'Streamer', type: 'material', name: 'wifi-tethering', color: colors.white, size: 20, title: 'Stream Manager'},
        {mode: 'Streamer', type: 'material', name: 'attach-money', color: colors.white, size: 20, title: 'Manage Asset'},
        {mode: 'Streamer', type: 'material', name: 'settings', color: colors.white, size: 20, title: 'Setting'},
        // {mode: 'Streamer', type: 'material', name: 'video-settings', color: colors.white, size: 20, title: 'Video'},
    ];
    const {trendCategories} = TrendCategoryStore;
    const {mode} = AppStore;

    const renderItem = (item, index) => {
        return (
            <TouchableOpacity key={index} style={[appStyles.row, appStyles.pack]} onPress={onRedirectCategoryDetail(item)}>
                <Avatar rounded size={'small'} source={{uri: item.getAvatarurl()}}/>
                <View style={{flex: 1, marginLeft: 24, marginRight: 5}}>
                    <Text style={appStyles.text} numberOfLines={1} ellipsizeMode={'tail'}>{item.getName()}</Text>
                    <Text style={[appStyles.text, {fontFamily: 'Montserrat-Bold'}]} numberOfLines={1} ellipsizeMode={'tail'}>{item.getName()}</Text>
                </View>
                <View style={{padding: 5, borderRadius: 10, borderWidth: 1, borderColor: colors.primaryTextDarkColor}}>
                    <Text style={appStyles.text} numberOfLines={1} ellipsizeMode={'tail'}>{`#${index + 1}`}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <DrawerContentScrollView {...props}>
            <View style={[appStyles.row, {width: '100%', height: 64, marginLeft: 36}]}>
                <Image style={{width: 120, height: 30}} source={ImageUtil.getImage('ic_logo')} resizeMode={'contain'} onPress={onRedirectHome}/>
            </View>
            {props.state.routes.map((i, k) => {
                if (!pages[k]) return null;
                const selected = props.state.index === k;
                return pages[k].mode === mode && <TouchableOpacity key={k} style={[appStyles.row, appStyles.pack, {height: 40, marginTop: 12, marginHorizontal: 16, backgroundColor: selected ? 'rgba(0, 255, 142, 0.5)' : 'transparent', borderRadius: 10}]} onPress={onRedirect(k)}>
                    <Icon type={pages[k].type} name={pages[k].name} color={pages[k].color} size={pages[k].size}/>
                    <Text style={{fontSize: 16, color: colors.white, fontFamily: 'Montserrat-Bold', marginLeft: 24}}>{pages[k].title}</Text>
                </TouchableOpacity>;
            })}
            {mode === 'User' ? <>
                <Divider style={{width: 158, marginHorizontal: 'auto', marginVertical: 16}} orientation={'horizontal'}/>
                <View style={[appStyles.row, appStyles.pack, {marginHorizontal: 16}]}>
                    <Icon type={'material'} name={'local-fire-department'} color={colors.primaryDarkColor} size={20}/>
                    <Text style={[appStyles.text, {color: colors.primaryDarkColor, fontFamily: 'Montserrat-Bold', marginLeft: 24}]}>{'Trending Games'}</Text>
                </View>
                {trendCategories.slice(0, 7).map(renderItem)}
                <TouchableOpacity style={[appStyles.row, appStyles.pack, {marginHorizontal: 16}]} onPress={onRedirectGame}>
                    <Text style={[appStyles.text, {color: colors.primaryDarkColor, fontWeight: 600}]} numberOfLines={1} ellipsizeMode={'tail'}>{'View more'}</Text>
                    <Icon containerStyle={{marginLeft: 5}} type={'feather'} name={'chevrons-right'} color={colors.primaryDarkColor} size={20}/>
                </TouchableOpacity>
            </> : null}
        </DrawerContentScrollView>
    );
});

export default ContentDrawer;
