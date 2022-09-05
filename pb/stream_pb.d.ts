import * as jspb from 'google-protobuf'

import * as profile_pb from './profile_pb';
import * as category_pb from './category_pb';
import * as page_pb from './page_pb';


export class Stream extends jspb.Message {
  getId(): string;
  setId(value: string): Stream;

  getCategory(): category_pb.Category | undefined;
  setCategory(value?: category_pb.Category): Stream;
  hasCategory(): boolean;
  clearCategory(): Stream;

  getStreamer(): profile_pb.Profile | undefined;
  setStreamer(value?: profile_pb.Profile): Stream;
  hasStreamer(): boolean;
  clearStreamer(): Stream;

  getLive(): boolean;
  setLive(value: boolean): Stream;

  getName(): string;
  setName(value: string): Stream;

  getRtmpurl(): string;
  setRtmpurl(value: string): Stream;

  getHlsurl(): string;
  setHlsurl(value: string): Stream;

  getVideourl(): string;
  setVideourl(value: string): Stream;

  getScreenshoturl(): string;
  setScreenshoturl(value: string): Stream;

  getInvisible(): boolean;
  setInvisible(value: boolean): Stream;

  getCreatedat(): number;
  setCreatedat(value: number): Stream;

  getUpdatedat(): number;
  setUpdatedat(value: number): Stream;

  getLiveCase(): Stream.LiveCase;

  getNameCase(): Stream.NameCase;

  getRtmpurlCase(): Stream.RtmpurlCase;

  getHlsurlCase(): Stream.HlsurlCase;

  getVideourlCase(): Stream.VideourlCase;

  getScreenshoturlCase(): Stream.ScreenshoturlCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stream.AsObject;
  static toObject(includeInstance: boolean, msg: Stream): Stream.AsObject;
  static serializeBinaryToWriter(message: Stream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stream;
  static deserializeBinaryFromReader(message: Stream, reader: jspb.BinaryReader): Stream;
}

export namespace Stream {
  export type AsObject = {
    id: string,
    category?: category_pb.Category.AsObject,
    streamer?: profile_pb.Profile.AsObject,
    live: boolean,
    name: string,
    rtmpurl: string,
    hlsurl: string,
    videourl: string,
    screenshoturl: string,
    invisible: boolean,
    createdat: number,
    updatedat: number,
  }

  export enum LiveCase { 
    _LIVE_NOT_SET = 0,
    LIVE = 8,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 6,
  }

  export enum RtmpurlCase { 
    _RTMPURL_NOT_SET = 0,
    RTMPURL = 4,
  }

  export enum HlsurlCase { 
    _HLSURL_NOT_SET = 0,
    HLSURL = 5,
  }

  export enum VideourlCase { 
    _VIDEOURL_NOT_SET = 0,
    VIDEOURL = 9,
  }

  export enum ScreenshoturlCase { 
    _SCREENSHOTURL_NOT_SET = 0,
    SCREENSHOTURL = 7,
  }
}

export class StreamId extends jspb.Message {
  getValue(): string;
  setValue(value: string): StreamId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamId.AsObject;
  static toObject(includeInstance: boolean, msg: StreamId): StreamId.AsObject;
  static serializeBinaryToWriter(message: StreamId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamId;
  static deserializeBinaryFromReader(message: StreamId, reader: jspb.BinaryReader): StreamId;
}

export namespace StreamId {
  export type AsObject = {
    value: string,
  }
}

export class StreamList extends jspb.Message {
  getValuesList(): Array<Stream>;
  setValuesList(value: Array<Stream>): StreamList;
  clearValuesList(): StreamList;
  addValues(value?: Stream, index?: number): Stream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamList.AsObject;
  static toObject(includeInstance: boolean, msg: StreamList): StreamList.AsObject;
  static serializeBinaryToWriter(message: StreamList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamList;
  static deserializeBinaryFromReader(message: StreamList, reader: jspb.BinaryReader): StreamList;
}

export namespace StreamList {
  export type AsObject = {
    valuesList: Array<Stream.AsObject>,
  }
}

export class StreamQuery extends jspb.Message {
  getCategoryid(): string;
  setCategoryid(value: string): StreamQuery;

  getProfileid(): string;
  setProfileid(value: string): StreamQuery;

  getPage(): page_pb.Page | undefined;
  setPage(value?: page_pb.Page): StreamQuery;
  hasPage(): boolean;
  clearPage(): StreamQuery;

  getSorting(): page_pb.Sorting;
  setSorting(value: page_pb.Sorting): StreamQuery;

  getLive(): boolean;
  setLive(value: boolean): StreamQuery;

  getIncludinginvisible(): boolean;
  setIncludinginvisible(value: boolean): StreamQuery;

  getCategoryidCase(): StreamQuery.CategoryidCase;

  getProfileidCase(): StreamQuery.ProfileidCase;

  getPageCase(): StreamQuery.PageCase;

  getSortingCase(): StreamQuery.SortingCase;

  getLiveCase(): StreamQuery.LiveCase;

  getIncludinginvisibleCase(): StreamQuery.IncludinginvisibleCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamQuery.AsObject;
  static toObject(includeInstance: boolean, msg: StreamQuery): StreamQuery.AsObject;
  static serializeBinaryToWriter(message: StreamQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamQuery;
  static deserializeBinaryFromReader(message: StreamQuery, reader: jspb.BinaryReader): StreamQuery;
}

export namespace StreamQuery {
  export type AsObject = {
    categoryid: string,
    profileid: string,
    page?: page_pb.Page.AsObject,
    sorting: page_pb.Sorting,
    live: boolean,
    includinginvisible: boolean,
  }

  export enum CategoryidCase { 
    _CATEGORYID_NOT_SET = 0,
    CATEGORYID = 1,
  }

  export enum ProfileidCase { 
    _PROFILEID_NOT_SET = 0,
    PROFILEID = 2,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 3,
  }

  export enum SortingCase { 
    _SORTING_NOT_SET = 0,
    SORTING = 4,
  }

  export enum LiveCase { 
    _LIVE_NOT_SET = 0,
    LIVE = 5,
  }

  export enum IncludinginvisibleCase { 
    _INCLUDINGINVISIBLE_NOT_SET = 0,
    INCLUDINGINVISIBLE = 6,
  }
}

