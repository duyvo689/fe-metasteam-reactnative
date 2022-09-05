import React from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {Chip, Icon} from 'react-native-elements';
import {useMediaQuery} from 'react-responsive';
import FormatUtil from 'utils/FormatUtil';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';

import TinyTag from "screens/tags/TinyTag";

const InfoItem = ({style, category, onCopy}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});
    return (
        <View style={style}>
            {!isMobile ? <>
                <View style={[appStyles.row, appStyles.wrap, {marginBottom: 16}]}>
                    {category.getTagsList().map((i, k)=> <TinyTag key={k} title={i}/>)}
                </View>
                <Text style={[appStyles.title, {color: colors.white}, {marginTop: 5}]}>{'Description'}</Text>
            </> : null}
            <Text style={[appStyles.text, {marginTop: 15}]} numberOfLines={2} ellipsizeMode={'tail'}>{category.getDescription()}</Text>
            {!isMobile ? <>
                <TouchableOpacity style={[appStyles.row, appStyles.property, {marginTop: 15}]} onPress={onCopy}>
                    <Text style={[appStyles.text, {flex: 1, fontFamily: 'Montserrat-Bold'}]}>{'Mint Address'}</Text>
                    <Text style={[appStyles.text, {color: colors.secondaryTextDarkColor}]}>{FormatUtil.formatAddress(category.getContract())}</Text>
                    <Icon containerStyle={{marginLeft: 15}} type={'ionicon'} name={'copy-outline'} color={colors.secondaryTextDarkColor} size={20}/>
                </TouchableOpacity>
            </> : null}
            {isMobile ? <>
                <TouchableOpacity style={[appStyles.row, appStyles.property, {marginTop: 15}]} onPress={onCopy}>
                    <Text style={[appStyles.text, {flex: 1, fontFamily: 'Montserrat-Bold'}]}>{'Mint Address'}</Text>
                    <Text style={[appStyles.text, {color: colors.secondaryTextDarkColor}]}>{FormatUtil.formatAddress(category.getContract())}</Text>
                    <Icon containerStyle={{marginLeft: 15}} type={'ionicon'} name={'copy-outline'} color={colors.secondaryTextDarkColor} size={20}/>
                </TouchableOpacity>
            </> : null}
        </View>
    );
};

export default InfoItem;
