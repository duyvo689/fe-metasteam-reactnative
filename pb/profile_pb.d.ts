import * as jspb from 'google-protobuf'

import * as page_pb from './page_pb';


export class Profile extends jspb.Message {
  getId(): string;
  setId(value: string): Profile;

  getUsername(): string;
  setUsername(value: string): Profile;

  getEmail(): string;
  setEmail(value: string): Profile;

  getFirstname(): string;
  setFirstname(value: string): Profile;

  getLastname(): string;
  setLastname(value: string): Profile;

  getDescription(): string;
  setDescription(value: string): Profile;

  getAvatarurl(): string;
  setAvatarurl(value: string): Profile;

  getCoverurl(): string;
  setCoverurl(value: string): Profile;

  getBannerurl(): string;
  setBannerurl(value: string): Profile;

  getEthaddress(): string;
  setEthaddress(value: string): Profile;

  getDotaddress(): string;
  setDotaddress(value: string): Profile;

  getErdaddress(): string;
  setErdaddress(value: string): Profile;

  getSoladdress(): string;
  setSoladdress(value: string): Profile;

  getUsernameCase(): Profile.UsernameCase;

  getEmailCase(): Profile.EmailCase;

  getFirstnameCase(): Profile.FirstnameCase;

  getLastnameCase(): Profile.LastnameCase;

  getDescriptionCase(): Profile.DescriptionCase;

  getAvatarurlCase(): Profile.AvatarurlCase;

  getCoverurlCase(): Profile.CoverurlCase;

  getBannerurlCase(): Profile.BannerurlCase;

  getEthaddressCase(): Profile.EthaddressCase;

  getDotaddressCase(): Profile.DotaddressCase;

  getErdaddressCase(): Profile.ErdaddressCase;

  getSoladdressCase(): Profile.SoladdressCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    id: string,
    username: string,
    email: string,
    firstname: string,
    lastname: string,
    description: string,
    avatarurl: string,
    coverurl: string,
    bannerurl: string,
    ethaddress: string,
    dotaddress: string,
    erdaddress: string,
    soladdress: string,
  }

  export enum UsernameCase { 
    _USERNAME_NOT_SET = 0,
    USERNAME = 2,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 3,
  }

  export enum FirstnameCase { 
    _FIRSTNAME_NOT_SET = 0,
    FIRSTNAME = 4,
  }

  export enum LastnameCase { 
    _LASTNAME_NOT_SET = 0,
    LASTNAME = 5,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 6,
  }

  export enum AvatarurlCase { 
    _AVATARURL_NOT_SET = 0,
    AVATARURL = 7,
  }

  export enum CoverurlCase { 
    _COVERURL_NOT_SET = 0,
    COVERURL = 8,
  }

  export enum BannerurlCase { 
    _BANNERURL_NOT_SET = 0,
    BANNERURL = 9,
  }

  export enum EthaddressCase { 
    _ETHADDRESS_NOT_SET = 0,
    ETHADDRESS = 11,
  }

  export enum DotaddressCase { 
    _DOTADDRESS_NOT_SET = 0,
    DOTADDRESS = 12,
  }

  export enum ErdaddressCase { 
    _ERDADDRESS_NOT_SET = 0,
    ERDADDRESS = 13,
  }

  export enum SoladdressCase { 
    _SOLADDRESS_NOT_SET = 0,
    SOLADDRESS = 14,
  }
}

export class ProfileId extends jspb.Message {
  getValue(): string;
  setValue(value: string): ProfileId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileId.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileId): ProfileId.AsObject;
  static serializeBinaryToWriter(message: ProfileId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileId;
  static deserializeBinaryFromReader(message: ProfileId, reader: jspb.BinaryReader): ProfileId;
}

export namespace ProfileId {
  export type AsObject = {
    value: string,
  }
}

export class ProfileList extends jspb.Message {
  getValuesList(): Array<Profile>;
  setValuesList(value: Array<Profile>): ProfileList;
  clearValuesList(): ProfileList;
  addValues(value?: Profile, index?: number): Profile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileList.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileList): ProfileList.AsObject;
  static serializeBinaryToWriter(message: ProfileList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileList;
  static deserializeBinaryFromReader(message: ProfileList, reader: jspb.BinaryReader): ProfileList;
}

export namespace ProfileList {
  export type AsObject = {
    valuesList: Array<Profile.AsObject>,
  }
}

export class ProfileQuery extends jspb.Message {
  getPage(): page_pb.Page | undefined;
  setPage(value?: page_pb.Page): ProfileQuery;
  hasPage(): boolean;
  clearPage(): ProfileQuery;

  getSorting(): page_pb.Sorting;
  setSorting(value: page_pb.Sorting): ProfileQuery;

  getEthaddress(): string;
  setEthaddress(value: string): ProfileQuery;

  getDotaddress(): string;
  setDotaddress(value: string): ProfileQuery;

  getErdaddress(): string;
  setErdaddress(value: string): ProfileQuery;

  getSoladdress(): string;
  setSoladdress(value: string): ProfileQuery;

  getPageCase(): ProfileQuery.PageCase;

  getSortingCase(): ProfileQuery.SortingCase;

  getEthaddressCase(): ProfileQuery.EthaddressCase;

  getDotaddressCase(): ProfileQuery.DotaddressCase;

  getErdaddressCase(): ProfileQuery.ErdaddressCase;

  getSoladdressCase(): ProfileQuery.SoladdressCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileQuery): ProfileQuery.AsObject;
  static serializeBinaryToWriter(message: ProfileQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileQuery;
  static deserializeBinaryFromReader(message: ProfileQuery, reader: jspb.BinaryReader): ProfileQuery;
}

export namespace ProfileQuery {
  export type AsObject = {
    page?: page_pb.Page.AsObject,
    sorting: page_pb.Sorting,
    ethaddress: string,
    dotaddress: string,
    erdaddress: string,
    soladdress: string,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 1,
  }

  export enum SortingCase { 
    _SORTING_NOT_SET = 0,
    SORTING = 2,
  }

  export enum EthaddressCase { 
    _ETHADDRESS_NOT_SET = 0,
    ETHADDRESS = 11,
  }

  export enum DotaddressCase { 
    _DOTADDRESS_NOT_SET = 0,
    DOTADDRESS = 12,
  }

  export enum ErdaddressCase { 
    _ERDADDRESS_NOT_SET = 0,
    ERDADDRESS = 13,
  }

  export enum SoladdressCase { 
    _SOLADDRESS_NOT_SET = 0,
    SOLADDRESS = 14,
  }
}

