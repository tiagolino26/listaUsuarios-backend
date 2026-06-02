import usersRepository from "../repository/users.repository.js";

import bcrypt from "bcrypt";

const usersController = {
  async get() {
    return usersRepository.get();
  },

  async post(req, reply) {
    const { name, idade, email, password } = req.body;

    // criptografia
    let saltOrRounds = 10;
    let hash = await bcrypt.hash(password, saltOrRounds);
    await usersRepository.post(name, idade, email, hash);
    return `O usuario ${name} foi criado com sucesso!`;
  },

  async put(req, reply) {
    const { id } = req.params;
    const { name, idade, email, password } = req.body;

    // criptografia
    await usersRepository.put(name, idade, email, id);
    return `O usuario ${name} foi atualizado com sucesso`;
  },

  async delete(req, reply) {
    const { id } = req.params;
    return usersRepository.delete(id);
  },
};

export default usersController;
