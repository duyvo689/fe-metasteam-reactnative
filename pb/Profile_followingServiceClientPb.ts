/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as profile_following_pb from './profile_following_pb';
import * as profile_pb from './profile_pb';


export class ProfileFollowingServiceClient {
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
    '/pb.ProfileFollowingService/Follow',
    grpcWeb.MethodType.UNARY,
    profile_pb.ProfileId,
    profile_following_pb.ProfileFollowing,
    (request: profile_pb.ProfileId) => {
      return request.serializeBinary();
    },
    profile_following_pb.ProfileFollowing.deserializeBinary
  );

  follow(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null): Promise<profile_following_pb.ProfileFollowing>;

  follow(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_following_pb.ProfileFollowing) => void): grpcWeb.ClientReadableStream<profile_following_pb.ProfileFollowing>;

  follow(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_following_pb.ProfileFollowing) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProfileFollowingService/Follow',
        request,
        metadata || {},
        this.methodInfoFollow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProfileFollowingService/Follow',
    request,
    metadata || {},
    this.methodInfoFollow);
  }

  methodInfoUnfollow = new grpcWeb.MethodDescriptor(
    '/pb.ProfileFollowingService/Unfollow',
    grpcWeb.MethodType.UNARY,
    profile_pb.ProfileId,
    profile_following_pb.ProfileFollowing,
    (request: profile_pb.ProfileId) => {
      return request.serializeBinary();
    },
    profile_following_pb.ProfileFollowing.deserializeBinary
  );

  unfollow(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null): Promise<profile_following_pb.ProfileFollowing>;

  unfollow(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_following_pb.ProfileFollowing) => void): grpcWeb.ClientReadableStream<profile_following_pb.ProfileFollowing>;

  unfollow(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_following_pb.ProfileFollowing) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProfileFollowingService/Unfollow',
        request,
        metadata || {},
        this.methodInfoUnfollow,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProfileFollowingService/Unfollow',
    request,
    metadata || {},
    this.methodInfoUnfollow);
  }

  methodInfoCheck = new grpcWeb.MethodDescriptor(
    '/pb.ProfileFollowingService/Check',
    grpcWeb.MethodType.UNARY,
    profile_pb.ProfileId,
    profile_following_pb.ProfileFollowing,
    (request: profile_pb.ProfileId) => {
      return request.serializeBinary();
    },
    profile_following_pb.ProfileFollowing.deserializeBinary
  );

  check(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null): Promise<profile_following_pb.ProfileFollowing>;

  check(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_following_pb.ProfileFollowing) => void): grpcWeb.ClientReadableStream<profile_following_pb.ProfileFollowing>;

  check(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_following_pb.ProfileFollowing) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProfileFollowingService/Check',
        request,
        metadata || {},
        this.methodInfoCheck,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProfileFollowingService/Check',
    request,
    metadata || {},
    this.methodInfoCheck);
  }

  methodInfoCount = new grpcWeb.MethodDescriptor(
    '/pb.ProfileFollowingService/Count',
    grpcWeb.MethodType.UNARY,
    profile_pb.ProfileId,
    profile_following_pb.ProfileFollowingCount,
    (request: profile_pb.ProfileId) => {
      return request.serializeBinary();
    },
    profile_following_pb.ProfileFollowingCount.deserializeBinary
  );

  count(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null): Promise<profile_following_pb.ProfileFollowingCount>;

  count(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: profile_following_pb.ProfileFollowingCount) => void): grpcWeb.ClientReadableStream<profile_following_pb.ProfileFollowingCount>;

  count(
    request: profile_pb.ProfileId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: profile_following_pb.ProfileFollowingCount) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ProfileFollowingService/Count',
        request,
        metadata || {},
        this.methodInfoCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ProfileFollowingService/Count',
    request,
    metadata || {},
    this.methodInfoCount);
  }

}

