import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { appStyles } from "configs/styles";
import { observer } from "mobx-react";
import { Box, Input, Button } from "native-base";
import { Icon } from "react-native-elements";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";

import MSHandler from "handlers/MSHandler";

const btnShareContiner = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: "50%",
  marginRight: 12,
};

const ShareBlock = observer(({ stream }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!stream) return;
    setUrl(
      `${window.location.origin}/explore/stream-detail?id=${stream.getId()}`
    );
  }, [stream]);

  if (!stream) return null;

  return (
    <View style={[appStyles.row, { marginTop: 25, marginHorizontal: 25 }]}>
      <Box alignItems="start" mr={10} width="39%">
        <Input
          type="text"
          width="100%"
          style={{ outline: "none" }}
          value={url}
          InputRightElement={
            <Button
              size="xs"
              rounded="none"
              h="full"
              onPress={() => {
                MSHandler.copyString(url);
              }}
            >
              Copy
            </Button>
          }
          placeholder="Password"
        />
      </Box>
      <WhatsappShareButton
        url={url}
        style={{ ...btnShareContiner, backgroundColor: "#26b53d" }}
      >
        <Icon
          type={"font-awesome"}
          name={"whatsapp"}
          size={24}
          color={"white"}
        />
      </WhatsappShareButton>
      <FacebookShareButton
        url={url}
        style={{ ...btnShareContiner, backgroundColor: "#295396" }}
      >
        <Icon
          type={"font-awesome"}
          name={"facebook-f"}
          size={24}
          color={"white"}
        />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        style={{ ...btnShareContiner, backgroundColor: "#28aae1" }}
      >
        <Icon
          type={"font-awesome"}
          name={"twitter"}
          size={24}
          color={"white"}
        />
      </TwitterShareButton>
    </View>
  );
});

export default ShareBlock;
