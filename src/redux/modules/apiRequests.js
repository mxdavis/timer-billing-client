import fetch from 'isomorphic-fetch'
import { API_URL } from '../../global'

export default {

  get(url){
    return fetch(API_URL + url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
  },

  post(url, body) {
  return fetch(API_URL + url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }).then(response => (response.json()))
  },

  delete(url, body) {
    return fetch(API_URL + url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }).then(response => (response.json()))
  },

}