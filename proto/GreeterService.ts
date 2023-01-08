// Original file: hello_world.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SayHelloRequest as _SayHelloRequest, SayHelloRequest__Output as _SayHelloRequest__Output } from './SayHelloRequest';
import type { SayHelloResponse as _SayHelloResponse, SayHelloResponse__Output as _SayHelloResponse__Output } from './SayHelloResponse';

export interface GreeterServiceClient extends grpc.Client {
  SayHello(argument: _SayHelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _SayHelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _SayHelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _SayHelloRequest, callback: grpc.requestCallback<_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _SayHelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _SayHelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _SayHelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _SayHelloRequest, callback: grpc.requestCallback<_SayHelloResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface GreeterServiceHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_SayHelloRequest__Output, _SayHelloResponse>;
  
}

export interface GreeterServiceDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_SayHelloRequest, _SayHelloResponse, _SayHelloRequest__Output, _SayHelloResponse__Output>
}
