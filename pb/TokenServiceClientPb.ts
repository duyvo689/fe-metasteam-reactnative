/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as token_pb from './token_pb';


export class TokenServiceClient {
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

  methodInfoQuery = new grpcWeb.MethodDescriptor(
    '/pb.TokenService/Query',
    grpcWeb.MethodType.UNARY,
    token_pb.TokenQuery,
    token_pb.Token,
    (request: token_pb.TokenQuery) => {
      return request.serializeBinary();
    },
    token_pb.Token.deserializeBinary
  );

  query(
    request: token_pb.TokenQuery,
    metadata: grpcWeb.Metadata | null): Promise<token_pb.Token>;

  query(
    request: token_pb.TokenQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: token_pb.Token) => void): grpcWeb.ClientReadableStream<token_pb.Token>;

  query(
    request: token_pb.TokenQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: token_pb.Token) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.TokenService/Query',
        request,
        metadata || {},
        this.methodInfoQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.TokenService/Query',
    request,
    metadata || {},
    this.methodInfoQuery);
  }

  methodInfoDonate = new grpcWeb.MethodDescriptor(
    '/pb.TokenService/Donate',
    grpcWeb.MethodType.UNARY,
    token_pb.Donation,
    token_pb.DonationData,
    (request: token_pb.Donation) => {
      return request.serializeBinary();
    },
    token_pb.DonationData.deserializeBinary
  );

  donate(
    request: token_pb.Donation,
    metadata: grpcWeb.Metadata | null): Promise<token_pb.DonationData>;

  donate(
    request: token_pb.Donation,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: token_pb.DonationData) => void): grpcWeb.ClientReadableStream<token_pb.DonationData>;

  donate(
    request: token_pb.Donation,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: token_pb.DonationData) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.TokenService/Donate',
        request,
        metadata || {},
        this.methodInfoDonate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.TokenService/Donate',
    request,
    metadata || {},
    this.methodInfoDonate);
  }

}

