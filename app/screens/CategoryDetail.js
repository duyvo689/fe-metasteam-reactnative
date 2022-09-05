import React, {useEffect, useRef, useState} from 'react';
import {Platform, ScrollView, Text, View} from 'react-native';
import {Button, Menu} from 'native-base';
import {Chip, Icon, Image} from 'react-native-elements';
import MSConfig from 'configs/MSConfig';
import MSHandler from 'handlers/MSHandler';
import CategoryStore from 'stores/CategoryStore';
import StreamStore from 'stores/StreamStore';
import {useDimensions} from '@react-native-community/hooks';
import {useHover} from 'react-native-web-hooks';
import {useMediaQuery} from 'react-responsive';
import {useChain, useMoralis} from 'react-moralis';
import {Video} from 'expo-av';
import {appStyles} from 'configs/styles';
import colors from 'configs/colors';
import dimens from 'configs/dimens';
import {observer} from 'mobx-react';

import {CategoryId} from 'pb/category_pb';
import {CategoryFollowingServiceClient} from 'pb/Category_followingServiceClientPb';

import LiveChannelsBlock from 'screens/blocks/LiveChannelsBlock';
import NFTsBlock from 'screens/blocks/NFTsBlock';
import TinyTag from "screens/tags/TinyTag";

const Tab = ({style, focused, title, onPress}) => {
    const viewRef = useRef();
    const isHovered = useHover(viewRef);
    return (
        <View ref={viewRef} style={{marginRight: 60, opacity: isHovered ? 0.3 : 1.0}}>
            <Text style={[appStyles.title, {color: focused ? colors.primaryDarkColor : colors.white}, style]} onPress={onPress}>{title}</Text>
        </View>
    );
};

