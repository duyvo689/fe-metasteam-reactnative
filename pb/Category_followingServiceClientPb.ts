/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as category_following_pb from './category_following_pb';
import * as category_pb from './category_pb';


export class CategoryFollowingServiceClient {
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

  methodInfoFollow = new grpcWeb.MethodDescriptor(
    '/pb.CategoryFollowingService/Follow',
    grpcWeb.MethodType.UNARY,
    category_pb.CategoryId,
    category_following_pb.CategoryFollowing,
    (request: category_pb.CategoryId) => {
      return request.serializeBinary();
    },
    category_following_pb.CategoryFollowing.deserializeBinary
  );

  follow(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null): Promise<category_following_pb.CategoryFollowing>;

  follow(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: category_following_pb.CategoryFollowing) => void): grpcWeb.ClientReadableStream<category_following_pb.CategoryFollowing>;

  follow(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: category_following_pb.CategoryFollowing) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CategoryFollowingService/Follow',
        request,
        metadata || {},
        this.methodInfoFollow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CategoryFollowingService/Follow',
    request,
    metadata || {},
    this.methodInfoFollow);
  }

  methodInfoUnfollow = new grpcWeb.MethodDescriptor(
    '/pb.CategoryFollowingService/Unfollow',
    grpcWeb.MethodType.UNARY,
    category_pb.CategoryId,
    category_following_pb.CategoryFollowing,
    (request: category_pb.CategoryId) => {
      return request.serializeBinary();
    },
    category_following_pb.CategoryFollowing.deserializeBinary
  );

  unfollow(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null): Promise<category_following_pb.CategoryFollowing>;

  unfollow(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: category_following_pb.CategoryFollowing) => void): grpcWeb.ClientReadableStream<category_following_pb.CategoryFollowing>;

  unfollow(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: category_following_pb.CategoryFollowing) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CategoryFollowingService/Unfollow',
        request,
        metadata || {},
        this.methodInfoUnfollow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CategoryFollowingService/Unfollow',
    request,
    metadata || {},
    this.methodInfoUnfollow);
  }

  methodInfoCheck = new grpcWeb.MethodDescriptor(
    '/pb.CategoryFollowingService/Check',
    grpcWeb.MethodType.UNARY,
    category_pb.CategoryId,
    category_following_pb.CategoryFollowing,
    (request: category_pb.CategoryId) => {
      return request.serializeBinary();
    },
    category_following_pb.CategoryFollowing.deserializeBinary
  );

  check(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null): Promise<category_following_pb.CategoryFollowing>;

  check(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: category_following_pb.CategoryFollowing) => void): grpcWeb.ClientReadableStream<category_following_pb.CategoryFollowing>;

  check(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: category_following_pb.CategoryFollowing) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CategoryFollowingService/Check',
        request,
        metadata || {},
        this.methodInfoCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CategoryFollowingService/Check',
    request,
    metadata || {},
    this.methodInfoCheck);
  }

  methodInfoCount = new grpcWeb.MethodDescriptor(
    '/pb.CategoryFollowingService/Count',
    grpcWeb.MethodType.UNARY,
    category_pb.CategoryId,
    category_following_pb.CategoryFollowingCount,
    (request: category_pb.CategoryId) => {
      return request.serializeBinary();
    },
    category_following_pb.CategoryFollowingCount.deserializeBinary
  );

  count(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null): Promise<category_following_pb.CategoryFollowingCount>;

  count(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: category_following_pb.CategoryFollowingCount) => void): grpcWeb.ClientReadableStream<category_following_pb.CategoryFollowingCount>;

  count(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: category_following_pb.CategoryFollowingCount) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CategoryFollowingService/Count',
        request,
        metadata || {},
        this.methodInfoCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CategoryFollowingService/Count',
    request,
    metadata || {},
    this.methodInfoCount);
  }

}

