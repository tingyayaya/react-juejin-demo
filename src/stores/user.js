import {computed, observable, action } from "mobx";

class User {
  @observable username = ''
  @observable avatar = 'https://avatars3.githubusercontent.com/u/30460155?v=4'
  @observable status = false
  
}

const user = new User()

export default user 