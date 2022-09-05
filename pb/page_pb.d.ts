import * as jspb from 'google-protobuf'



export class Page extends jspb.Message {
  getPage(): number;
  setPage(value: number): Page;

  getSize(): number;
  setSize(value: number): Page;

  getPageCase(): Page.PageCase;

  getSizeCase(): Page.SizeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    page: number,
    size: number,
  }

  export enum PageCase { 
    _PAGE_NOT_SET = 0,
    PAGE = 1,
  }

  export enum SizeCase { 
    _SIZE_NOT_SET = 0,
    SIZE = 2,
  }
}

export enum Sorting { 
  SORTING_DEFAULT = 0,
  SORTING_LATEST = 1,
  SORTING_POPULAR = 2,
  SORTING_TRENDING = 3,
  SORTING_RECOMMENDED = 4,
  SORTING_PROMOTED = 5,
}
