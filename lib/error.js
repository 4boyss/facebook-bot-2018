const errorObj = (data) => {
    if(typeof data === 'string') return new Error(data)

    if(data && data.message) return new Error(data.message)

    return new Error('unknown error')
}

module.exports = {errorObj}
