import * as jspb from 'google-protobuf'

import * as page_pb from './page_pb';


export class Category extends jspb.Message {
  getId(): string;
  setId(value: string): Category;

  getGenre(): Genre;
  setGenre(value: Genre): Category;

  getName(): string;
  setName(value: string): Category;

  getDescription(): string;
  setDescription(value: string): Category;

  getContract(): string;
  setContract(value: string): Category;

  getChain(): Chain;
  setChain(value: Chain): Category;

  getWebsiteurl(): string;
  setWebsiteurl(value: string): Category;

  getAvatarurl(): string;
  setAvatarurl(value: string): Category;

  getCoverurl(): string;
  setCoverurl(value: string): Category;

  getCovervideourl(): string;
  setCovervideourl(value: string): Category;

  getWhitepaperurl(): string;
  setWhitepaperurl(value: string): Category;

  getExplorerurl(): string;
  setExplorerurl(value: string): Category;

  getTwitterurl(): string;
  setTwitterurl(value: string): Category;

  getDiscordurl(): string;
  setDiscordurl(value: string): Category;

  getFacebookurl(): string;
  setFacebookurl(value: string): Category;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Category;
  clearTagsList(): Category;
  addTags(value: string, index?: number): Category;

  getPriority(): number;
  setPriority(value: number): Category;

  getGenreCase(): Category.GenreCase;

  getNameCase(): Category.NameCase;

  getDescriptionCase(): Category.DescriptionCase;

  getContractCase(): Category.ContractCase;

  getChainCase(): Category.ChainCase;

  getWebsiteurlCase(): Category.WebsiteurlCase;

  getAvatarurlCase(): Category.AvatarurlCase;

  getCoverurlCase(): Category.CoverurlCase;

  getCovervideourlCase(): Category.CovervideourlCase;

  getWhitepaperurlCase(): Category.WhitepaperurlCase;

  getExplorerurlCase(): Category.ExplorerurlCase;

  getTwitterurlCase(): Category.TwitterurlCase;

  getDiscordurlCase(): Category.DiscordurlCase;

  getFacebookurlCase(): Category.FacebookurlCase;

  getPriorityCase(): Category.PriorityCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    id: string,
    genre: Genre,
    name: string,
    description: string,
    contract: string,
    chain: Chain,
    websiteurl: string,
    avatarurl: string,
    coverurl: string,
    covervideourl: string,
    whitepaperurl: string,
    explorerurl: string,
    twitterurl: string,
    discordurl: string,
    facebookurl: string,
    tagsList: Array<string>,
    priority: number,
  }

  export enum GenreCase { 
    _GENRE_NOT_SET = 0,
    GENRE = 2,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 3,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 4,
  }

  export enum ContractCase { 
    _CONTRACT_NOT_SET = 0,
    CONTRACT = 5,
  }

  export enum ChainCase { 
    _CHAIN_NOT_SET = 0,
    CHAIN = 6,
  }

  export enum WebsiteurlCase { 
    _WEBSITEURL_NOT_SET = 0,
    WEBSITEURL = 7,
  }

  export enum AvatarurlCase { 
    _AVATARURL_NOT_SET = 0,
    AVATARURL = 8,
  }

  export enum CoverurlCase { 
    _COVERURL_NOT_SET = 0,
    COVERURL = 9,
  }

  export enum CovervideourlCase { 
    _COVERVIDEOURL_NOT_SET = 0,
    COVERVIDEOURL = 10,
  }

  export enum WhitepaperurlCase { 
    _WHITEPAPERURL_NOT_SET = 0,
    WHITEPAPERURL = 11,
  }

  export enum ExplorerurlCase { 
    _EXPLORERURL_NOT_SET = 0,
    EXPLORERURL = 12,
  }

  export enum TwitterurlCase { 
    _TWITTERURL_NOT_SET = 0,
    TWITTERURL = 13,
  }

  export enum DiscordurlCase { 
    _DISCORDURL_NOT_SET = 0,
    DISCORDURL = 14,
  }

  export enum FacebookurlCase { 
    _FACEBOOKURL_NOT_SET = 0,
    FACEBOOKURL = 15,
  }

  export enum PriorityCase { 
    _PRIORITY_NOT_SET = 0,
    PRIORITY = 17,
  }
}

export class CategoryId extends jspb.Message {
  getValue(): string;
  setValue(value: string): CategoryId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryId.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryId): CategoryId.AsObject;
  static serializeBinaryToWriter(message: CategoryId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryId;
  static deserializeBinaryFromReader(message: CategoryId, reader: jspb.BinaryReader): CategoryId;
}

export namespace CategoryId {
  export type AsObject = {
    value: string,
  }
}

export class CategoryList extends jspb.Message {
  getValuesList(): Array<Category>;
  setValuesList(value: Array<Category>): CategoryList;
  clearValuesList(): CategoryList;
  addValues(value?: Category, index?: number): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryList.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryList): CategoryList.AsObject;
  static serializeBinaryToWriter(message: CategoryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryList;
  static deserializeBinaryFromReader(message: CategoryList, reader: jspb.BinaryReader): CategoryList;
}

export namespace CategoryList {
  export type AsObject = {
    valuesList: Array<Category.AsObject>,
  }
}

export class CategoryQuery extends jspb.Message {
  getGenre(): Genre;
  setGenre(value: Genre): CategoryQuery;

  getPage(): page_pb.Page | undefined;
  setPage(value?: page_pb.Page): CategoryQuery;
  hasPage(): boolean;
  clearPage(): CategoryQuery;

  getSorting(): page_pb.Sorting;
  setSorting(value: page_pb.Sorting): CategoryQuery;

  getGenreCase(): CategoryQuery.GenreCase;

  getPageCase(): CategoryQuery.PageCase;

  getSortingCase(): CategoryQuery.SortingCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryQuery): CategoryQuery.AsObject;
  static serializeBinaryToWriter(message: CategoryQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryQuery;
  static deserializeBinaryFromReader(message: CategoryQuery, reader: jspb.BinaryReader): CategoryQuery;
}

export namespace CategoryQuery {
  export type AsObject = {
    genre: Genre,
    page?: page_pb.Page.AsObject,
    sorting: page_pb.Sorting,
  }

  export enum GenreCase { 
    _GENRE_NOT_SET = 0,
    GENRE = 1,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 2,
  }

  export enum SortingCase { 
    _SORTING_NOT_SET = 0,
    SORTING = 3,
  }
}

export enum Genre { 
  GAME = 0,
  MUSIC = 1,
  ART = 2,
}
export enum Chain { 
  BSC = 0,
}
