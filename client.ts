import { loadSync } from "@grpc/proto-loader";
import { loadPackageDefinition, credentials } from "@grpc/grpc-js";
import { ProtoGrpcType } from "./proto/hello_world";

const PROTO_PATH = "./hello_world.proto";
const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const hello_proto = loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

function startClient() {
  const PORT = 3000;
  const host = `localhost:${PORT}`;
  const service = new hello_proto.GreeterService(
    host,
    credentials.createInsecure()
  );
  const deadLineForTimeout = new Date();
  deadLineForTimeout.setSeconds(deadLineForTimeout.getSeconds() + 5);
  service.waitForReady(deadLineForTimeout, (error) => {
    if (error) {
      console.error(error);
      return;
    }
    service.SayHello({ name: "Lecteur" }, (error, result) => {
      if (error) {
        console.error("An error has occurred", error);
        return;
      }
      if (!result) {
        console.error("Didn't receive a result and without error");
        return;
      }
      const { message } = result;
      console.log(message);
    });
  });
}

startClient();
