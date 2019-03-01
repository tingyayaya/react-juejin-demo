import { observable, action } from 'mobx';
import { _getEntryList } from '@/axios/api';

console.log(_getEntryList())
const HomeStore = observable( {
    entryList: [],

    // 获取首页数据
    async getList() {
      this.entryList = await _getEntryList();
    }
} );

export default HomeStore;