import * as jspb from 'google-protobuf'

import * as profile_pb from './profile_pb';


export class ChatMessage extends jspb.Message {
  getStreamid(): string;
  setStreamid(value: string): ChatMessage;

  getSender(): profile_pb.Profile | undefined;
  setSender(value?: profile_pb.Profile): ChatMessage;
  hasSender(): boolean;
  clearSender(): ChatMessage;

  getType(): ChatMessageType;
  setType(value: ChatMessageType): ChatMessage;

  getText(): string;
  setText(value: string): ChatMessage;

  getImage(): string;
  setImage(value: string): ChatMessage;

  getFollowing(): ChatFollowing | undefined;
  setFollowing(value?: ChatFollowing): ChatMessage;
  hasFollowing(): boolean;
  clearFollowing(): ChatMessage;

  getDonation(): ChatDonation | undefined;
  setDonation(value?: ChatDonation): ChatMessage;
  hasDonation(): boolean;
  clearDonation(): ChatMessage;

  getTimestamp(): number;
  setTimestamp(value: number): ChatMessage;

  getMessageCase(): ChatMessage.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    streamid: string,
    sender?: profile_pb.Profile.AsObject,
    type: ChatMessageType,
    text: string,
    image: string,
    following?: ChatFollowing.AsObject,
    donation?: ChatDonation.AsObject,
    timestamp: number,
  }

  export enum MessageCase { 
    MESSAGE_NOT_SET = 0,
    TEXT = 4,
    IMAGE = 5,
    FOLLOWING = 6,
    DONATION = 7,
  }
}

export class ChatMessageList extends jspb.Message {
  getValuesList(): Array<ChatMessage>;
  setValuesList(value: Array<ChatMessage>): ChatMessageList;
  clearValuesList(): ChatMessageList;
  addValues(value?: ChatMessage, index?: number): ChatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageList.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageList): ChatMessageList.AsObject;
  static serializeBinaryToWriter(message: ChatMessageList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageList;
  static deserializeBinaryFromReader(message: ChatMessageList, reader: jspb.BinaryReader): ChatMessageList;
}

export namespace ChatMessageList {
  export type AsObject = {
    valuesList: Array<ChatMessage.AsObject>,
  }
}

export class ChatFollowing extends jspb.Message {
  getFollowing(): boolean;
  setFollowing(value: boolean): ChatFollowing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatFollowing.AsObject;
  static toObject(includeInstance: boolean, msg: ChatFollowing): ChatFollowing.AsObject;
  static serializeBinaryToWriter(message: ChatFollowing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatFollowing;
  static deserializeBinaryFromReader(message: ChatFollowing, reader: jspb.BinaryReader): ChatFollowing;
}

export namespace ChatFollowing {
  export type AsObject = {
    following: boolean,
  }
}

export class ChatDonation extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): ChatDonation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatDonation.AsObject;
  static toObject(includeInstance: boolean, msg: ChatDonation): ChatDonation.AsObject;
  static serializeBinaryToWriter(message: ChatDonation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatDonation;
  static deserializeBinaryFromReader(message: ChatDonation, reader: jspb.BinaryReader): ChatDonation;
}

export namespace ChatDonation {
  export type AsObject = {
    amount: number,
  }
}

export class ChatResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChatResponse): ChatResponse.AsObject;
  static serializeBinaryToWriter(message: ChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatResponse;
  static deserializeBinaryFromReader(message: ChatResponse, reader: jspb.BinaryReader): ChatResponse;
}

export namespace ChatResponse {
  export type AsObject = {
  }
}

export class ChatFilter extends jspb.Message {
  getStreamid(): string;
  setStreamid(value: string): ChatFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ChatFilter): ChatFilter.AsObject;
  static serializeBinaryToWriter(message: ChatFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatFilter;
  static deserializeBinaryFromReader(message: ChatFilter, reader: jspb.BinaryReader): ChatFilter;
}

export namespace ChatFilter {
  export type AsObject = {
    streamid: string,
  }
}

export enum ChatMessageType { 
  CHAT_DEFAULT = 0,
  CHAT_JOIN = 1,
  CHAT_LEAVE = 2,
  CHAT_TEXT = 3,
  CHAT_EMOJI = 4,
  CHAT_PING = 5,
  CHAT_FOLLOW = 6,
  CHAT_DONATE = 7,
}
