import * as jspb from 'google-protobuf'

import * as profile_pb from './profile_pb';
import * as stream_pb from './stream_pb';
import * as category_pb from './category_pb';


export class StreamInfo extends jspb.Message {
  getCategory(): category_pb.Category | undefined;
  setCategory(value?: category_pb.Category): StreamInfo;
  hasCategory(): boolean;
  clearCategory(): StreamInfo;

  getName(): string;
  setName(value: string): StreamInfo;

  getNameCase(): StreamInfo.NameCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StreamInfo): StreamInfo.AsObject;
  static serializeBinaryToWriter(message: StreamInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamInfo;
  static deserializeBinaryFromReader(message: StreamInfo, reader: jspb.BinaryReader): StreamInfo;
}

export namespace StreamInfo {
  export type AsObject = {
    category?: category_pb.Category.AsObject,
    name: string,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }
}

export class StreamKey extends jspb.Message {
  getValue(): string;
  setValue(value: string): StreamKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamKey.AsObject;
  static toObject(includeInstance: boolean, msg: StreamKey): StreamKey.AsObject;
  static serializeBinaryToWriter(message: StreamKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamKey;
  static deserializeBinaryFromReader(message: StreamKey, reader: jspb.BinaryReader): StreamKey;
}

export namespace StreamKey {
  export type AsObject = {
    value: string,
  }
}

export class StreamKeyOptions extends jspb.Message {
  getRenew(): boolean;
  setRenew(value: boolean): StreamKeyOptions;

  getRenewCase(): StreamKeyOptions.RenewCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamKeyOptions.AsObject;
  static toObject(includeInstance: boolean, msg: StreamKeyOptions): StreamKeyOptions.AsObject;
  static serializeBinaryToWriter(message: StreamKeyOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamKeyOptions;
  static deserializeBinaryFromReader(message: StreamKeyOptions, reader: jspb.BinaryReader): StreamKeyOptions;
}

export namespace StreamKeyOptions {
  export type AsObject = {
    renew: boolean,
  }

  export enum RenewCase { 
    _RENEW_NOT_SET = 0,
    RENEW = 1,
  }
}

export class PublishEvent extends jspb.Message {
  getEvent(): PublishEventType;
  setEvent(value: PublishEventType): PublishEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishEvent.AsObject;
  static toObject(includeInstance: boolean, msg: PublishEvent): PublishEvent.AsObject;
  static serializeBinaryToWriter(message: PublishEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishEvent;
  static deserializeBinaryFromReader(message: PublishEvent, reader: jspb.BinaryReader): PublishEvent;
}

export namespace PublishEvent {
  export type AsObject = {
    event: PublishEventType,
  }
}

export enum PublishEventType { 
  PUBLISH_IDLE = 0,
  PUBLISH_STARTED = 1,
  PUBLISH_STOPED = 2,
}
