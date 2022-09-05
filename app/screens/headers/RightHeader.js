import React, {useEffect, useRef, useState} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {Button, Menu, Pressable} from 'native-base';
import {Icon, Image} from 'react-native-elements';
import MSConfig from 'configs/MSConfig';
import MSHandler from 'handlers/MSHandler';
import AppStore from 'stores/AppStore';
import FormatUtil from 'utils/FormatUtil';
import ImageUtil from 'utils/ImageUtil';
import {useHover} from 'react-native-web-hooks';
import {useMediaQuery} from 'react-responsive';
import {useChain, useMoralis, useNativeBalance} from 'react-moralis';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';

import {TokenQuery} from 'pb/token_pb';
import {TokenServiceClient} from 'pb/TokenServiceClientPb';

import UploadModal from 'screens/modals/UploadModal';

const Action = ({style, hoverStyle, disabled, icon, title, color, onPress}) => {
    const buttonRef = useRef();
    const isHovered = useHover(buttonRef);
    return (
        <TouchableOpacity ref={buttonRef} disabled={disabled} style={[appStyles.action, style, isHovered ? hoverStyle : {}]} onPress={onPress}>
            {icon ? <Icon type={icon?.type} name={icon?.name} color={icon?.color} size={icon?.size}/> : null}
            {title ? <Text style={[appStyles.subtext, {color: color, fontFamily: 'Montserrat-Bold'}]}>{title}</Text> : null}
        </TouchableOpacity>
    );
};

