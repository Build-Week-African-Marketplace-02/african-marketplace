const db = require('../data/db-config')

const getAll = () => {
    return db('items')
}

const getById = (id) => {
    return db('items').where('item_id', id).first()
}

const addItem = (item) => {
    return db('items').insert(item,
        ['item_name',
        'item_description',
        'item_price',
        'item_country',
        'item_seller'
    ])
}

module.exports = {
    getAll,
    getById,
    addItem
}