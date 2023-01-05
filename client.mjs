import { loadSync } from "@grpc/proto-loader";
import { loadPackageDefinition, credentials } from "@grpc/grpc-js";

const PROTO_PATH = "./hello_world.proto";
const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const hello_proto = loadPackageDefinition(packageDefinition);

function startClient() {
  const PORT = 3000;
  const host = `localhost:${PORT}`;
  const service = new hello_proto.GreeterService(
    host,
    credentials.createInsecure()
  );
  service.SayHello({ name: "Lecteur" }, (error, result) => {
    if (error) {
      console.error("An error has occurred", error);
      return;
    }
    const { message } = result;
    console.log(message);
  });
}

startClient();
