/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as category_pb from './category_pb';


export class CategoryServiceClient {
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
    '/pb.CategoryService/Create',
    grpcWeb.MethodType.UNARY,
    category_pb.Category,
    category_pb.Category,
    (request: category_pb.Category) => {
      return request.serializeBinary();
    },
    category_pb.Category.deserializeBinary
  );

  create(
    request: category_pb.Category,
    metadata: grpcWeb.Metadata | null): Promise<category_pb.Category>;

  create(
    request: category_pb.Category,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: category_pb.Category) => void): grpcWeb.ClientReadableStream<category_pb.Category>;

  create(
    request: category_pb.Category,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: category_pb.Category) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CategoryService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CategoryService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoRead = new grpcWeb.MethodDescriptor(
    '/pb.CategoryService/Read',
    grpcWeb.MethodType.UNARY,
    category_pb.CategoryId,
    category_pb.Category,
    (request: category_pb.CategoryId) => {
      return request.serializeBinary();
    },
    category_pb.Category.deserializeBinary
  );

  read(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null): Promise<category_pb.Category>;

  read(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: category_pb.Category) => void): grpcWeb.ClientReadableStream<category_pb.Category>;

  read(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: category_pb.Category) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CategoryService/Read',
        request,
        metadata || {},
        this.methodInfoRead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CategoryService/Read',
    request,
    metadata || {},
    this.methodInfoRead);
  }

  methodInfoUpdate = new grpcWeb.MethodDescriptor(
    '/pb.CategoryService/Update',
    grpcWeb.MethodType.UNARY,
    category_pb.Category,
    category_pb.Category,
    (request: category_pb.Category) => {
      return request.serializeBinary();
    },
    category_pb.Category.deserializeBinary
  );

  update(
    request: category_pb.Category,
    metadata: grpcWeb.Metadata | null): Promise<category_pb.Category>;

  update(
    request: category_pb.Category,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: category_pb.Category) => void): grpcWeb.ClientReadableStream<category_pb.Category>;

  update(
    request: category_pb.Category,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: category_pb.Category) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CategoryService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CategoryService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/pb.CategoryService/Delete',
    grpcWeb.MethodType.UNARY,
    category_pb.CategoryId,
    category_pb.CategoryId,
    (request: category_pb.CategoryId) => {
      return request.serializeBinary();
    },
    category_pb.CategoryId.deserializeBinary
  );

  delete(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null): Promise<category_pb.CategoryId>;

  delete(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: category_pb.CategoryId) => void): grpcWeb.ClientReadableStream<category_pb.CategoryId>;

  delete(
    request: category_pb.CategoryId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: category_pb.CategoryId) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CategoryService/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CategoryService/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

  methodInfoQuery = new grpcWeb.MethodDescriptor(
    '/pb.CategoryService/Query',
    grpcWeb.MethodType.UNARY,
    category_pb.CategoryQuery,
    category_pb.CategoryList,
    (request: category_pb.CategoryQuery) => {
      return request.serializeBinary();
    },
    category_pb.CategoryList.deserializeBinary
  );

  query(
    request: category_pb.CategoryQuery,
    metadata: grpcWeb.Metadata | null): Promise<category_pb.CategoryList>;

  query(
    request: category_pb.CategoryQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: category_pb.CategoryList) => void): grpcWeb.ClientReadableStream<category_pb.CategoryList>;

  query(
    request: category_pb.CategoryQuery,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: category_pb.CategoryList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.CategoryService/Query',
        request,
        metadata || {},
        this.methodInfoQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.CategoryService/Query',
    request,
    metadata || {},
    this.methodInfoQuery);
  }

}

