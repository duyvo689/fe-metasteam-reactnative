/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as search_pb from './search_pb';


export class SearchServiceClient {
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

  methodInfoSearch = new grpcWeb.MethodDescriptor(
    '/pb.SearchService/Search',
    grpcWeb.MethodType.UNARY,
    search_pb.SearchRequest,
    search_pb.SearchResponseList,
    (request: search_pb.SearchRequest) => {
      return request.serializeBinary();
    },
    search_pb.SearchResponseList.deserializeBinary
  );

  search(
    request: search_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null): Promise<search_pb.SearchResponseList>;

  search(
    request: search_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: search_pb.SearchResponseList) => void): grpcWeb.ClientReadableStream<search_pb.SearchResponseList>;

  search(
    request: search_pb.SearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: search_pb.SearchResponseList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.SearchService/Search',
        request,
        metadata || {},
        this.methodInfoSearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.SearchService/Search',
    request,
    metadata || {},
    this.methodInfoSearch);
  }

}

