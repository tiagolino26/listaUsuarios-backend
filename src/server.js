import 'dotenv/config'
// Import the framework and instantiate it
import Fastify from "fastify";

import cors from "@fastify/cors";

// importação das rotas de usuarios
import usersRoutes from "./routes/users.routes.js";

const fastify = Fastify({
  logger: true,
});

// CORS para conectar com o frontend.
await fastify.register(cors, {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
});

// registrando rotas de usuários no servidor
await fastify.register(usersRoutes, {
  prefix: "/users",
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return "server is running at port 3000";
});

// let users = [];

// fastify.get("/users", async () => {
//     return users;
// })

// fastify.post("/criarUsuario", async (req, reply) => {
//     const { name, age, id } = req.body;
//     users.push(name);
//     return "O nome" + name + "foi adicionado ao fim da lista de usuários"
// })

// fastify.put("/editarUsuario", async (req, reply) => {
//     const { name, age, id } = req.body;
//     let antigoUser = users[id]
//     users.splice(id, 1, name);
//     return "O usuário " + antigoUser + " foi editado para " + name;
// })

// fastify.delete("/deletarUsuario", async (req, reply) => {
//     const { name, age, id } = req.body;
//     let antigoUser = users[id]
//     users.splice(id, 1);
//     return "Usuário " + antigoUser +  " foi deletado";
// })

// Run the server!
try {
  await fastify.listen({ port: process.env.PORT || 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