const CategoryDetail = observer(({route, navigation}) => {
    const isMobile = useMediaQuery({maxWidth: 767}) || Platform.OS !== 'web';
    const isDesktop = useMediaQuery({minWidth: 992});
    const {width: widthScreen} = useDimensions().window;
    const width = 135;
    const height = 135;
    const buttonProps = {bg: colors.black, _hover: {bg: colors.primaryAlphaDarkColor}, _pressed: {bg: colors.black}, _focus: {bg: colors.black}, _text: {fontSize: dimens.normalText, color: colors.primaryDarkColor}};

    const {id} = route.params;
    const {categories} = CategoryStore;
    const category = categories.find(i => i.getId() === id);
    const [follower, setFollower] = useState(0);
    const [isFollowing, setIsFollowing] = useState(false);
    const [index, setIndex] = useState(0);
    const {user} = useMoralis();
    const {chain} = useChain();

    useEffect(() => {
        CategoryStore.fetchCategory();
        StreamStore.fetchStream();
    }, []);

    useEffect(() => {
        if (category) {
            const q = new CategoryId();
            q.setValue(category.getId());
            const categoryFollowingC = new CategoryFollowingServiceClient(MSConfig.API_URL);
            categoryFollowingC.count(q, null).then(s => {
                setFollower(s.getCount());
                if (user) {
                    categoryFollowingC.check(q, {'authorization': `bearer ${user.get('sessionToken')}`}).then(s => {
                        setIsFollowing(s.getFollowing());
                    });
                }
            });
        }
    }, [category]);

    const onOpenUrl = (url) => () => {
        MSHandler.openUrl(url);
    };

    const onChangeIndex = (index) => () => setIndex(index);

    const onFollow = () => {
        const q = new CategoryId();
        q.setValue(category.getId());
        const categoryFollowingC = new CategoryFollowingServiceClient(MSConfig.API_URL);
        if (isFollowing) {
            categoryFollowingC.unfollow(q, {'authorization': `bearer ${user.get('sessionToken')}`}).then(s => {
                setFollower(follower - 1);
                setIsFollowing(false);
            });
        } else {
            categoryFollowingC.follow(q, {'authorization': `bearer ${user.get('sessionToken')}`}).then(s => {
                setFollower(follower + 1)
                setIsFollowing(true);
            });
        }
    };

    const onView = () => MSHandler.openUrl(chain ? chain.blockExplorerUrl : '');

    if (!category) return null;
    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 45}} showsVerticalScrollIndicator={false}>
            <Video
                style={{width: widthScreen - (isDesktop ? 240 : 0), height: !isDesktop ? 200 : 300}}
                resizeMode={Video.RESIZE_MODE_COVER}
                shouldPlay={true}
                isLooping={true}
                isMuted={true}
                source={{uri: category.getCovervideourl()}}
            />
            <View style={[appStyles.row, {padding: 15}]}>
                <View>
                    <Image style={{width, height, borderRadius: 10}} source={{uri: category.getAvatarurl()}} resizeMode={'contain'}/>
                    {!isDesktop && !!user ? <Button {...buttonProps} mt={15} leftIcon={<Icon type={'ionicon'} name={isFollowing ? 'heart-dislike' : 'heart'} color={colors.primaryDarkColor} size={20}/>} _text={{color: colors.primaryDarkColor}} onPress={onFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</Button> : null}
                </View>
                <View style={{flex: 1, marginLeft: 15}}>
                    <View style={appStyles.row}>
                        <Text style={[appStyles.title, {flex: 1}]}>{category.getName()}</Text>
                        {isDesktop && !!user ? <Button {...buttonProps} ml={15} leftIcon={<Icon type={'ionicon'} name={isFollowing ? 'heart-dislike' : 'heart'} color={colors.primaryDarkColor} size={20}/>} _text={{color: colors.primaryDarkColor}} onPress={onFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</Button> : null}
                    </View>
                    {!isDesktop ? <View style={[appStyles.row, appStyles.wrap]}>
                        {category.getTagsList().map((i, k)=> <TinyTag key={k} title={i}/>)}
                    </View> : null}
                    <View style={[appStyles.row, {marginTop: 5}]}>
                        <Icon type={'ionicon'} name={'ellipse'} color={colors.white} size={10}/>
                        <Text style={[appStyles.text, {marginHorizontal: 10}]}>
                            <Text style={[appStyles.text, {fontFamily: 'Montserrat-Bold'}]}>{follower}</Text>
                            {' follower'}
                        </Text>
                        {isDesktop && category.getTagsList().map((i, k)=> <TinyTag key={k} title={i}/>)}
                    </View>
                    <Text style={[appStyles.text, {marginTop: 5}]} numberOfLines={2} ellipsizeMode={'tail'}>{category.getDescription()}</Text>
                    <View style={[appStyles.row, appStyles.wrap]}>
                        <Button {...buttonProps} h={30} mt={15} mr={15} onPress={onOpenUrl(category.getWebsiteurl())}>{'Website'}</Button>
                        <Menu placement={'left'} trigger={triggerProps => <Button {...buttonProps} h={30} mt={15} mr={15} {...triggerProps}>{'Community'}</Button>}>
                            <Menu.Item onPress={onOpenUrl(category.getTwitterurl())}>
                                <View style={appStyles.row}>
                                    <Icon containerStyle={{marginRight: 10}} type={'ionicon'} name={'logo-twitter'} color={colors.primaryDarkColor} size={20}/>
                                    <Text style={appStyles.text}>{'Twitter'}</Text>
                                </View>
                            </Menu.Item>
                            <Menu.Item onPress={onOpenUrl(category.getDiscordurl())}>
                                <View style={appStyles.row}>
                                    <Icon containerStyle={{marginRight: 10}} type={'material-community'} name={'discord'} color={colors.primaryDarkColor} size={20}/>
                                    <Text style={appStyles.text}>{'Discord'}</Text>
                                </View>
                            </Menu.Item>
                            <Menu.Item onPress={onOpenUrl(category.getFacebookurl())}>
                                <View style={appStyles.row}>
                                    <Icon containerStyle={{marginRight: 10}} type={'ionicon'} name={'logo-facebook'} color={colors.primaryDarkColor} size={20}/>
                                    <Text style={appStyles.text}>{'Facebook'}</Text>
                                </View>
                            </Menu.Item>
                        </Menu>
                        <Button {...buttonProps} h={30} mt={15} mr={15} onPress={onOpenUrl(category.getWhitepaperurl())}>{'Whitepaper'}</Button>
                        <Button {...buttonProps} h={30} mt={15} mr={15} onPress={onOpenUrl(category.getExplorerurl())}>{'Explore'}</Button>
                    </View>
                </View>
            </View>
            <ScrollView horizontal style={{marginTop: 25, marginHorizontal: 25, marginBottom: 15}} showsHorizontalScrollIndicator={false}>
                <Tab focused={index === 0} title={'Streams'} onPress={onChangeIndex(0)}/>
                <Tab focused={index === 1} title={'NFTs'} onPress={onChangeIndex(1)}/>
                <Tab focused={index === 2} title={'Your Items'} onPress={onChangeIndex(2)}/>
                <Tab focused={index === 3} title={'Sales'} onPress={onChangeIndex(3)}/>
            </ScrollView>
            {index === 0 ? <LiveChannelsBlock style={{margin: 25}} contentStyle={{marginHorizontal: 10}} filter={{categoryId: category.getId()}} navigation={navigation}/> : null}
            {index === 1 ? <NFTsBlock style={{margin: 25}} contentStyle={{marginHorizontal: 10}} filter={{chain: 'polygon', address: '0x75e3e9c92162e62000425c98769965a76c2e387a', token_address: '0x2953399124F0cBB46d2CbACD8A89cF0599974963'}} navigation={navigation}/> : null}
            {index === 2 ? <Text style={[appStyles.text, {marginTop: 15, marginHorizontal: 25}]}>{'If you just minted an asset, please wait up to 5 minutes for it to show here.'}</Text> : null}
            {index === 3 ? <>
                <Text style={[appStyles.title, {color: colors.white}, {alignSelf: 'center'}]}>{'Recent Sales'}</Text>
            </> : null}
        </ScrollView>
    );
});

export default CategoryDetail;
