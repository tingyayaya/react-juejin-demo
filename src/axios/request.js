import axios from 'axios'
import qs from 'qs'

let http = {
  post: '',
  get: ''
}

http.post = function (api, data) {
  const params = qs.stringify(data)
  return new Promise((resolve, reject) => {
    axios.post(api, params)
    .then((res) => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

http.get = function (api, data) {
  const params = qs.stringify(data)
  return new Promise((resolve, reject) => {
    axios.get(api, params).then((res) => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}
