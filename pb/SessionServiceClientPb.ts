/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as session_pb from './session_pb';


export class SessionServiceClient {
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
    '/pb.SessionService/Query',
    grpcWeb.MethodType.UNARY,
    session_pb.SessionQuery,
    session_pb.Session,
    (request: session_pb.SessionQuery) => {
      return request.serializeBinary();
    },
    session_pb.Session.deserializeBinary
  );

  query(
    request: session_pb.SessionQuery,
    metadata: grpcWeb.Metadata | null): Promise<session_pb.Session>;

  query(
    request: session_pb.SessionQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: session_pb.Session) => void): grpcWeb.ClientReadableStream<session_pb.Session>;

  query(
    request: session_pb.SessionQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: session_pb.Session) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.SessionService/Query',
        request,
        metadata || {},
        this.methodInfoQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.SessionService/Query',
    request,
    metadata || {},
    this.methodInfoQuery);
  }

}

