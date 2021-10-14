/**
 * @fileoverview gRPC-Web generated client stub for chatpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as chat$app_pb from './chat-app_pb';


export class ChatAppServiceClient {
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

  methodInfoGetMessages = new grpcWeb.AbstractClientBase.MethodInfo(
    chat$app_pb.GetMessagesResponse,
    (request: chat$app_pb.GetMessagesRequest) => {
      return request.serializeBinary();
    },
    chat$app_pb.GetMessagesResponse.deserializeBinary
  );

  getMessages(
    request: chat$app_pb.GetMessagesRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/chatpb.ChatAppService/GetMessages',
      request,
      metadata || {},
      this.methodInfoGetMessages);
  }

  methodInfoCreateMessage = new grpcWeb.AbstractClientBase.MethodInfo(
    chat$app_pb.CreateMessageResponse,
    (request: chat$app_pb.CreateMessageRequest) => {
      return request.serializeBinary();
    },
    chat$app_pb.CreateMessageResponse.deserializeBinary
  );

  createMessage(
    request: chat$app_pb.CreateMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<chat$app_pb.CreateMessageResponse>;

  createMessage(
    request: chat$app_pb.CreateMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: chat$app_pb.CreateMessageResponse) => void): grpcWeb.ClientReadableStream<chat$app_pb.CreateMessageResponse>;

  createMessage(
    request: chat$app_pb.CreateMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: chat$app_pb.CreateMessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatpb.ChatAppService/CreateMessage',
        request,
        metadata || {},
        this.methodInfoCreateMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatpb.ChatAppService/CreateMessage',
    request,
    metadata || {},
    this.methodInfoCreateMessage);
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    chat$app_pb.LoginResponse,
    (request: chat$app_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    chat$app_pb.LoginResponse.deserializeBinary
  );

  login(
    request: chat$app_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<chat$app_pb.LoginResponse>;

  login(
    request: chat$app_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: chat$app_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<chat$app_pb.LoginResponse>;

  login(
    request: chat$app_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: chat$app_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatpb.ChatAppService/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatpb.ChatAppService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoHelloMessage = new grpcWeb.AbstractClientBase.MethodInfo(
    chat$app_pb.HelloResponse,
    (request: chat$app_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    chat$app_pb.HelloResponse.deserializeBinary
  );

  helloMessage(
    request: chat$app_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<chat$app_pb.HelloResponse>;

  helloMessage(
    request: chat$app_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: chat$app_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<chat$app_pb.HelloResponse>;

  helloMessage(
    request: chat$app_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: chat$app_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatpb.ChatAppService/HelloMessage',
        request,
        metadata || {},
        this.methodInfoHelloMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatpb.ChatAppService/HelloMessage',
    request,
    metadata || {},
    this.methodInfoHelloMessage);
  }

}

