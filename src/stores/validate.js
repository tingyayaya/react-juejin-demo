import {observable, action} from 'mobx'

class Validate {
  @observable form = {
    variant: '',
    tips: '',
    pass: false
  };
  
  @action.bound password({ value }) {
    this.form.pass = false
    if(!value){
      this.form.variant = 'danger'
      this.form.tips = '密码不能为空'
      this.form.pass = false
      return this.form
    }else if(!/^[\s\S]{6,}$/.test(value)){
      this.form.variant = 'danger'
      this.form.tips = '密码长度不能少于6位'
      this.form.pass = false
      return this.form
    }else{
      this.form.pass = true
      return this.form
    }
  }

  @action.bound phone({ value }) {
    this.form.pass = false
    if(!value){
      this.form.variant = 'danger'
      this.form.tips = '请输入手机号'
      this.form.pass = false
      return this.form
    }else if(!/^1[3|4|5|7|8][0-9]{9}$/.test(value)){
      this.form.variant = 'danger'
      this.form.tips = '请输入正确的手机号'
      this.form.pass = false
      return this.form
    }else{
      this.form.pass = true
      return this.form
    }
  }

  @action.bound account({ value }) {
    this.form.pass = false
    if(!value){
      this.form.variant = 'danger'
      this.form.tips = '请输入手机号或邮箱'
      this.form.pass = false
      return this.form
    }else if(!/^1[3|4|5|7|8][0-9]{9}$/.test(value)){
      this.form.variant = 'danger'
      this.form.tips = '邮箱不正确'
      this.form.pass = false
      return this.form
    }else{
      this.form.pass = true
      return this.form
    }
  }
  @action.bound email({ value }) {
    this.form.pass = false
    if(!value){
      this.form.variant = 'danger'
      this.form.tips = '请输入邮箱'
      this.form.pass = false
      return this.form
    }else if(!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)){
      this.form.variant = 'danger'
      this.form.tips = '请输入正确的邮箱地址'
      this.form.pass = false
      return this.form
    }else{
      this.form.pass = true
      return this.form
    }
  }
  @action.bound code({ value }) {
    this.form.pass = false
    if(!value){
      this.form.variant = 'danger'
      this.form.tips = '需要手机验证码'
      this.form.pass = false
      return this.form
    }else{
      this.form.pass = true
      return this.form
    }
  }
}

const validate = new Validate()

export default validate 