/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as profile_pb from './profile_pb';
import * as publish_pb from './publish_pb';
import * as stream_pb from './stream_pb';


export class PublishServiceClient {
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

  methodInfoReadInfo = new grpcWeb.MethodDescriptor(
    '/pb.PublishService/ReadInfo',
    grpcWeb.MethodType.UNARY,
    profile_pb.ProfileId,
    publish_pb.StreamInfo,
    (request: profile_pb.ProfileId) => {
      return request.serializeBinary();
    },
    publish_pb.StreamInfo.deserializeBinary
  );

  readInfo(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null): Promise<publish_pb.StreamInfo>;

  readInfo(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: publish_pb.StreamInfo) => void): grpcWeb.ClientReadableStream<publish_pb.StreamInfo>;

  readInfo(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: publish_pb.StreamInfo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PublishService/ReadInfo',
        request,
        metadata || {},
        this.methodInfoReadInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PublishService/ReadInfo',
    request,
    metadata || {},
    this.methodInfoReadInfo);
  }

  methodInfoUpdateInfo = new grpcWeb.MethodDescriptor(
    '/pb.PublishService/UpdateInfo',
    grpcWeb.MethodType.UNARY,
    publish_pb.StreamInfo,
    publish_pb.StreamInfo,
    (request: publish_pb.StreamInfo) => {
      return request.serializeBinary();
    },
    publish_pb.StreamInfo.deserializeBinary
  );

  updateInfo(
    request: publish_pb.StreamInfo,
    metadata: grpcWeb.Metadata | null): Promise<publish_pb.StreamInfo>;

  updateInfo(
    request: publish_pb.StreamInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: publish_pb.StreamInfo) => void): grpcWeb.ClientReadableStream<publish_pb.StreamInfo>;

  updateInfo(
    request: publish_pb.StreamInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: publish_pb.StreamInfo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PublishService/UpdateInfo',
        request,
        metadata || {},
        this.methodInfoUpdateInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PublishService/UpdateInfo',
    request,
    metadata || {},
    this.methodInfoUpdateInfo);
  }

  methodInfoReadKey = new grpcWeb.MethodDescriptor(
    '/pb.PublishService/ReadKey',
    grpcWeb.MethodType.UNARY,
    publish_pb.StreamKeyOptions,
    publish_pb.StreamKey,
    (request: publish_pb.StreamKeyOptions) => {
      return request.serializeBinary();
    },
    publish_pb.StreamKey.deserializeBinary
  );

  readKey(
    request: publish_pb.StreamKeyOptions,
    metadata: grpcWeb.Metadata | null): Promise<publish_pb.StreamKey>;

  readKey(
    request: publish_pb.StreamKeyOptions,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: publish_pb.StreamKey) => void): grpcWeb.ClientReadableStream<publish_pb.StreamKey>;

  readKey(
    request: publish_pb.StreamKeyOptions,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: publish_pb.StreamKey) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PublishService/ReadKey',
        request,
        metadata || {},
        this.methodInfoReadKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PublishService/ReadKey',
    request,
    metadata || {},
    this.methodInfoReadKey);
  }

  methodInfoObserve = new grpcWeb.MethodDescriptor(
    '/pb.PublishService/Observe',
    grpcWeb.MethodType.SERVER_STREAMING,
    profile_pb.ProfileId,
    publish_pb.PublishEvent,
    (request: profile_pb.ProfileId) => {
      return request.serializeBinary();
    },
    publish_pb.PublishEvent.deserializeBinary
  );

  observe(
    request: profile_pb.ProfileId,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/pb.PublishService/Observe',
      request,
      metadata || {},
      this.methodInfoObserve);
  }

  methodInfoOnStart = new grpcWeb.MethodDescriptor(
    '/pb.PublishService/OnStart',
    grpcWeb.MethodType.UNARY,
    publish_pb.StreamKey,
    stream_pb.Stream,
    (request: publish_pb.StreamKey) => {
      return request.serializeBinary();
    },
    stream_pb.Stream.deserializeBinary
  );

  onStart(
    request: publish_pb.StreamKey,
    metadata: grpcWeb.Metadata | null): Promise<stream_pb.Stream>;

  onStart(
    request: publish_pb.StreamKey,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: stream_pb.Stream) => void): grpcWeb.ClientReadableStream<stream_pb.Stream>;

  onStart(
    request: publish_pb.StreamKey,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: stream_pb.Stream) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PublishService/OnStart',
        request,
        metadata || {},
        this.methodInfoOnStart,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PublishService/OnStart',
    request,
    metadata || {},
    this.methodInfoOnStart);
  }

  methodInfoOnStop = new grpcWeb.MethodDescriptor(
    '/pb.PublishService/OnStop',
    grpcWeb.MethodType.UNARY,
    publish_pb.StreamKey,
    stream_pb.Stream,
    (request: publish_pb.StreamKey) => {
      return request.serializeBinary();
    },
    stream_pb.Stream.deserializeBinary
  );

  onStop(
    request: publish_pb.StreamKey,
    metadata: grpcWeb.Metadata | null): Promise<stream_pb.Stream>;

  onStop(
    request: publish_pb.StreamKey,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: stream_pb.Stream) => void): grpcWeb.ClientReadableStream<stream_pb.Stream>;

  onStop(
    request: publish_pb.StreamKey,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: stream_pb.Stream) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.PublishService/OnStop',
        request,
        metadata || {},
        this.methodInfoOnStop,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.PublishService/OnStop',
    request,
    metadata || {},
    this.methodInfoOnStop);
  }

}

