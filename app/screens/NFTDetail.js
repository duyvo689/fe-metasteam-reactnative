import React, {useEffect, useState} from 'react';
import {Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'native-base';
import {Icon, Image} from 'react-native-elements';
import MSHandler from 'handlers/MSHandler';
import AssetStore from 'stores/AssetStore';
import FormatUtil from 'utils/FormatUtil';
import {useDimensions} from '@react-native-community/hooks';
import {useMediaQuery} from 'react-responsive';
import {useChain, useMoralis, useMoralisWeb3Api} from 'react-moralis';
import * as Clipboard from 'expo-clipboard';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';
import moment from 'moment';

const NFTDetail = ({route, navigation}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});
    const {width: widthScreen} = useDimensions().window;
    const width = !isMobile ? 400 : widthScreen - 50;
    const height = (4 * width) / 3;

    const {id} = route.params;
    const {assets} = AssetStore;
    const asset = assets.find(i => i.token_id === id);
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [histories, setHistories] = useState([]);
    const {Moralis} = useMoralis();
    const {chain} = useChain();
    const Web3Api = useMoralisWeb3Api();

    useEffect(() => {
        (async () => {
            if (asset) {
                const {result} = await Web3Api.account.getNFTTransfers({chain: 'polygon', address: asset.token_address});
                setHistories(result);
                if (asset.metadata) {
                    const metadata = JSON.parse(asset.metadata);
                    setImage(metadata.image || metadata.image_url);
                    setName(metadata.name);
                    setDescription(metadata.description);
                } else if (asset.token_uri) {
                    fetch(asset.token_uri).then((response) => response.json()).then((json) => {
                        setImage(json.image || json.image_url);
                        setName(json.name);
                        setDescription(json.description);
                    });
                }
            }
        })();
    }, [asset]);

    const onCopy = (str) => () => {
        if (Platform.OS === 'web') {
            navigator.clipboard.writeText(str);
        } else {
            Clipboard.setString(str);
        }
    };

    const onView = () => MSHandler.openUrl(chain ? chain.blockExplorerUrl : '');

    if (!asset) return null;
    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 45}} showsVerticalScrollIndicator={false}>
            <Text style={[appStyles.text, {marginBottom: 25}]}>{`MetaGear > ${name}`}</Text>
            <View style={{flexDirection: !isMobile ? 'row' : 'column', alignItems: 'flex-start'}}>
                <Image style={{width: width, height: height, borderRadius: 10}} source={{uri: image.replace('ipfs://', 'https://ipfs.io/ipfs/')}}/>
                <View style={{flex: 1, marginLeft: !isMobile ? 25 : 0}}>
                    <View style={{padding: 15, marginTop: !isMobile ? 0 : 25, borderRadius: 10, backgroundColor: colors.black}}>
                        <Text style={[appStyles.title, {color: colors.white}]}>{name}</Text>
                        <View style={[appStyles.row, {marginTop: 15}]}>
                            <Icon type={'ionicon'} name={'shield-checkmark-outline'} color={colors.primaryDarkColor} size={15}/>
                            <Text style={[appStyles.subtext, {color: colors.primaryDarkColor, marginLeft: 10}]}>{'Verified'}</Text>
                        </View>
                        <Text style={[appStyles.text, {marginTop: 15}]}>{description}</Text>
                    </View>
                    <View style={{padding: 15, marginTop: 15, borderRadius: 10, backgroundColor: colors.black}}>
                        <TouchableOpacity style={[appStyles.row, appStyles.property]} onPress={onCopy(asset.token_address)}>
                            <Text style={[appStyles.text, {flex: 1, fontFamily: 'Montserrat-Bold'}]}>{'Mint Address'}</Text>
                            <Text style={[appStyles.text, {color: colors.secondaryTextDarkColor}]}>{FormatUtil.formatAddress(asset.token_address)}</Text>
                            <Icon containerStyle={{marginLeft: 15}} type={'ionicon'} name={'copy-outline'} color={colors.secondaryTextDarkColor} size={20}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[appStyles.row, appStyles.property, {marginTop: 15}]} onPress={onCopy(asset.owner_of)}>
                            <Text style={[appStyles.text, {flex: 1, fontFamily: 'Montserrat-Bold'}]}>{'Owner'}</Text>
                            <Text style={[appStyles.text, {color: colors.secondaryTextDarkColor}]}>{FormatUtil.formatAddress(asset.owner_of)}</Text>
                            <Icon containerStyle={{marginLeft: 15}} type={'ionicon'} name={'copy-outline'} color={colors.secondaryTextDarkColor} size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[appStyles.row, {marginTop: 25}]}>
                <Icon type={'material'} name={'history'} color={colors.primaryDarkColor} size={25}/>
                <Text style={[appStyles.title, {marginLeft: 15}]}>{'Transaction history'}</Text>
            </View>
            <View style={{marginTop: 15}}>
                {!isMobile ? <View style={[appStyles.row, {backgroundColor: colors.primaryBetaDarkColor}]}>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{'TYPE'}</Text>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{'SELLER'}</Text>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{'BUYER'}</Text>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{'PRICE'}</Text>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{'TIME'}</Text>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{'DETAILS'}</Text>
                </View>: null}
                {histories.map((i, k) => <View key={k} style={[!isMobile ? appStyles.row : appStyles.column, {backgroundColor: k % 2 === 1 ? colors.primaryBetaDarkColor : colors.primaryAlphaDarkColor}]}>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{i.transaction_type}</Text>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{FormatUtil.formatAddress(i.from_address)}</Text>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{FormatUtil.formatAddress(i.to_address)}</Text>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{`${Moralis.Units.FromWei(i.value)} BNB`}</Text>
                    <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]}>{moment(i.block_timestamp).fromNow()}</Text>
                    <View style={[appStyles.row, appStyles.center, {flex: 1, padding: 10}]}>
                        <Button h={30} onPress={onView}>{'View'}</Button>
                    </View>
                </View>)}
            </View>
        </ScrollView>
    );
};

export default NFTDetail;
