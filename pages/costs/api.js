const {errorObj} = require('../../lib/error')

const putCostApi = (payload) => {
    console.log('-=-=-=-=-= payload -=-=-=-=-=-=')
    console.log('payload: ', payload)
  try {
    return fetch('/costs', {
      body: JSON.stringify(payload), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // *manual, follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
      .then(response => response.json())
  } catch(err) {
    return errorObj(err)
  }
}

module.exports = {putCostApi}
