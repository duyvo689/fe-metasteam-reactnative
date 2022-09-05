import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {useMediaQuery} from 'react-responsive';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';

const LeftHeader = ({navigation}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});

    const onOpenOrCloseDrawer = () => {
        navigation.toggleDrawer();
    };

    return !isMobile && !isDesktop && (
        <TouchableOpacity style={[appStyles.action, {marginLeft: 10}]} onPress={onOpenOrCloseDrawer}>
            <Icon type={'ionicon'} name={'menu'} color={colors.white} size={25}/>
        </TouchableOpacity>
    );
};

export default LeftHeader;
