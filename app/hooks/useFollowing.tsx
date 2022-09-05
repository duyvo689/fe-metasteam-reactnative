import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { ProfileFollowingServiceClient } from "../../pb/Profile_followingServiceClientPb";
import { Profile, ProfileId } from "../../pb/profile_pb";
import MSConfig from "../configs/MSConfig";

const useFollowing = (profile: Profile) => {
  const { user } = useMoralis();
  const [followers, setFollowers] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (!profile) return;

    const q = new ProfileId();
    q.setValue(profile.getId());

    const profileFollowingC = new ProfileFollowingServiceClient(
      MSConfig.API_URL
    );

    profileFollowingC.count(q, null).then((s) => {
      setFollowers(s.getCount());

      if (!user) return;

      profileFollowingC
        .check(q, { authorization: `bearer ${user.get("sessionToken")}` })
        .then((s) => {
          setIsFollowing(!!s.getFollowing());
        });
    });
  }, [profile]);

  const setIsFollowingWrapper = (_isFollowing: boolean) => {
    setIsFollowing(_isFollowing);
    setFollowers(followers + (_isFollowing ? 1 : -1));
  };

  return {
    followers,
    isFollowing,
    setIsFollowing: setIsFollowingWrapper,
  };
};

export default useFollowing;
