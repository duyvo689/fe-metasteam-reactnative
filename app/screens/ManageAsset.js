import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Icon, Image} from 'react-native-elements';
import MSConfig from 'configs/MSConfig';
import AppStore from 'stores/AppStore';
import FormatUtil from 'utils/FormatUtil';
import ImageUtil from 'utils/ImageUtil';
import {useChain, useMoralis, useMoralisWeb3Api} from 'react-moralis';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';
import dimens from 'configs/dimens';
import moment from 'moment';

import {TokenQuery} from 'pb/token_pb';
import {TokenServiceClient} from 'pb/TokenServiceClientPb';

const ManageAsset = ({navigation}) => {

    const [balances, setBalances] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const {chain} = useChain();
    const {Moralis, user, account} = useMoralis();
    const Web3Api = useMoralisWeb3Api();

    useEffect(() => {
        return navigation.addListener('focus', () => {
            AppStore.setMode('Streamer');
        });
    }, [navigation]);

    useEffect(() => {
        return navigation.addListener('blur', () => {
            AppStore.setMode('User');
        });
    }, [navigation]);

    useEffect(() => {
        if (chain && user) {
            const q = new TokenQuery();
            const tokenC = new TokenServiceClient(MSConfig.API_URL);
            tokenC.query(q, null).then(s => {
                const chainId = s.getNetwork().getChainid();
                Web3Api.account.getNativeBalance({chain: chainId}).then(({balance}) => {
                    Web3Api.account.getTokenBalances({chain: chainId}).then(balances => {
                        setBalances([{
                            ...chain.nativeCurrency,
                            balance
                        }, ...balances]);
                    });
                });
                Web3Api.account.getTransactions({chain: chainId}).then(({result}) => {
                    setTransactions(result);
                });
            });
        }
    }, [chain, user]);

    const onAdd = (info) => () => {
        if (window.ethereum) {
            window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: info.token_address,
                        symbol: info.symbol,
                        decimals: info.decimals,
                        image: info.logo
                    }
                }
            });
        } else {
            alert(`MetaMask is not installed. Please consider installing it: https://metamask.io/download.html`);
        }
    };

    if (!user) return null;
    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 45}} showsVerticalScrollIndicator={false}>
            <View style={[appStyles.row, {margin: 25}]}>
                <Icon type={'material'} name={'attach-money'} color={colors.primaryDarkColor} size={25}/>
                <Text style={[appStyles.title, {marginLeft: 15}]}>{'Manage asset'}</Text>
            </View>
            <View style={{backgroundColor: colors.contentBackgroundDarkColor, marginHorizontal: 25}}>
                <View style={[appStyles.row, {height: 40}, {borderBottomWidth: 1, borderColor: colors.white}]}>
                    <View style={[appStyles.center, {height: 40, paddingHorizontal: 15, borderBottomWidth: 3, borderColor: colors.primaryDarkColor}]}>
                        <Text style={[appStyles.text, {color: colors.primaryDarkColor}]}>{'ASSETS'}</Text>
                    </View>
                </View>
                <View style={{padding: 25}}>
                    <Text style={[appStyles.label, {color: colors.white, fontFamily: 'Montserrat-Bold'}]}>{'Assets'}</Text>
                    <Text style={[appStyles.text, {marginTop: 25}]}>{`Wallet address: ${account}`}</Text>
                    <View style={[appStyles.row, appStyles.wrap]}>
                        {balances.map((i, k) => <View key={k}>
                            <View style={[appStyles.row, {backgroundColor: 'rgba(0, 255, 142, 0.18)', borderRadius: 30, padding: 15}, {marginTop: 15, marginRight: 15}]}>
                                {i.symbol === 'BNB' || i.symbol === 'tBNB' ? <Image style={{width: 40, height: 40}} source={ImageUtil.getImage('ic_token_bnb')} resizeMode={'contain'}/> : null}
                                {i.symbol === 'MSX' ? <Image style={{width: 40, height: 40}} source={ImageUtil.getImage('ic_token_msx')} resizeMode={'contain'}/> : null}
                                {i.symbol === 'USDT' ? <Image style={{width: 40, height: 40}} source={ImageUtil.getImage('ic_token_usdt')} resizeMode={'contain'}/> : null}
                                <View style={{flex: 1, marginHorizontal: 15}}>
                                    <Text style={[appStyles.text, {color: colors.primaryDarkColor, fontSize: dimens.largeText, fontFamily: 'Montserrat-Bold'}]}>{i.name}</Text>
                                    <Text style={[appStyles.text, {fontSize: dimens.largeText, fontFamily: 'Montserrat-Medium', marginTop: 5}]}>{`${Moralis.Units.FromWei(i.balance)} ${i.symbol}`}</Text>
                                </View>
                            </View>
                            <Text style={[appStyles.text, {marginTop: 15}]} onPress={i.token_address ? onAdd(i) : null}>{i.token_address ? 'Add token to wallet' : ' '}</Text>
                        </View>)}
                    </View>
                    <Text style={[appStyles.label, {color: colors.white, fontFamily: 'Montserrat-Bold', marginTop: 25}]}>{'Activities'}</Text>
                    <View style={[appStyles.row, {backgroundColor: colors.primaryBetaDarkColor, marginTop: 25}]}>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{'TXN HASH'}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{'METHOD'}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{'BLOCK'}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{'AGE'}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{'FROM'}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{'TO'}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{'VALUE'}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{'TXN FEE'}</Text>
                    </View>
                    {transactions.map((i, k) => <View key={k} style={[appStyles.row, {backgroundColor: k % 2 === 1 ? colors.primaryBetaDarkColor : colors.primaryAlphaDarkColor}]}>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{FormatUtil.formatAddress(i.hash)}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{''}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{i.block_number}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{moment(i.block_timestamp).fromNow()}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{FormatUtil.formatAddress(i.from_address)}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{FormatUtil.formatAddress(i.to_address)}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{`${Moralis.Units.FromWei(i.value)} ${chain ? chain.nativeCurrency.symbol : null}`}</Text>
                        <Text style={[appStyles.text, {flex: 1, textAlign: 'center', padding: 10}]} numberOfLines={1} ellipsizeMode={'tail'}>{Moralis.Units.FromWei(Number(i.gas) * Number(i.gas_price))}</Text>
                    </View>)}
                </View>
            </View>
        </ScrollView>
    );
};

export default ManageAsset;
