const verifyLinkingToken = (account_linking_token) => {
    const PAGE_ACCESS_TOKEN = process.env.BOT_PAGE_TOKEN

    const url = `https://graph.facebook.com/v2.6/me?access_token=${PAGE_ACCESS_TOKEN}&fields=recipient&account_linking_token=${account_linking_token}`

    return fetch(url)
    .then(res => res.json())
}
module.exports = {verifyLinkingToken}
