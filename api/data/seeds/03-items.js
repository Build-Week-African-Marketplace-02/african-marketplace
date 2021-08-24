exports.seed = function (knex, Promise) {
  return knex("items").insert([
    {
      user_id: "1",
      item_name: "Eggs",
      item_description: "Animal Products",
      item_price: 1.0,
      item_country: "KEN",
      item_seller: "Adam",
    },
    {
      user_id: "2",
      item_name: "Agwedde Beans",
      item_description: "Beans",
      item_price: 1.0,
      item_country: "KEN",
      item_seller: "Ben",
    },
    {
      user_id: "3",
      item_name: "Dry Maize",
      item_description: "Cereals - Maize",
      item_price: 1.0,
      item_country: "SSD",
      item_seller: "Christine",
    },
    {
      user_id: "4",
      item_name: "Avocado",
      item_description: "Fruits",
      item_price: 1.0,
      item_country: "UGA",
      item_seller: "Juliane",
    },
    {
      user_id: "5",
      item_name: "Cassava Chips",
      item_description: "Roots & Tubers",
      item_price: 1.0,
      item_country: "DRC",
      item_seller: "Kennedy",
    },
    {
      user_id: "6",
      item_name: "Brinjal/Eggplant",
      item_description: "Vegetables",
      item_price: 1.0,
      item_country: "KEN",
      item_seller: "Kristian",
    },
  ]);
};
