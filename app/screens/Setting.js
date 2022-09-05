import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, Input} from 'native-base';
import {Avatar, Icon} from 'react-native-elements';
import MSConfig from 'configs/MSConfig';
import AppStore from 'stores/AppStore';
import {useMoralis} from 'react-moralis';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';

import {Profile, ProfileId} from 'pb/profile_pb';
import {ProfileServiceClient} from 'pb/ProfileServiceClientPb';

const Setting = ({navigation}) => {

    const [avatarUrl, setAvatarUrl] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const {user, account} = useMoralis();

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
        if (user) {
            const q = new ProfileId();
            q.setValue(user.id);
            const profileC = new ProfileServiceClient(MSConfig.API_URL);
            profileC.read(q, null).then(s => {
                setAvatarUrl(s.getAvatarurl());
                setFirstName(s.getFirstname());
                setLastName(s.getLastname());
                setEmail(s.getEmail());
                setUsername(s.getUsername());
                setDescription(s.getDescription());
            });
        }
    }, [user]);

    const onChangeAvatar = (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        formData.append('id', user.id);
        formData.append('type', 'avatar');
        fetch(`${MSConfig.API_URL}/upload/profile`, {
            method: 'PUT',
            headers: {
                'authorization': `bearer ${user.get('sessionToken')}`
            },
            body: formData
        }).then((response) => response.json()).then(({url}) => {
            setAvatarUrl(`${url}?${Date.now()}`);
        });
    };

    const onUpdate = () => {
        const q = new Profile();
        q.setId(user.id);
        q.setFirstname(firstName);
        q.setLastname(lastName);
        q.setEmail(email);
        q.setUsername(username);
        q.setDescription(description);
        const profileC = new ProfileServiceClient(MSConfig.API_URL);
        profileC.update(q, {'authorization': `bearer ${user.get('sessionToken')}`}).then(s => {
            alert(`Update successful!`);
        });
    };

    if (!user) return null;
    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 45}} showsVerticalScrollIndicator={false}>
            <View style={[appStyles.row, {margin: 25}]}>
                <Icon type={'material'} name={'person'} color={colors.primaryDarkColor} size={25}/>
                <Text style={[appStyles.title, {marginLeft: 15}]}>{'Profile setting'}</Text>
            </View>
            <View style={{backgroundColor: colors.contentBackgroundDarkColor, padding: 25, marginHorizontal: 25}}>
                <View style={appStyles.row}>
                    <Avatar containerStyle={{marginRight: 15}} icon={{type: 'ionicon', name: 'person'}} rounded size={120} source={{uri: avatarUrl}}/>
                    <input type={'file'} accept={'image/*'} onChange={onChangeAvatar}/>
                </View>
                <View style={[appStyles.row, {marginTop: 25}]}>
                    <Text style={[appStyles.text, {flex: 1, opacity: 0.5}]}>{'First name'}</Text>
                    <Text style={[appStyles.text, {flex: 1, opacity: 0.5}]}>{'Last name'}</Text>
                </View>
                <View style={appStyles.row}>
                    <Input flex={1} mt={2} px={15} size={'xl'} value={firstName} onChangeText={text => setFirstName(text)}/>
                    <Input flex={1} mt={2} px={15} size={'xl'} value={lastName} onChangeText={text => setLastName(text)}/>
                </View>
                <Text style={[appStyles.text, {opacity: 0.5, marginTop: 15}]}>{'Username'}</Text>
                <Input mt={2} px={15} size={'xl'} value={username} onChangeText={text => setUsername(text)}/>
                <Text style={[appStyles.text, {opacity: 0.5, marginTop: 15}]}>{'Email'}</Text>
                <Input mt={2} px={15} size={'xl'} value={email} onChangeText={text => setEmail(text)}/>
                <Text style={[appStyles.text, {opacity: 0.5, marginTop: 15}]}>{'Description'}</Text>
                <Input h={135} mt={2} px={15} size={'xl'} placeholder={'Tell viewers about your channel...'} value={description} onChangeText={text => setDescription(text)}/>
                <Text style={[appStyles.text, {opacity: 0.5, marginTop: 15}]}>{'Wallet'}</Text>
                <Input editable={false} mt={2} px={15} size={'xl'} placeholder={'Tell viewers about your channel...'} value={account}/>
                <View style={[appStyles.row, appStyles.center, {marginTop: 25}]}>
                    <Button onPress={onUpdate}>{'Update'}</Button>
                </View>
            </View>
        </ScrollView>
    );
};

export default Setting;
