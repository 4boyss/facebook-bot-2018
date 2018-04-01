const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('-=-=-=-= GET webhook -=-=-=-=')
    console.log(req.normal)
    // const redirUrl = `${req.normal.redirect_uri}&authorization_code=abc`
    // return res.redirect(redirUrl);

    const PAGE_ACCESS_TOKEN = process.env.BOT_PAGE_TOKEN
    const {account_linking_token} = req.normal

    const url = `https://graph.facebook.com/v2.6/me?access_token=${PAGE_ACCESS_TOKEN}&fields=recipient&account_linking_token=${account_linking_token}`

    return fetch(url)
    .then(res => res.json())
    .then(result => {
        const content = `
        <pre> ${JSON.stringify(req.normal, null, 2)}</pre>
        <pre> ${JSON.stringify(result, null, 2)}</pre>
        `
        return res.send(content)
    })

})

module.exports = router
