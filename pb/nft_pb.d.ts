import * as jspb from 'google-protobuf'

import * as page_pb from './page_pb';


export class NFTCollection extends jspb.Message {
  getName(): string;
  setName(value: string): NFTCollection;

  getDescription(): string;
  setDescription(value: string): NFTCollection;

  getImage(): string;
  setImage(value: string): NFTCollection;

  getExternallink(): string;
  setExternallink(value: string): NFTCollection;

  getSellerfeebasispoints(): number;
  setSellerfeebasispoints(value: number): NFTCollection;

  getFeerecipient(): string;
  setFeerecipient(value: string): NFTCollection;

  getTotalsupply(): number;
  setTotalsupply(value: number): NFTCollection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NFTCollection.AsObject;
  static toObject(includeInstance: boolean, msg: NFTCollection): NFTCollection.AsObject;
  static serializeBinaryToWriter(message: NFTCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NFTCollection;
  static deserializeBinaryFromReader(message: NFTCollection, reader: jspb.BinaryReader): NFTCollection;
}

export namespace NFTCollection {
  export type AsObject = {
    name: string,
    description: string,
    image: string,
    externallink: string,
    sellerfeebasispoints: number,
    feerecipient: string,
    totalsupply: number,
  }
}

export class NFTCollectionQuery extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): NFTCollectionQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NFTCollectionQuery.AsObject;
  static toObject(includeInstance: boolean, msg: NFTCollectionQuery): NFTCollectionQuery.AsObject;
  static serializeBinaryToWriter(message: NFTCollectionQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NFTCollectionQuery;
  static deserializeBinaryFromReader(message: NFTCollectionQuery, reader: jspb.BinaryReader): NFTCollectionQuery;
}

export namespace NFTCollectionQuery {
  export type AsObject = {
    address: string,
  }
}

export class NFTToken extends jspb.Message {
  getName(): string;
  setName(value: string): NFTToken;

  getDescription(): string;
  setDescription(value: string): NFTToken;

  getImage(): string;
  setImage(value: string): NFTToken;

  getImagedata(): string;
  setImagedata(value: string): NFTToken;

  getBackgroundcolor(): string;
  setBackgroundcolor(value: string): NFTToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NFTToken.AsObject;
  static toObject(includeInstance: boolean, msg: NFTToken): NFTToken.AsObject;
  static serializeBinaryToWriter(message: NFTToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NFTToken;
  static deserializeBinaryFromReader(message: NFTToken, reader: jspb.BinaryReader): NFTToken;
}

export namespace NFTToken {
  export type AsObject = {
    name: string,
    description: string,
    image: string,
    imagedata: string,
    backgroundcolor: string,
  }
}

export class NFTTokenList extends jspb.Message {
  getValuesList(): Array<NFTToken>;
  setValuesList(value: Array<NFTToken>): NFTTokenList;
  clearValuesList(): NFTTokenList;
  addValues(value?: NFTToken, index?: number): NFTToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NFTTokenList.AsObject;
  static toObject(includeInstance: boolean, msg: NFTTokenList): NFTTokenList.AsObject;
  static serializeBinaryToWriter(message: NFTTokenList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NFTTokenList;
  static deserializeBinaryFromReader(message: NFTTokenList, reader: jspb.BinaryReader): NFTTokenList;
}

export namespace NFTTokenList {
  export type AsObject = {
    valuesList: Array<NFTToken.AsObject>,
  }
}

export class NFTTokenQuery extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): NFTTokenQuery;

  getPage(): page_pb.Page | undefined;
  setPage(value?: page_pb.Page): NFTTokenQuery;
  hasPage(): boolean;
  clearPage(): NFTTokenQuery;

  getTokenid(): string;
  setTokenid(value: string): NFTTokenQuery;

  getTokenindex(): number;
  setTokenindex(value: number): NFTTokenQuery;

  getPageCase(): NFTTokenQuery.PageCase;

  getTokenidCase(): NFTTokenQuery.TokenidCase;

  getTokenindexCase(): NFTTokenQuery.TokenindexCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NFTTokenQuery.AsObject;
  static toObject(includeInstance: boolean, msg: NFTTokenQuery): NFTTokenQuery.AsObject;
  static serializeBinaryToWriter(message: NFTTokenQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NFTTokenQuery;
  static deserializeBinaryFromReader(message: NFTTokenQuery, reader: jspb.BinaryReader): NFTTokenQuery;
}

export namespace NFTTokenQuery {
  export type AsObject = {
    address: string,
    page?: page_pb.Page.AsObject,
    tokenid: string,
    tokenindex: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 2,
  }

  export enum TokenidCase { 
    _TOKENID_NOT_SET = 0,
    TOKENID = 3,
  }

  export enum TokenindexCase { 
    _TOKENINDEX_NOT_SET = 0,
    TOKENINDEX = 4,
  }
}

