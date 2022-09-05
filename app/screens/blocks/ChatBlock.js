import React, {useEffect, useState} from 'react';
import {FlatList, Platform, Text, TouchableOpacity, View} from 'react-native';
import {Button, Input} from 'native-base';
import {Avatar, Icon, Image} from 'react-native-elements';
import MSConfig from 'configs/MSConfig';
import ImageUtil from 'utils/ImageUtil';
import {useMediaQuery} from 'react-responsive';
import {useMoralis} from 'react-moralis';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';
import {observer} from 'mobx-react';

import {ChatFilter, ChatMessage, ChatMessageType} from 'pb/chat_pb';
import {ChatServiceClient} from 'pb/ChatServiceClientPb';

const ChatBlock = observer(({style, contentStyle, title, filter, onOpenChat}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});

    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');
    const {user} = useMoralis();

    useEffect(() => {
        (async () => {
            const q = new ChatFilter();
            q.setStreamid(filter.streamId);
            const chatC = new ChatServiceClient(MSConfig.API_URL);
            chatC.observeMessages(q, null).on('data', item => {
                setData(data => [...data, item]);
            });
        })();
    }, []);

    const renderItem = ({item, index}) => {
        if (item.getType() === ChatMessageType.CHAT_FOLLOW) return null;
        const sender = item.getSender();
        const title = sender && (sender.getFirstname() || sender.getLastname()) ? `${sender.getFirstname()} ${sender.getLastname()}` : '';
        const donation = item.getDonation();
        const amount = donation ? donation.getAmount() : 0;
        return (
            <View key={index} style={{flexDirection: 'row', marginBottom: 15}}>
                <Avatar icon={{type: 'ionicon', name: 'person'}} rounded size={40} source={{uri: sender.getAvatarurl()}} />
                <View style={{marginHorizontal: 15, borderRadius: 15, backgroundColor: colors.chipDarkColor}}>
                    {title ? <Text style={[appStyles.text, {color: colors.primaryDarkColor, fontFamily: 'Montserrat-Bold'}, {marginTop: 5, marginHorizontal: 15, marginBottom: 0}]}>{title}</Text> : null}
                    <Text style={[appStyles.text, {maxWidth: 200, marginTop: 5, marginHorizontal: 15, marginBottom: 5}]}>{item.getText()}</Text>
                    {amount > 0 ? <View style={[appStyles.row, {paddingVertical: 5, paddingHorizontal: 15, backgroundColor: colors.contentBackgroundDarkColor}]}>
                        <Text style={{color: colors.white, fontSize: 12, fontFamily: 'Montserrat-Regular'}}>{'Just donated '}</Text>
                        <Text style={{color: '#E4FF76', fontSize: 12, fontFamily: 'Montserrat-Bold'}}>{`${amount} $MSX `}</Text>
                        <Image style={{width: 15, height: 15}} source={ImageUtil.getImage('ic_gem')} resizeMode={'contain'}/>
                    </View> : null}
                </View>
            </View>
        );
    };

    const keyExtractor = (item) => {
        return item.getTimestamp();
    };

    const onSend = () => {
        if (!!message.trim()) {
            const q = new ChatMessage();
            q.setStreamid(filter.streamId);
            q.setType(ChatMessageType.CHAT_TEXT);
            q.setText(message.trim());
            const chatC = new ChatServiceClient(MSConfig.API_URL);
            chatC.sendMessages(q, {'authorization': `bearer ${user.get('sessionToken')}`}).then(s => {

            }).finally(() => setMessage(''));
        }
    };

    useEffect(() => {
        console.log({data})
    }, [data]);

    return (
        <View style={[{flex: 1, backgroundColor: colors.black}, style]}>
            {isDesktop ? <View style={appStyles.row}>
                <TouchableOpacity style={appStyles.action} onPress={onOpenChat}>
                    <Icon type={'ionicon'} name={'chevron-forward-outline'} color={colors.white} size={25}/>
                </TouchableOpacity>
                <Text style={[appStyles.title, {flex: 1, textAlign: 'center'}]}>{title}</Text>
                <View style={{width: 40, height: 40}}/>
            </View> : null}
            <FlatList style={{flex: 1}} contentContainerStyle={{padding: 15}} data={data} renderItem={renderItem} keyExtractor={keyExtractor}/>
            <View style={{paddingVertical: 30, paddingHorizontal: 15, backgroundColor: colors.chipDarkColor, borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                <Input bg={colors.black} _pressed={{bg: colors.black}} _focus={{bg: colors.black}} size={'lg'} rounded={10} borderWidth={1} borderColor={colors.primaryDarkColor} placeholder={'Send a message'} value={message} onChangeText={text => setMessage(text)} onSubmitEditing={onSend}/>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Text style={{flex: 1}}>{''}</Text>
                    <Button h={30} onPress={onSend}>{'Chat'}</Button>
                </View>
            </View>
        </View>
    );
});

export default ChatBlock;
