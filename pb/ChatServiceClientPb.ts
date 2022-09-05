/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as chat_pb from './chat_pb';
import * as profile_pb from './profile_pb';


export class ChatServiceClient {
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

  methodInfoObserveMembers = new grpcWeb.MethodDescriptor(
    '/pb.ChatService/ObserveMembers',
    grpcWeb.MethodType.SERVER_STREAMING,
    chat_pb.ChatFilter,
    profile_pb.ProfileList,
    (request: chat_pb.ChatFilter) => {
      return request.serializeBinary();
    },
    profile_pb.ProfileList.deserializeBinary
  );

  observeMembers(
    request: chat_pb.ChatFilter,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/pb.ChatService/ObserveMembers',
      request,
      metadata || {},
      this.methodInfoObserveMembers);
  }

  methodInfoObserveMessages = new grpcWeb.MethodDescriptor(
    '/pb.ChatService/ObserveMessages',
    grpcWeb.MethodType.SERVER_STREAMING,
    chat_pb.ChatFilter,
    chat_pb.ChatMessage,
    (request: chat_pb.ChatFilter) => {
      return request.serializeBinary();
    },
    chat_pb.ChatMessage.deserializeBinary
  );

  observeMessages(
    request: chat_pb.ChatFilter,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/pb.ChatService/ObserveMessages',
      request,
      metadata || {},
      this.methodInfoObserveMessages);
  }

  methodInfoSendMessages = new grpcWeb.MethodDescriptor(
    '/pb.ChatService/SendMessages',
    grpcWeb.MethodType.UNARY,
    chat_pb.ChatMessage,
    chat_pb.ChatResponse,
    (request: chat_pb.ChatMessage) => {
      return request.serializeBinary();
    },
    chat_pb.ChatResponse.deserializeBinary
  );

  sendMessages(
    request: chat_pb.ChatMessage,
    metadata: grpcWeb.Metadata | null): Promise<chat_pb.ChatResponse>;

  sendMessages(
    request: chat_pb.ChatMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.ChatResponse) => void): grpcWeb.ClientReadableStream<chat_pb.ChatResponse>;

  sendMessages(
    request: chat_pb.ChatMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chat_pb.ChatResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ChatService/SendMessages',
        request,
        metadata || {},
        this.methodInfoSendMessages,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ChatService/SendMessages',
    request,
    metadata || {},
    this.methodInfoSendMessages);
  }

}

