/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as access_pb from './access_pb';
import * as profile_pb from './profile_pb';


export class AccessServiceClient {
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

  methodInfoGrant = new grpcWeb.MethodDescriptor(
    '/pb.AccessService/Grant',
    grpcWeb.MethodType.UNARY,
    access_pb.Policy,
    access_pb.PolicyResponse,
    (request: access_pb.Policy) => {
      return request.serializeBinary();
    },
    access_pb.PolicyResponse.deserializeBinary
  );

  grant(
    request: access_pb.Policy,
    metadata: grpcWeb.Metadata | null): Promise<access_pb.PolicyResponse>;

  grant(
    request: access_pb.Policy,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: access_pb.PolicyResponse) => void): grpcWeb.ClientReadableStream<access_pb.PolicyResponse>;

  grant(
    request: access_pb.Policy,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: access_pb.PolicyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.AccessService/Grant',
        request,
        metadata || {},
        this.methodInfoGrant,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.AccessService/Grant',
    request,
    metadata || {},
    this.methodInfoGrant);
  }

  methodInfoGet = new grpcWeb.MethodDescriptor(
    '/pb.AccessService/Get',
    grpcWeb.MethodType.UNARY,
    profile_pb.ProfileId,
    access_pb.PolicyResponse,
    (request: profile_pb.ProfileId) => {
      return request.serializeBinary();
    },
    access_pb.PolicyResponse.deserializeBinary
  );

  get(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null): Promise<access_pb.PolicyResponse>;

  get(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: access_pb.PolicyResponse) => void): grpcWeb.ClientReadableStream<access_pb.PolicyResponse>;

  get(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: access_pb.PolicyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.AccessService/Get',
        request,
        metadata || {},
        this.methodInfoGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.AccessService/Get',
    request,
    metadata || {},
    this.methodInfoGet);
  }

}

