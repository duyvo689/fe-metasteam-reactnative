import * as jspb from 'google-protobuf'



export class Token extends jspb.Message {
  getNetwork(): Network | undefined;
  setNetwork(value?: Network): Token;
  hasNetwork(): boolean;
  clearNetwork(): Token;

  getAddress(): string;
  setAddress(value: string): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    network?: Network.AsObject,
    address: string,
  }
}

export class TokenQuery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenQuery.AsObject;
  static toObject(includeInstance: boolean, msg: TokenQuery): TokenQuery.AsObject;
  static serializeBinaryToWriter(message: TokenQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenQuery;
  static deserializeBinaryFromReader(message: TokenQuery, reader: jspb.BinaryReader): TokenQuery;
}

export namespace TokenQuery {
  export type AsObject = {
  }
}

export class Network extends jspb.Message {
  getName(): string;
  setName(value: string): Network;

  getRpcurl(): string;
  setRpcurl(value: string): Network;

  getChainid(): string;
  setChainid(value: string): Network;

  getSymbol(): string;
  setSymbol(value: string): Network;

  getExplorerurl(): string;
  setExplorerurl(value: string): Network;

  getExplorerurlCase(): Network.ExplorerurlCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Network.AsObject;
  static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
  static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Network;
  static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
  export type AsObject = {
    name: string,
    rpcurl: string,
    chainid: string,
    symbol: string,
    explorerurl: string,
  }

  export enum ExplorerurlCase { 
    _EXPLORERURL_NOT_SET = 0,
    EXPLORERURL = 5,
  }
}

export class Donation extends jspb.Message {
  getReceiverid(): string;
  setReceiverid(value: string): Donation;

  getAmount(): number;
  setAmount(value: number): Donation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Donation.AsObject;
  static toObject(includeInstance: boolean, msg: Donation): Donation.AsObject;
  static serializeBinaryToWriter(message: Donation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Donation;
  static deserializeBinaryFromReader(message: Donation, reader: jspb.BinaryReader): Donation;
}

export namespace Donation {
  export type AsObject = {
    receiverid: string,
    amount: number,
  }
}

export class DonationData extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): DonationData;

  getTo(): string;
  setTo(value: string): DonationData;

  getValue(): string;
  setValue(value: string): DonationData;

  getData(): string;
  setData(value: string): DonationData;

  getChainid(): string;
  setChainid(value: string): DonationData;

  getGas(): string;
  setGas(value: string): DonationData;

  getGasprice(): string;
  setGasprice(value: string): DonationData;

  getNonce(): string;
  setNonce(value: string): DonationData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DonationData.AsObject;
  static toObject(includeInstance: boolean, msg: DonationData): DonationData.AsObject;
  static serializeBinaryToWriter(message: DonationData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DonationData;
  static deserializeBinaryFromReader(message: DonationData, reader: jspb.BinaryReader): DonationData;
}

export namespace DonationData {
  export type AsObject = {
    from: string,
    to: string,
    value: string,
    data: string,
    chainid: string,
    gas: string,
    gasprice: string,
    nonce: string,
  }
}

