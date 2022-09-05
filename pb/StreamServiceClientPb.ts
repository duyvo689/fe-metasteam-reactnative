/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as stream_pb from './stream_pb';


export class StreamServiceClient {
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

  methodInfoCreate = new grpcWeb.MethodDescriptor(
    '/pb.StreamService/Create',
    grpcWeb.MethodType.UNARY,
    stream_pb.Stream,
    stream_pb.Stream,
    (request: stream_pb.Stream) => {
      return request.serializeBinary();
    },
    stream_pb.Stream.deserializeBinary
  );

  create(
    request: stream_pb.Stream,
    metadata: grpcWeb.Metadata | null): Promise<stream_pb.Stream>;

  create(
    request: stream_pb.Stream,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: stream_pb.Stream) => void): grpcWeb.ClientReadableStream<stream_pb.Stream>;

  create(
    request: stream_pb.Stream,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: stream_pb.Stream) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.StreamService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.StreamService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoRead = new grpcWeb.MethodDescriptor(
    '/pb.StreamService/Read',
    grpcWeb.MethodType.UNARY,
    stream_pb.StreamId,
    stream_pb.Stream,
    (request: stream_pb.StreamId) => {
      return request.serializeBinary();
    },
    stream_pb.Stream.deserializeBinary
  );

  read(
    request: stream_pb.StreamId,
    metadata: grpcWeb.Metadata | null): Promise<stream_pb.Stream>;

  read(
    request: stream_pb.StreamId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: stream_pb.Stream) => void): grpcWeb.ClientReadableStream<stream_pb.Stream>;

  read(
    request: stream_pb.StreamId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: stream_pb.Stream) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.StreamService/Read',
        request,
        metadata || {},
        this.methodInfoRead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.StreamService/Read',
    request,
    metadata || {},
    this.methodInfoRead);
  }

  methodInfoUpdate = new grpcWeb.MethodDescriptor(
    '/pb.StreamService/Update',
    grpcWeb.MethodType.UNARY,
    stream_pb.Stream,
    stream_pb.Stream,
    (request: stream_pb.Stream) => {
      return request.serializeBinary();
    },
    stream_pb.Stream.deserializeBinary
  );

  update(
    request: stream_pb.Stream,
    metadata: grpcWeb.Metadata | null): Promise<stream_pb.Stream>;

  update(
    request: stream_pb.Stream,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: stream_pb.Stream) => void): grpcWeb.ClientReadableStream<stream_pb.Stream>;

  update(
    request: stream_pb.Stream,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: stream_pb.Stream) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.StreamService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.StreamService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/pb.StreamService/Delete',
    grpcWeb.MethodType.UNARY,
    stream_pb.StreamId,
    stream_pb.StreamId,
    (request: stream_pb.StreamId) => {
      return request.serializeBinary();
    },
    stream_pb.StreamId.deserializeBinary
  );

  delete(
    request: stream_pb.StreamId,
    metadata: grpcWeb.Metadata | null): Promise<stream_pb.StreamId>;

  delete(
    request: stream_pb.StreamId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: stream_pb.StreamId) => void): grpcWeb.ClientReadableStream<stream_pb.StreamId>;

  delete(
    request: stream_pb.StreamId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: stream_pb.StreamId) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.StreamService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.StreamService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

  methodInfoQuery = new grpcWeb.MethodDescriptor(
    '/pb.StreamService/Query',
    grpcWeb.MethodType.UNARY,
    stream_pb.StreamQuery,
    stream_pb.StreamList,
    (request: stream_pb.StreamQuery) => {
      return request.serializeBinary();
    },
    stream_pb.StreamList.deserializeBinary
  );

  query(
    request: stream_pb.StreamQuery,
    metadata: grpcWeb.Metadata | null): Promise<stream_pb.StreamList>;

  query(
    request: stream_pb.StreamQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: stream_pb.StreamList) => void): grpcWeb.ClientReadableStream<stream_pb.StreamList>;

  query(
    request: stream_pb.StreamQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: stream_pb.StreamList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.StreamService/Query',
        request,
        metadata || {},
        this.methodInfoQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.StreamService/Query',
    request,
    metadata || {},
    this.methodInfoQuery);
  }

}

