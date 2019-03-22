import {computed, observable, action } from "mobx";

class Modal {
  @observable isShow = false
  @observable name =''
  @observable isClickHidden = false
  @observable parent = ''

  @action.bound onHideModal() {
    this.isShow = false
  }
  @action.bound onShowModal() {
    this.isShow = true
  }
}

const modal = new Modal()

export default modal 