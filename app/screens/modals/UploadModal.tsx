import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button, HStack, Input, Modal, Select, FormControl } from "native-base";
import { Avatar, Image, Icon } from "react-native-elements";
import MSConfig from "../../configs/MSConfig";
import CategoryStore from "../../stores/CategoryStore";
import ImageUtil from "../../utils/ImageUtil";
import { useMoralis } from "react-moralis";
import * as ImagePicker from "expo-image-picker";
import { appStyles } from "../../configs/styles";
import colors from "../../configs/colors";
import { observer } from "mobx-react";
import { Profile, ProfileId } from "../../../pb/profile_pb";
import { ProfileServiceClient } from "../../../pb/ProfileServiceClientPb";
import { StreamServiceClient } from "../../../pb/StreamServiceClientPb";
import { Stream, StreamId } from "../../../pb/stream_pb";
import ProfileStore from "../../stores/ProfileStore";

const UploadModal = observer(({ navigation, visible, onClose }) => {
  const { categories } = CategoryStore;
  const { profiles } = ProfileStore;
  const { user } = useMoralis();
  const [profile, setProfile] = useState<Profile>();
  const [title, setTitle] = useState("");
  const [game, setGame] = useState("");
  const [isInprogress, setIsInprogress] = useState(false);
  // const [file, setFile] = useState("");

  useEffect(() => {
    ProfileStore.fetchProfile();
    CategoryStore.fetchCategory();
  }, []);

  useEffect(() => {
    if (!user) return;
    setProfile(profiles.find((i) => i.getId() === user.id));
  }, [profiles]);

  const onSelect = async () => {
    try {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      });

      if (response.cancelled) {
        setIsInprogress(false);
        return;
      }

      setIsInprogress(true);

      const result = response as ImagePicker.ImageInfo;
      const fileFromBase64 = await fetch(result.uri);
      const blob = await fileFromBase64.blob();
      const file = new File([blob], "Video.mp4", { type: "video/mp4" });

      // Create stream object
      const streamC = new StreamServiceClient(MSConfig.API_URL);
      const streamRequest = new Stream();
      streamRequest.setCategory(categories[0]);
      streamRequest.setStreamer(profiles.find((i) => i.getId() === user.id));
      streamRequest.setLive(false);
      streamRequest.setName("video");
      streamRequest.setRtmpurl("");
      streamRequest.setHlsurl("");
      streamRequest.setVideourl("");
      streamRequest.setScreenshoturl("");
      streamRequest.setInvisible(true);

      // Upload to server
      const stream = await streamC.create(streamRequest, {
        authorization: `bearer ${user.get("sessionToken")}`,
      });

      // Upload video
      const id = stream.getId();
      const formData = new FormData();
      formData.append("type", "video");
      formData.append("id", id);
      // formData.append("id", "6299d324371287b1b55d037d");
      formData.append("file", file);

      const jsonResponse = await fetch(`/api/upload/stream`, {
        method: "PUT",
        body: formData,
        headers: {
          authorization: `bearer ${user.get("sessionToken")}`,
        },
      });

      if (!jsonResponse.ok) {
        console.log({ error: jsonResponse });
      }
      setIsInprogress(false);
      navigation?.navigate("VideoDetail", { id });
    } catch (error) {
      setIsInprogress(false);
      console.log({ error });
    }
  };

  const onUpload = () => {};

  return (
    <Modal
      isOpen={visible}
      onClose={onClose}
      size={"sm"}
      _backdrop={{
        _dark: { bg: colors.black, opacity: 0.5 },
        bg: { bg: colors.black, opacity: 0.5 },
        blur: true,
      }}
    >
      <Modal.Content
        style={{}}
        bg={"rgba(0, 255, 142, 0.55)"}
        rounded={15}
        maxW={"full"}
      >
        <Modal.CloseButton
          _hover={{
            bg: "transparent",
          }}
          _icon={{
            color: "#fff",
          }}
        />
        {/* <Modal.Header _text={{color: colors.primaryDarkColor}}>{'Upload video'}</Modal.Header> */}
        <Modal.Body padding={16} justifyContent="center">
          {/* <FormControl isInvalid w="75%" maxW="300px">
            <FormControl.Label>Password</FormControl.Label>
            <Input type="file" placeholder="Enter password" />
          </FormControl> */}
          {isInprogress ? (
            <Text
              style={[
                appStyles.text,
                {
                  textAlign: "center",
                  fontSize: 30,
                  fontWeight: "500",
                },
              ]}
            >
              Loading...
            </Text>
          ) : (
            <>
              <Icon
                type={"font-awesome"}
                name={"upload"}
                color={"white"}
                size={80}
                style={{ marginBottom: 32 }}
                tvParallaxProperties={undefined}
              />
              <Text
                style={[
                  appStyles.text,
                  {
                    marginBottom: 32,
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: "500",
                  },
                ]}
              >
                {"Select video files to upload"}
              </Text>
              <Button
                m={"auto"}
                px={6}
                py={2}
                onPress={onSelect}
                _text={{ fontWeight: "bold" }}
              >
                {"SELECT FILES"}
              </Button>
            </>
          )}

          {/* <Text style={[appStyles.text]}>{"Title"}</Text>
          <Input
            mt={2}
            px={15}
            size={"xl"}
            borderWidth={0.5}
            borderRadius={10}
            placeholder={"Title stream..."}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <Text style={[appStyles.text, { marginTop: 15 }]}>{"Game"}</Text>
          <Select
            mt={2}
            px={15}
            size={"xl"}
            borderWidth={0.5}
            borderRadius={10}
            placeholder={"Select game"}
            selectedValue={game}
            onValueChange={(itemValue) => setGame(itemValue)}
          >
            {categories.map((i, k) => (
              <Select.Item key={k} label={i.getName()} value={i.getId()} />
            ))}
          </Select>
          <Text style={[appStyles.text, { marginTop: 15 }]}>{"Video"}</Text>
          <Input
            editable={false}
            mt={2}
            px={15}
            size={"xl"}
            borderWidth={0.5}
            borderRadius={10}
            placeholder={"Select video"}
            value={file}
            InputRightElement={
              <Button
                size={"xl"}
                rounded={"none"}
                w={"1/6"}
                h={"full"}
                onPress={onSelect}
              >
                {"File"}
              </Button>
            }
            onChangeText={(text) => setFile(text)}
          />
          <Button
            isDisabled={!title || !game || !file}
            mt={5}
            rounded={10}
            _text={{ fontFamily: "Montserrat-Bold" }}
            onPress={onUpload}
          >
            {"Upload"}
          </Button> */}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
});

export default UploadModal;
