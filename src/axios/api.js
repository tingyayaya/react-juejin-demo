import axios from 'axios' 

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://juejin-demo/api/v1'

export async function _getEntryList(data) {
  return axios.get('/entryList', data)
}