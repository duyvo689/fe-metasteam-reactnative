import * as jspb from 'google-protobuf'



export class Session extends jspb.Message {
  getId(): string;
  setId(value: string): Session;

  getToken(): string;
  setToken(value: string): Session;

  getUser(): string;
  setUser(value: string): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    id: string,
    token: string,
    user: string,
  }
}

export class SessionQuery extends jspb.Message {
  getToken(): string;
  setToken(value: string): SessionQuery;

  getProfileid(): string;
  setProfileid(value: string): SessionQuery;

  getTokenCase(): SessionQuery.TokenCase;

  getProfileidCase(): SessionQuery.ProfileidCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SessionQuery): SessionQuery.AsObject;
  static serializeBinaryToWriter(message: SessionQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionQuery;
  static deserializeBinaryFromReader(message: SessionQuery, reader: jspb.BinaryReader): SessionQuery;
}

export namespace SessionQuery {
  export type AsObject = {
    token: string,
    profileid: string,
  }

  export enum TokenCase { 
    _TOKEN_NOT_SET = 0,
    TOKEN = 1,
  }

  export enum ProfileidCase { 
    _PROFILEID_NOT_SET = 0,
    PROFILEID = 2,
  }
}

