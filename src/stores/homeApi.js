import { observable, action } from 'mobx';
import { _getEntryList,_getbookList } from '@/axios/api';


const HomeStore = observable( {
    entryList: [],
    bookList: [],
    // 获取首页数据
    async getList(params) {
      const Data = await _getEntryList(params)
      this.entryList = Data.data.data;
    },
    async getBookList(params) {
      const Data = await _getbookList(params)
      const myList = Data.data.data
      if(params.name) {
        this.bookList = myList;
      }else{
        myList.forEach((item, i) => {
          let temp = []
          if(i%2 == 0){
            temp =  myList.slice(i, i+2) 
            this.bookList.push(temp)
          }
        })
      }
      console.log(this.bookList)
    }
} );

export default HomeStore;