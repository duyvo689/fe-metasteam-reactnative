import * as jspb from 'google-protobuf'

import * as profile_pb from './profile_pb';


export class ProfileFollowing extends jspb.Message {
  getId(): string;
  setId(value: string): ProfileFollowing;

  getFollowing(): boolean;
  setFollowing(value: boolean): ProfileFollowing;

  getFollowerid(): string;
  setFollowerid(value: string): ProfileFollowing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileFollowing.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileFollowing): ProfileFollowing.AsObject;
  static serializeBinaryToWriter(message: ProfileFollowing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileFollowing;
  static deserializeBinaryFromReader(message: ProfileFollowing, reader: jspb.BinaryReader): ProfileFollowing;
}

export namespace ProfileFollowing {
  export type AsObject = {
    id: string,
    following: boolean,
    followerid: string,
  }
}

export class ProfileFollowingCount extends jspb.Message {
  getId(): string;
  setId(value: string): ProfileFollowingCount;

  getCount(): number;
  setCount(value: number): ProfileFollowingCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileFollowingCount.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileFollowingCount): ProfileFollowingCount.AsObject;
  static serializeBinaryToWriter(message: ProfileFollowingCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileFollowingCount;
  static deserializeBinaryFromReader(message: ProfileFollowingCount, reader: jspb.BinaryReader): ProfileFollowingCount;
}

export namespace ProfileFollowingCount {
  export type AsObject = {
    id: string,
    count: number,
  }
}

