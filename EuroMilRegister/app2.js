const grpc = require("grpc");
const proto = grpc.load("EuroMilRegister.proto");
const package = grpc.loadPackageDefinition(proto);
const server = new grpc.Server();

const dbApostas = [{ id: 1, checkid: "1234567898767656" }];

server.addService(package.euromil.Euromil, {
  RegisterEuroMil: (call, callback) => {
    let aposta = call.request;
    if (aposta.checkid) dbApostas.push(aposta);
    callback(null, "Cheque já utilizado");
  },
});

server.bind("http://localhost:4000", grpc.ServerCredentials.createInsecure());
console.log("Servidor: http://localhost:4000/");

server.start();
