import React from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {Badge} from 'native-base';
import {Avatar, Icon, Image} from 'react-native-elements';
import {useMediaQuery} from 'react-responsive';
import {BlurView} from 'expo-blur';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';

const LiveItem = ({style, live, onPress, containerWidth}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});
    const width = containerWidth ? containerWidth : 300;
    const height = typeof width === "number" ?  (213 * width) / 378 : "auto";

    return (
        <TouchableOpacity style={[{width, height}, style]} onPress={onPress}>
            <Image containerStyle={{position: 'absolute', top: 0, left: 0}} style={{width, height, borderRadius: 10}} source={{uri: live.getScreenshoturl()}}/>
            <BlurView intensity={30} tint={'dark'} style={[appStyles.row, {alignItems: 'flex-start'}, {width: typeof width === "number" ? width - 20 : "90%", paddingVertical: 10, paddingLeft: 15, paddingRight: 10}, {overflow: 'hidden', borderRadius: 10}, {position: 'absolute', bottom: 10, left: 10}]}>
                <Avatar rounded size={'small'} source={{uri: live.getStreamer().getAvatarurl()}}/>
                <View style={{flex: 1, marginLeft: 15, marginRight: 5}}>
                    <Text style={[appStyles.text, {color: colors.white, fontFamily: 'Montserrat-Bold'}]} numberOfLines={1} ellipsizeMode={'tail'}>{live.getName()}</Text>
                    <Text style={[appStyles.subtext, {color: colors.white, fontFamily: 'Montserrat-Medium', marginTop: 4}]} numberOfLines={1} ellipsizeMode={'tail'}>{`${live.getStreamer().getFirstname()} ${live.getStreamer().getLastname()}`}</Text>
                    <Text style={[appStyles.subtext, {color: colors.white, fontFamily: 'Montserrat-Medium', marginTop: 4}]} numberOfLines={1} ellipsizeMode={'tail'}>{`${live.getCategory().getName()}`}</Text>
                </View>
                <Icon type={'ionicon'} name={'ellipsis-vertical'} color={colors.white} size={15}/>
            </BlurView>
            {live.getLive() ? <Badge bg={colors.red} _text={{color: colors.white, fontFamily: 'Montserrat-Medium'}} position={'absolute'} top={15} left={15}>{'LIVE'}</Badge> : null}
        </TouchableOpacity>
    );
};

export default LiveItem;
