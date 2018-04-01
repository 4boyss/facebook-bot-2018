const express = require('express')
const router = express.Router()
const cost = require('../../model/costs')
const {resCostObj} = require('../../lib/success')

router.get('/', (req, res) => res.render('/costs'))

router.put('/', (req, res) => {
    const {id, payload} = req.normal

    return cost.updateById(id, payload)
        .then(result => resCostObj(res, result))
})

module.exports = router
