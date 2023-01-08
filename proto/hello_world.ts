import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreeterServiceClient as _GreeterServiceClient, GreeterServiceDefinition as _GreeterServiceDefinition } from './GreeterService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  GreeterService: SubtypeConstructor<typeof grpc.Client, _GreeterServiceClient> & { service: _GreeterServiceDefinition }
  SayHelloRequest: MessageTypeDefinition
  SayHelloResponse: MessageTypeDefinition
}

