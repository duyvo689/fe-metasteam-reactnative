import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button, HStack, Input, Modal} from 'native-base';
import {Avatar, Image} from 'react-native-elements';
import MSConfig from 'configs/MSConfig';
import ImageUtil from 'utils/ImageUtil';
import {useMoralis} from 'react-moralis';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';

import {ProfileId} from 'pb/profile_pb';
import {ProfileServiceClient} from 'pb/ProfileServiceClientPb';

const DonateModal = ({visible, profile, onClose, onSend}) => {
    const buttonProps = {flex: 1, borderColor: colors.primaryDarkColor, bg: colors.black, _hover: {bg: colors.primaryAlphaDarkColor}, _pressed: {bg: colors.black}, _focus: {bg: colors.black}, _text: {color: '#E4FF76', fontFamily: 'Montserrat-Bold'}, leftIcon: <Image style={appStyles.icon} source={ImageUtil.getImage('ic_gem')} resizeMode={'contain'}/>};
    const [avatarUrl, setAvatarUrl] = useState('');
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState('');
    const {user} = useMoralis();
    useEffect(() => {
        if (user) {
            const q = new ProfileId();
            q.setValue(user.id);
            const profileC = new ProfileServiceClient(MSConfig.API_URL);
            profileC.read(q, null).then(s => {
                setAvatarUrl(s.getAvatarurl());
            });
        }
    }, [user]);
    return (
        <Modal isOpen={visible} onClose={onClose} size={'lg'} _backdrop={{_dark: {bg: 'rgba(196, 196, 196, 0.71)'}, bg: 'rgba(196, 196, 196, 0.71)'}}>
            <Modal.Content bg={colors.black} rounded={15}>
                <Modal.CloseButton/>
                <Modal.Header _text={{color: colors.primaryDarkColor}}>{'Donate'}</Modal.Header>
                <Modal.Body padding={15}>
                    <View style={appStyles.row}>
                        <Image style={{width: 60, height: 60}} source={ImageUtil.getImage('ic_dolar')} resizeMode={'contain'}/>
                        <View style={{flex: 1, marginHorizontal: 15}}>
                            <Text style={appStyles.text}>{'Send $MSX to support'}</Text>
                            <Text style={[appStyles.title, {marginTop: 10}]}>{`${profile.getFirstname()} ${profile.getLastname()}`}</Text>
                        </View>
                        <Button _text={{fontFamily: 'Montserrat-Bold'}} endIcon={<Image style={appStyles.icon} source={ImageUtil.getImage('ic_gem')} resizeMode={'contain'}/>}>{'Buy'}</Button>
                    </View>
                    <Text style={[appStyles.text, {marginTop: 15}]}>{'Your comment and attached Stars will be displayed to the creator and others who watch the video'}</Text>
                    <View style={[appStyles.row, {borderRadius: 10, borderWidth: 1, borderColor: colors.white, padding: 10, marginTop: 15}]}>
                        <Image style={{width: 60, height: 60}} source={ImageUtil.getImage('ic_star')} resizeMode={'contain'}/>
                        <View style={{flex: 1, marginHorizontal: 15}}>
                            <Text style={[appStyles.label, {color: '#FFF4AB', fontFamily: 'Montserrat-Bold'}]}>{'Celebrate Ramadan with Stars'}</Text>
                            <Text style={[appStyles.text, {marginTop: 10}]}>{`Send $MSX or a special NFT gift to show support for ${profile.getFirstname()} ${profile.getLastname()}. Now until 3 May 2022.`}</Text>
                        </View>
                    </View>
                    <HStack space={3} mt={15}>
                        {[0.5, 1, 5].map((i, k) => <Button key={k} {...buttonProps} borderWidth={amount === i ? 3 : 1} onPress={() => setAmount(i)}>{i}</Button>)}
                    </HStack>
                    <HStack space={3} mt={15}>
                        {[10, 50, -1].map((i, k) => <Button key={k} {...buttonProps} borderWidth={amount === i ? 3 : 1} onPress={() => setAmount(i)}>{i === -1 ? '...' : i}</Button>)}
                    </HStack>
                    <View style={[appStyles.row, {marginTop: 15}]}>
                        <Avatar containerStyle={{marginRight: 15}} rounded size={60} source={{uri: avatarUrl}}/>
                        <Input size={'md'} bg={'#FFFFFF'} _hover={{bg: '#FFFFFF'}} _pressed={{bg: '#FFFFFF'}} _focus={{bg: '#FFFFFF'}} w={'100%'} h={20} rounded={10} color={colors.black} placeholder={'Add a comment'} value={message} onChangeText={text => setMessage(text)}/>
                    </View>
                    <Button mt={5} rounded={10} _text={{fontFamily: 'Montserrat-Bold'}} onPress={onSend(amount, message)}>{'Send'}</Button>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
};

export default DonateModal;
