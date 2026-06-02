import usersController from "../controller/users.controller.js";

export default async function usersRoutes(fastify) {
  (fastify.get("/getAllUsers", async () => {
    return usersController.get();
  }),
    fastify.post("/createUsers", async (req, reply) => {
      return usersController.post(req, reply);
    }),
    fastify.put("/updateUsers/:id", async (req, reply) => {
      return usersController.put(req, reply);
    }),
    fastify.delete("/deleteUsers/:id", async (req, reply) => {
      return usersController.delete(req, reply);
    }));
}
