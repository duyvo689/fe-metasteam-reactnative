import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {Avatar, Image} from 'react-native-elements';
import AppStore from 'stores/AppStore';
import ImageUtil from 'utils/ImageUtil';
import {useMediaQuery} from 'react-responsive';

const TitleHeader = ({navigation}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});

    const onRedirectHome = () => {
        navigation.navigate('Explore', {screen: 'Home'});
        AppStore.setMode('User');
    };

    if (isMobile) {
        return <Avatar rounded={true} size={'small'} source={{uri: 'https://i.pravatar.cc/100'}}/>;
    } else if (isDesktop) {
        return null;
    } else {
        return (
            <TouchableOpacity onPress={onRedirectHome}>
                <Image style={{width: 120, height: 30}} source={ImageUtil.getImage('ic_logo')} resizeMode={'contain'}/>
            </TouchableOpacity>
        );
    }
};

export default TitleHeader;
