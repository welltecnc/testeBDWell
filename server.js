// importando o modulo json-server
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Certifique-se de usar o middleware(funções que podem ser usadas para tratar os inputs e outputs de rotas antes ou depois de elas serem processadas) padrão
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Adiciona o use anntes do use router
server.use(
 // Personalizando a rotas do vercel.json
 jsonServer.rewriter({
  "/*": "/$1",
 })
);
// adicionando o use router
server.use(router);
// executando na porta 3000
server.listen(3000, () => {
 console.log("Servidor rodando");
});

// exporta o modulo para api server.js
module.exports = server;