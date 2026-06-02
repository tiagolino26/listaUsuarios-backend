import "dotenv/config";
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

// Run the server!
try {
  await fastify.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
