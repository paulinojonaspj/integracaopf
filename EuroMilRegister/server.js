const grpc = require("@grpc/grpc-js");
const PROTO_PATH = "EuroMilRegister.proto";
var protoLoader = require("@grpc/proto-loader");
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const pkg = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

let db = { dbApostas: [] };
function vExisteAposta(checkid) {
  for (i = 0; i < db.dbApostas.length; i++) {
    if (db.dbApostas[i].checkid == checkid) {
      return true;
    }
  }
  return false;
}
server.addService(pkg.euromil.Euromil.service, {
  RegisterEuroMil: (call, callback) => {
    let aposta = call.request;
    let data = { key: aposta.key, checkid: aposta.checkid };
    if (vExisteAposta(aposta.checkid)) {
      callback(null, {
        message: "Já existe uma aposta feita com esse cheque.",
      });
    } else {
      db.dbApostas.push(data);
      callback(null, { message: "Aposta feita com sucesso" });
      console.log(db);
    }
  },
});

server.bindAsync(
  "127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server running at http://127.0.0.1:50051");
    server.start();
  }
);
