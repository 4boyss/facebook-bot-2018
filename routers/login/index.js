const express = require('express')
const router = express.Router()
const html = require('./genHtml')
const {verifyLinkingToken} = require('./api')

router.get('/', (req, res) => {
    console.log('-=-=-=-= GET webhook -=-=-=-=')
    console.log(req.normal)

    return res.send(html(req.normal))
})

router.get('/fb-auth', (req, res) => {
    const {account_linking_token} = req.normal

    return verifyLinkingToken(account_linking_token)
        .then(res => {
            const content = `
            <pre> ${JSON.stringify(req.normal, null, 2)}</pre>
            <pre> ${JSON.stringify(res, null, 2)}</pre>
            `
            return res.send(content)
        })

    // const redirUrl = `${req.normal.redirect_uri}&authorization_code=abc`
    // return res.redirect(redirUrl);

})

module.exports = router
