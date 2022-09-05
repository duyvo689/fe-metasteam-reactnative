import React, {useEffect} from 'react';
import {Platform, Text, View} from 'react-native';
import AssetStore from 'stores/AssetStore';
import {useMediaQuery} from 'react-responsive';
import {useMoralis, useMoralisWeb3Api} from 'react-moralis';
import {appStyles} from 'configs/styles';
import dimens from 'configs/dimens';
import {observer} from 'mobx-react';

import NFTItem from 'screens/items/NFTItem';

const NFTsBlock = observer(({style, contentStyle, title, filter, navigation}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});
    const titleFontSize = isMobile ? dimens.mediumText : dimens.xxxLargeText;

    const {user} = useMoralis();
    const Web3Api = useMoralisWeb3Api();

    useEffect(() => {
        (async () => {
            if (user) {
                const {result} = await Web3Api.account.getNFTsForContract(filter);
                AssetStore.setAssets(result);
            }
        })();
    }, [user]);

    const onRedirectNFTDetail = (nft) => () => {
        navigation.navigate('NFTDetail', {id: nft.token_id});
    };

    const {assets} = AssetStore;

    return (
        <>
            {title ? <View style={[appStyles.row, style, {marginBottom: 15}]}>
                <Text style={[appStyles.title, {flex: 1, fontSize: titleFontSize}]}>{title}</Text>
            </View> : null}
            <View style={[appStyles.wrap, contentStyle]}>
                {assets.map((i, k) => <NFTItem key={k} style={{marginLeft: 15, marginTop: 15}} nft={i} onPress={onRedirectNFTDetail(i)}/>)}
            </View>
        </>
    );
});

export default NFTsBlock;
