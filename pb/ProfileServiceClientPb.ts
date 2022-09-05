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


export class ProfileServiceClient {
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
    '/pb.ProfileService/Create',
    grpcWeb.MethodType.UNARY,
    profile_pb.Profile,
    profile_pb.Profile,
    (request: profile_pb.Profile) => {
      return request.serializeBinary();
    },
    profile_pb.Profile.deserializeBinary
  );

  create(
    request: profile_pb.Profile,
    metadata: grpcWeb.Metadata | null): Promise<profile_pb.Profile>;

  create(
    request: profile_pb.Profile,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_pb.Profile) => void): grpcWeb.ClientReadableStream<profile_pb.Profile>;

  create(
    request: profile_pb.Profile,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_pb.Profile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProfileService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProfileService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoRead = new grpcWeb.MethodDescriptor(
    '/pb.ProfileService/Read',
    grpcWeb.MethodType.UNARY,
    profile_pb.ProfileId,
    profile_pb.Profile,
    (request: profile_pb.ProfileId) => {
      return request.serializeBinary();
    },
    profile_pb.Profile.deserializeBinary
  );

  read(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null): Promise<profile_pb.Profile>;

  read(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_pb.Profile) => void): grpcWeb.ClientReadableStream<profile_pb.Profile>;

  read(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_pb.Profile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProfileService/Read',
        request,
        metadata || {},
        this.methodInfoRead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProfileService/Read',
    request,
    metadata || {},
    this.methodInfoRead);
  }

  methodInfoUpdate = new grpcWeb.MethodDescriptor(
    '/pb.ProfileService/Update',
    grpcWeb.MethodType.UNARY,
    profile_pb.Profile,
    profile_pb.Profile,
    (request: profile_pb.Profile) => {
      return request.serializeBinary();
    },
    profile_pb.Profile.deserializeBinary
  );

  update(
    request: profile_pb.Profile,
    metadata: grpcWeb.Metadata | null): Promise<profile_pb.Profile>;

  update(
    request: profile_pb.Profile,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_pb.Profile) => void): grpcWeb.ClientReadableStream<profile_pb.Profile>;

  update(
    request: profile_pb.Profile,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_pb.Profile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProfileService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProfileService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/pb.ProfileService/Delete',
    grpcWeb.MethodType.UNARY,
    profile_pb.ProfileId,
    profile_pb.ProfileId,
    (request: profile_pb.ProfileId) => {
      return request.serializeBinary();
    },
    profile_pb.ProfileId.deserializeBinary
  );

  delete(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null): Promise<profile_pb.ProfileId>;

  delete(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_pb.ProfileId) => void): grpcWeb.ClientReadableStream<profile_pb.ProfileId>;

  delete(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_pb.ProfileId) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProfileService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProfileService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

  methodInfoQuery = new grpcWeb.MethodDescriptor(
    '/pb.ProfileService/Query',
    grpcWeb.MethodType.UNARY,
    profile_pb.ProfileQuery,
    profile_pb.ProfileList,
    (request: profile_pb.ProfileQuery) => {
      return request.serializeBinary();
    },
    profile_pb.ProfileList.deserializeBinary
  );

  query(
    request: profile_pb.ProfileQuery,
    metadata: grpcWeb.Metadata | null): Promise<profile_pb.ProfileList>;

  query(
    request: profile_pb.ProfileQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_pb.ProfileList) => void): grpcWeb.ClientReadableStream<profile_pb.ProfileList>;

  query(
    request: profile_pb.ProfileQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_pb.ProfileList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProfileService/Query',
        request,
        metadata || {},
        this.methodInfoQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProfileService/Query',
    request,
    metadata || {},
    this.methodInfoQuery);
  }

}

