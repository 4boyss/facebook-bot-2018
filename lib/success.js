const resCostObj = (res = {}, data = {}) => {
    const result = (data && data.id) ? {id: data.id} : {}

    return res.json(result)
}

module.exports = {resCostObj}
