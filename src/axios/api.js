import axios from 'axios' 

//axios.defaults.timeout = 5000;
//axios.defaults.baseURL = 'http://juejin-demo/api/v1'
const baseURL = 'http://juejin-demo/api/v1'

export async function _getEntryList(data) {
  return axios.post(`${baseURL}/entryList`, data)
}

export async function _getbookList(data) {
  return axios.post(`${baseURL}/bookList`, data)
}