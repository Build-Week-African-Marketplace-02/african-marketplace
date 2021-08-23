exports.seed = function (knex, Promise) {
  return knex("users").insert([
    {
      username: "benr",
      password: "secret3",
    },
  ]);
};
