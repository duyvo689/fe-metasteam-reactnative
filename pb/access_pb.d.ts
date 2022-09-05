import * as jspb from 'google-protobuf'

import * as profile_pb from './profile_pb';


export class Access extends jspb.Message {
  getProfileid(): string;
  setProfileid(value: string): Access;

  getAction(): string;
  setAction(value: string): Access;

  getResouce(): string;
  setResouce(value: string): Access;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Access.AsObject;
  static toObject(includeInstance: boolean, msg: Access): Access.AsObject;
  static serializeBinaryToWriter(message: Access, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Access;
  static deserializeBinaryFromReader(message: Access, reader: jspb.BinaryReader): Access;
}

export namespace Access {
  export type AsObject = {
    profileid: string,
    action: string,
    resouce: string,
  }
}

export class Policy extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Policy.AsObject;
  static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
  static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Policy;
  static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
  export type AsObject = {
  }
}

export class PolicyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyResponse): PolicyResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyResponse;
  static deserializeBinaryFromReader(message: PolicyResponse, reader: jspb.BinaryReader): PolicyResponse;
}

export namespace PolicyResponse {
  export type AsObject = {
  }
}

export enum Role { 
  ROLE_DEFAULT = 0,
  ROLE_ANALYTICS = 1,
  ROLE_MODERATOR = 2,
  ROLE_ADMIN = 3,
  ROLE_SUPERADMIN = 4,
}
