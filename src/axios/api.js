// import axios from 'axios' 
import req from '@/axios/axios.js'

//axios.defaults.timeout = 5000;
//axios.defaults.baseURL = 'http://juejin-demo/api/v1'
const baseURL = 'http://juejin-demo/api/v1'

export async function _getEntryList(data) {
  return req.post(`${baseURL}/entryList`, data)
}

export async function _getbookList(data) {
  return req.post(`${baseURL}/bookList`, data)
}