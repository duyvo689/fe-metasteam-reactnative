import React, {useRef} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {Chip, Icon, Image} from 'react-native-elements';
import {useDimensions} from '@react-native-community/hooks';
import {useHover} from 'react-native-web-hooks';
import {useMediaQuery} from 'react-responsive';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';

import TinyTag from "screens/tags/TinyTag";

const CategoryItem = ({style, category, onPress}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});
    const {width: widthScreen} = useDimensions().window;
    const width = isMobile ? (widthScreen - 65) / 2 : isDesktop ? (widthScreen - 240 - 125) / 6 : (widthScreen - 95) / 4;
    const height = width;

    return (
        <TouchableOpacity style={[style, isMobile ? {width} : {}]} onPress={onPress}>
            <Image style={{height, borderRadius: 10}} source={{uri: category.getCoverurl()}} resizeMode={'contain'}/>
            <View style={[appStyles.row, {alignItems: 'flex-start', marginTop: 15}]}>
                <View style={{flex: 1, marginRight: 5}}>
                    <Text style={[appStyles.label, {color: colors.white, fontFamily: 'Montserrat-Bold'}]} numberOfLines={1} ellipsizeMode={'tail'}>{category.getName()}</Text>
                    <Text style={[appStyles.text, {color: colors.secondaryTextDarkColor, marginTop: 5}]} numberOfLines={1} ellipsizeMode={'tail'}>{category.getDescription()}</Text>
                    <View style={[appStyles.row, appStyles.wrap]}>
                        {category.getTagsList().slice(0, 2).map((i, k) => <TinyTag key={k} title={i}/>)}
                    </View>
                </View>
                <Icon type={'ionicon'} name={'ellipsis-vertical'} color={colors.white} size={15}/>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryItem;
