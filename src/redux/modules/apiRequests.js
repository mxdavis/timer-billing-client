import fetch from 'isomorphic-fetch'

// TODO, need to know who the current user is and adjust url accordingly
// if no user, then redirect to signin
const api_url = 'http://localhost:3000/api/v1/users/1/'

export default {

  get(url){
    return fetch(api_url + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
  },

  post(url, body) {
  return fetch(api_url + url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }).then(response => (response.json()))
  }

}