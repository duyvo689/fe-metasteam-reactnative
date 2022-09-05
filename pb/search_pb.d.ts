import * as jspb from 'google-protobuf'

import * as profile_pb from './profile_pb';
import * as category_pb from './category_pb';
import * as stream_pb from './stream_pb';


export class SearchRequest extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): SearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    keyword: string,
  }
}

export class SearchResponse extends jspb.Message {
  getProfile(): profile_pb.Profile | undefined;
  setProfile(value?: profile_pb.Profile): SearchResponse;
  hasProfile(): boolean;
  clearProfile(): SearchResponse;

  getCategory(): category_pb.Category | undefined;
  setCategory(value?: category_pb.Category): SearchResponse;
  hasCategory(): boolean;
  clearCategory(): SearchResponse;

  getStream(): stream_pb.Stream | undefined;
  setStream(value?: stream_pb.Stream): SearchResponse;
  hasStream(): boolean;
  clearStream(): SearchResponse;

  getValueCase(): SearchResponse.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
  static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponse;
  static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
  export type AsObject = {
    profile?: profile_pb.Profile.AsObject,
    category?: category_pb.Category.AsObject,
    stream?: stream_pb.Stream.AsObject,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    PROFILE = 1,
    CATEGORY = 2,
    STREAM = 3,
  }
}

export class SearchResponseList extends jspb.Message {
  getValuesList(): Array<SearchResponse>;
  setValuesList(value: Array<SearchResponse>): SearchResponseList;
  clearValuesList(): SearchResponseList;
  addValues(value?: SearchResponse, index?: number): SearchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResponseList.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResponseList): SearchResponseList.AsObject;
  static serializeBinaryToWriter(message: SearchResponseList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResponseList;
  static deserializeBinaryFromReader(message: SearchResponseList, reader: jspb.BinaryReader): SearchResponseList;
}

export namespace SearchResponseList {
  export type AsObject = {
    valuesList: Array<SearchResponse.AsObject>,
  }
}

