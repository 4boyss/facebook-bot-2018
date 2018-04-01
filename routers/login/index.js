const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('-=-=-=-= GET webhook -=-=-=-=')
    console.log(req.normal)
    return res.redirect(req.normal.redirect_uri);
    // const content = `<pre> ${JSON.stringify(req.normal, null, 2)}</pre>`
    // return res.send(content)
})

module.exports = router