const RightHeader = ({navigation}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});

    const [visible, setVisible] = useState(false);
    const {chain} = useChain();
    const {isWeb3EnableLoading, isWeb3Enabled, enableWeb3, isAuthenticated, authenticate, user, account, logout} = useMoralis();
    const {data} = useNativeBalance();

    useEffect(() => {
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    }, [isAuthenticated, isWeb3Enabled]);

    useEffect(() => {
        const q = new TokenQuery();
        const tokenC = new TokenServiceClient(MSConfig.API_URL);
        tokenC.query(q, null).then(s => {
            const chainId = s.getNetwork().getChainid();
            const rpcUrl = s.getNetwork().getRpcurl();
            if (chain && chain.chainId !== chainId) {
                window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: chainId}]
                }).then(async () => {
                    await onConnectWallet();
                }).catch(async (error) => {
                    if (error.code === 4902) {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{chainId: chainId, rpcUrl: rpcUrl}]
                        });
                    } else {
                        await onLogout();
                    }
                });
            }
        });
    }, [chain, user]);

    const onConnectWallet = async () => {
        if (!isAuthenticated) {
            if (window.ethereum) {
                await authenticate({signingMessage: '✔ View your wallet balance & activity\n✔ Request approval for transactions'}).then((user) => {
                    if (!user) {
                        alert(`Please check your wallet!`);
                    }
                }).catch((error) => {
                    console.log('error -> ' + JSON.stringify(error));
                });
            } else {
                alert(`MetaMask is not installed. Please consider installing it: https://metamask.io/download.html`);
            }
        }
    };

    const onCopy = () => {
        MSHandler.copyString(account);
    };

    const onLogout = async () => {
        if (isAuthenticated) {
            await logout();
        }
    };

    const onApplyForLaunchpad = () => {
        MSHandler.openUrl('https://form.typeform.com/to/Him0Vkgm?typeform-source=metastream.network');
    };

    const onUpload = async () => {
        setVisible(true);
    };

    const onRedirectStreamManager = () => {
        navigation.navigate('StreamManager');
        AppStore.setMode('Streamer');
    };

    const onRedirectSetting = () => {
        navigation.navigate('Setting');
        AppStore.setMode('Streamer');
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <View style={[appStyles.row, {marginRight: isMobile ? 12 : 48}]}>
                {isDesktop ? <Action style={{width: 'auto', height: 30, paddingHorizontal: 10, marginRight: 10}} hoverStyle={appStyles.round} title={'APPLY FOR LAUNCHPAD'} color={colors.white} onPress={onApplyForLaunchpad}/> : null}
                {!isMobile ? <>
                    {isAuthenticated ? <>
                        {data ? <Text style={[appStyles.text, {color: colors.primaryDarkColor, fontFamily: 'Montserrat-Bold', marginRight: 10}]}>{data.formatted}</Text> : null}
                        <Menu placement={'left'} trigger={triggerProps => <Button height={30} marginRight={'10pt'} leftIcon={<Image style={{width: 20, height: 20}} source={ImageUtil.getImage('ic_chain_bsc')} resizeMode={'contain'}/>} {...triggerProps}>{FormatUtil.formatAddress(account)}</Button>}>
                            <Menu.Item onPress={onCopy}>
                                <View style={appStyles.row}>
                                    <Icon type={'feather'} name={'copy'} color={colors.primaryDarkColor} size={20}/>
                                    <Text style={[appStyles.text, {marginLeft: 10}]}>{'Copy address'}</Text>
                                </View>
                            </Menu.Item>
                            <Menu.Item onPress={onLogout}>
                                <View style={appStyles.row}>
                                    <Icon type={'ant-design'} name={'disconnect'} color={colors.primaryDarkColor} size={20}/>
                                    <Text style={[appStyles.text, {marginLeft: 10}]}>{'Disconnect'}</Text>
                                </View>
                            </Menu.Item>
                        </Menu>
                    </> : <Button height={30} marginRight={'10pt'} leftIcon={<Icon type={'ionicon'} name={'wallet'} color={colors.black} size={20}/>} onPress={onConnectWallet}>{'Connect wallet'}</Button>}
                </> : null}
                {isMobile || !isDesktop ? <Action hoverStyle={appStyles.circle} icon={{type: 'material-community', name: 'rocket-launch', color: colors.white, size: 20}} onPress={onApplyForLaunchpad}/> : null}
                {/*{isMobile || !isDesktop ? <Action hoverStyle={appStyles.circle} icon={{type: 'ionicon', name: 'search', color: colors.white, size: 20}}/> : null}*/}
                {/*{!isMobile ? <Action hoverStyle={appStyles.circle} icon={{type: 'ionicon', name: 'notifications', color: colors.white, size: 20}}/> : null}*/}
                {isAuthenticated ? <Menu placement={'left'} trigger={triggerProps => <Pressable {...triggerProps}>
                    <Action hoverStyle={appStyles.circle} disabled={true} icon={{type: 'ionicon', name: 'videocam', color: colors.white, size: 20}}/>
                </Pressable>}>
                    <Menu.Item onPress={onUpload}>
                        <View style={appStyles.row}>
                            <Icon type={'material'} name={'ondemand-video'} color={colors.primaryDarkColor} size={20}/>
                            <Text style={[appStyles.text, {marginLeft: 10}]}>{'Upload video'}</Text>
                        </View>
                    </Menu.Item>
                    <Menu.Item onPress={onRedirectStreamManager}>
                        <View style={appStyles.row}>
                            <Icon type={'material'} name={'wifi-tethering'} color={colors.primaryDarkColor} size={20}/>
                            <Text style={[appStyles.text, {marginLeft: 10}]}>{'Broadcast video'}</Text>
                        </View>
                    </Menu.Item>
                </Menu> : null}
                {/*<Action hoverStyle={appStyles.circle} icon={{type: 'entypo', name: 'chat', color: colors.white, size: 20}}/>*/}
                {isAuthenticated && !isMobile ? <Action hoverStyle={appStyles.circle} icon={{type: 'ionicon', name: 'person-circle', color: colors.white, size: 20}} onPress={onRedirectSetting}/> : null}
            </View>
            <UploadModal navigation={navigation} visible={visible} onClose={onClose}/>
        </>
    );
};

export default RightHeader;
