import * as jspb from 'google-protobuf'

import * as category_pb from './category_pb';


export class CategoryFollowing extends jspb.Message {
  getId(): string;
  setId(value: string): CategoryFollowing;

  getFollowing(): boolean;
  setFollowing(value: boolean): CategoryFollowing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryFollowing.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryFollowing): CategoryFollowing.AsObject;
  static serializeBinaryToWriter(message: CategoryFollowing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryFollowing;
  static deserializeBinaryFromReader(message: CategoryFollowing, reader: jspb.BinaryReader): CategoryFollowing;
}

export namespace CategoryFollowing {
  export type AsObject = {
    id: string,
    following: boolean,
  }
}

export class CategoryFollowingCount extends jspb.Message {
  getId(): string;
  setId(value: string): CategoryFollowingCount;

  getCount(): number;
  setCount(value: number): CategoryFollowingCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryFollowingCount.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryFollowingCount): CategoryFollowingCount.AsObject;
  static serializeBinaryToWriter(message: CategoryFollowingCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryFollowingCount;
  static deserializeBinaryFromReader(message: CategoryFollowingCount, reader: jspb.BinaryReader): CategoryFollowingCount;
}

export namespace CategoryFollowingCount {
  export type AsObject = {
    id: string,
    count: number,
  }
}

