exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.boolean('owner').notNullable()
      users.timestamps(false, true)
    })
    .createTable('items', (items) =>{
      items.increments('items_id')
      items.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
      items.string('item_name', 30).notNullable()
      items.string('item_description', 50).notNullable()
      items.float('item_price').notNullable()
      items.string('item_country').notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('items')
}