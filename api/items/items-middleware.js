const Items = require('./items-model')

const checkId = async (req, res, next) => {
    const { id } = req.params
    const item = await Potlucks.getById(id)
    !item ? res.status(404).json({message: `Item with ID of ${id} not found`}) : next()
}

const checkPayload = async (req, res, next) => {
    const {
        item_name,
        item_description,
        item_price,
        item_country,
    } = req.body

    if (
    !item_name||
    !item_description||
    !item_price||
    !item_country) {
        res.status(401).json({ message: 'Please enter all required fields to add a new item' })
    }
    else {
        next()
    }
}

module.exports = {checkId, checkPayload}