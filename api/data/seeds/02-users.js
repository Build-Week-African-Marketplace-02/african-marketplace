exports.seed = function (knex, Promise) {
  return knex("users").insert([
    {
      username: "user1",
      password: "1234",
    },
    {
      username: "User2",
      password: "12345",
    },
    {
      username: "user3",
      password: "1234",
    },
  ]);
};
