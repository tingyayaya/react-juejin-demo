import {observable, action} from 'mobx'
import { observer, inject} from 'mobx-react'

class Alert {
  variant = '';
  tips = '';
  timer0 = null;
  
  @observable show = false;
 
  @action.bound initAlert({variant, tips}) {
    this.variant = variant
    this.tips = tips
    if(this.show){
      clearInterval(this.timer0)
      this.show = false
    }
    this.show = true

    this.hideAlert()

    if(!this.show) {
      clearInterval(this.timer0)
    }
  }

  @action.bound hideAlert(){
    this.timer0 = setTimeout(()=>{
      this.show = false
    }, 3000)
  }

}

const alert = new Alert()

export default alert 