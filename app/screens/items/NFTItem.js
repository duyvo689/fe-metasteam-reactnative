import React, {useEffect, useState} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {Icon, Image} from 'react-native-elements';
import {useDimensions} from '@react-native-community/hooks';
import {useMediaQuery} from 'react-responsive';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';

const NFTItem = ({style, nft, onPress}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});
    const {width: widthScreen} = useDimensions().window;
    const width = !isDesktop ? isMobile ? (widthScreen - 65) / 2 : (widthScreen - 110) / 5 : (widthScreen - 240 - 155) / 8;
    const height = (4 * width) / 3;

    const [image, setImage] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (nft) {
            if (nft.metadata) {
                const metadata = JSON.parse(nft.metadata);
                setImage(metadata.image || metadata.image_url);
                setName(metadata.name);
            } else if (nft.token_uri) {
                fetch(nft.token_uri).then((response) => response.json()).then((json) => {
                    setImage(json.image || json.image_url);
                    setName(json.name);
                });
            }
        }
    }, [nft]);

    return (
        <TouchableOpacity style={[{width}, {backgroundColor: colors.black, borderRadius: 10, overflow: 'hidden'}, style]} onPress={onPress}>
            <Image style={{width, height}} source={{uri: image.replace('ipfs://', 'https://ipfs.io/ipfs/')}}/>
            <Text style={[appStyles.text, {flex: 1, marginTop: 10, marginHorizontal: 15}]} numberOfLines={2} ellipsizeMode={'tail'}>{name}</Text>
            <View style={[appStyles.row, {margin: 15}, {alignSelf: 'flex-end'}]}>
                <Icon type={'ionicon'} name={'shield-checkmark-outline'} color={colors.primaryDarkColor} size={15}/>
                <Text style={[appStyles.subtext, {color: colors.primaryDarkColor, marginLeft: 10}]}>{'Verified'}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default NFTItem;
