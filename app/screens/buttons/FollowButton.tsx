import React from "react";
import { Platform, StyleProp, ViewStyle } from "react-native";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import colors from "../../configs/colors";
import dimens from "../../configs/dimens";
import { Profile, ProfileId } from "../../../pb/profile_pb";
import { Button, IButtonProps } from "native-base";
import { Avatar, Badge, Icon } from "react-native-elements";
import { ProfileFollowingServiceClient } from "../../../pb/Profile_followingServiceClientPb";
import MSConfig from "../../configs/MSConfig";
import { useMoralis } from "react-moralis";

interface IProps extends IButtonProps {
  profile: Profile;
  isFollowing: boolean;
  setIsFollowing: (value: boolean) => void;
}

const FollowButton: React.FC<IProps> = (props) => {
  const { user } = useMoralis();
  const { profile, isFollowing, setIsFollowing, ...buttonProps } = props;

  const onFollow = () => {
    const q = new ProfileId();
    q.setValue(profile.getId());
    const profileFollowingC = new ProfileFollowingServiceClient(
      MSConfig.API_URL
    );
    if (isFollowing) {
      profileFollowingC
        .unfollow(q, { authorization: `bearer ${user.get("sessionToken")}` })
        .then((s) => {
          setIsFollowing(false);
        });
    } else {
      profileFollowingC
        .follow(q, { authorization: `bearer ${user.get("sessionToken")}` })
        .then((s) => {
          setIsFollowing(true);
        });
    }
  };

  if (!user) return null;
  return (
    <Button
      px={6}
      py={2}
      onPress={onFollow}
      leftIcon={
        <Icon
          type={"ionicon"}
          name={isFollowing ? "heart-dislike" : "heart"}
          color={buttonProps._text?.color.toString()}
          size={20}
          tvParallaxProperties={undefined}
        />
      }
      _text={{ fontWeight: "bold" }}
      {...buttonProps}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default FollowButton;
