/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as nft_pb from './nft_pb';


export class NFTServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoQueryCollection = new grpcWeb.MethodDescriptor(
    '/pb.NFTService/QueryCollection',
    grpcWeb.MethodType.UNARY,
    nft_pb.NFTCollectionQuery,
    nft_pb.NFTCollection,
    (request: nft_pb.NFTCollectionQuery) => {
      return request.serializeBinary();
    },
    nft_pb.NFTCollection.deserializeBinary
  );

  queryCollection(
    request: nft_pb.NFTCollectionQuery,
    metadata: grpcWeb.Metadata | null): Promise<nft_pb.NFTCollection>;

  queryCollection(
    request: nft_pb.NFTCollectionQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nft_pb.NFTCollection) => void): grpcWeb.ClientReadableStream<nft_pb.NFTCollection>;

  queryCollection(
    request: nft_pb.NFTCollectionQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nft_pb.NFTCollection) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.NFTService/QueryCollection',
        request,
        metadata || {},
        this.methodInfoQueryCollection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.NFTService/QueryCollection',
    request,
    metadata || {},
    this.methodInfoQueryCollection);
  }

  methodInfoQueryToken = new grpcWeb.MethodDescriptor(
    '/pb.NFTService/QueryToken',
    grpcWeb.MethodType.UNARY,
    nft_pb.NFTTokenQuery,
    nft_pb.NFTTokenList,
    (request: nft_pb.NFTTokenQuery) => {
      return request.serializeBinary();
    },
    nft_pb.NFTTokenList.deserializeBinary
  );

  queryToken(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null): Promise<nft_pb.NFTTokenList>;

  queryToken(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nft_pb.NFTTokenList) => void): grpcWeb.ClientReadableStream<nft_pb.NFTTokenList>;

  queryToken(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nft_pb.NFTTokenList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.NFTService/QueryToken',
        request,
        metadata || {},
        this.methodInfoQueryToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.NFTService/QueryToken',
    request,
    metadata || {},
    this.methodInfoQueryToken);
  }

  methodInfoDeposit = new grpcWeb.MethodDescriptor(
    '/pb.NFTService/Deposit',
    grpcWeb.MethodType.UNARY,
    nft_pb.NFTTokenQuery,
    nft_pb.NFTTokenList,
    (request: nft_pb.NFTTokenQuery) => {
      return request.serializeBinary();
    },
    nft_pb.NFTTokenList.deserializeBinary
  );

  deposit(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null): Promise<nft_pb.NFTTokenList>;

  deposit(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nft_pb.NFTTokenList) => void): grpcWeb.ClientReadableStream<nft_pb.NFTTokenList>;

  deposit(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nft_pb.NFTTokenList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.NFTService/Deposit',
        request,
        metadata || {},
        this.methodInfoDeposit,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.NFTService/Deposit',
    request,
    metadata || {},
    this.methodInfoDeposit);
  }

  methodInfoWidthdraw = new grpcWeb.MethodDescriptor(
    '/pb.NFTService/Widthdraw',
    grpcWeb.MethodType.UNARY,
    nft_pb.NFTTokenQuery,
    nft_pb.NFTTokenList,
    (request: nft_pb.NFTTokenQuery) => {
      return request.serializeBinary();
    },
    nft_pb.NFTTokenList.deserializeBinary
  );

  widthdraw(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null): Promise<nft_pb.NFTTokenList>;

  widthdraw(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nft_pb.NFTTokenList) => void): grpcWeb.ClientReadableStream<nft_pb.NFTTokenList>;

  widthdraw(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nft_pb.NFTTokenList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.NFTService/Widthdraw',
        request,
        metadata || {},
        this.methodInfoWidthdraw,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.NFTService/Widthdraw',
    request,
    metadata || {},
    this.methodInfoWidthdraw);
  }

  methodInfoBuy = new grpcWeb.MethodDescriptor(
    '/pb.NFTService/Buy',
    grpcWeb.MethodType.UNARY,
    nft_pb.NFTTokenQuery,
    nft_pb.NFTTokenList,
    (request: nft_pb.NFTTokenQuery) => {
      return request.serializeBinary();
    },
    nft_pb.NFTTokenList.deserializeBinary
  );

  buy(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null): Promise<nft_pb.NFTTokenList>;

  buy(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: nft_pb.NFTTokenList) => void): grpcWeb.ClientReadableStream<nft_pb.NFTTokenList>;

  buy(
    request: nft_pb.NFTTokenQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: nft_pb.NFTTokenList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.NFTService/Buy',
        request,
        metadata || {},
        this.methodInfoBuy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.NFTService/Buy',
    request,
    metadata || {},
    this.methodInfoBuy);
  }

}

