import {computed, observable, action } from "mobx";

class Panel {
  @observable isShow = false
  
  @action.bound onHideModal() {
    this.isShow = false
  }
  @action.bound onShowModal() {
    this.isShow = true
  }
}

const panel = new Panel()

export default panel 