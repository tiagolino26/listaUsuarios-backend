import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

const usersRepository = {
  async get() {
    return await sql`select * FROM users`;
  },

  async post(name, idade, email, password) {
    return await sql`INSERT INTO users (name, idade, email, password)
            VALUES (${name}, ${idade}, ${email}, ${password})
            `;
  },

  async put(name, idade, email, id) {
    return await sql`UPDATE users SET name = ${name},
                                            idade = ${idade},
                                            email = ${email},
                                            WHERE id = ${id};`;
  },

  async delete(id) {
    return await sql`
            DELETE FROM users
            WHERE id = ${id}`;
  },
};

export default usersRepository;
