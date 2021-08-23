const router = require('express').Router()
const Items = require('./items-model')
const {checkId, checkPayload} = require('./items-middleware')

router.get('/', (req, res, next) => {
    Items.getAll()
        .then(items => {
            res.json(items);
        })
        .catch(next)
})

router.get('/:id', checkId, (req, res, next) => {
    const { id } = req.params
    Items.getById(id)
    .then(item => {
        res.json(item)
    })
    .catch(next)
})

router.post('/', checkPayload, (req, res, next) => {
    Items.addItem(req.body)
         .then(newClass => {
             res.status(201).json(newClass)
        })
        .catch(next)
})

module.exports = router