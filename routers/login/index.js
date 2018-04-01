const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('-=-=-=-= GET webhook -=-=-=-=')
    console.log(req.normal)
    // const redirUrl = `${req.normal.redirect_uri}&authorization_code=abc`
    // return res.redirect(redirUrl);
    const content = `<pre> ${JSON.stringify(req.normal, null, 2)}</pre>`
    return res.send(content)
})

module.exports = router
