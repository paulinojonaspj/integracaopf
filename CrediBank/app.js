const express = require("express");
const needle = require("needle");
const app = express();
const urlDB = "http://localhost:3004";

async function getSaldo(conta, valor) {
  return needle("get", `${urlDB}/contas/${conta}`, null, {
    json: true,
  })
    .then((res) => {
      if (res.body.saldo < valor || res.body.saldo == 0) {
        console.log("Saldo inferior para gerar o cheque");
        return false;
      } else {
        data = {
          saldo: res.body.saldo - valor,
        };
        needle("put", `${urlDB}/contas/${conta}`, data, {
          json: true,
        });
        return true;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

async function gerarCheque(conta, valor) {
  if (valor <= 0) {
    return "Valor inválido";
  }
  const saldo = await getSaldo(conta, valor);
  if (saldo == true) {
    min = Math.ceil(1000000000000000);
    max = Math.floor(9999999999999999);
    check = Math.floor(Math.random() * (max - min) + min);

    datahora = new Date();
    data = {
      date: datahora,
      checkID: check,
      estado: "ativo",
      contaId: conta,
    };
    needle("post", `${urlDB}/cheques`, data, {
      json: true,
    });

    return { date: datahora, checkID: check };
  }
  return "Saldo inferior para gerar o cheque";
}

app.get("/check/:credit_account_id/amount/:ammount", async (req, res) => {
  const conta = req.params.credit_account_id;
  const valor = req.params.ammount;
  const a = await gerarCheque(conta, valor);
  res.send(a);
  res.end();
});


app.get("/", (req, res) => {
  res.send("Tarefa 5 - Paulino jonas | UTAD");
});

console.log("Server running at http://127.0.0.1:3000");

app.listen(3000);
