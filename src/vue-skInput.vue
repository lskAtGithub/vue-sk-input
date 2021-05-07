<template>
  <div class="sk__input__wrapper">
    <div class="sk__input_box" :class="{'error__input': verifyError, 'large__input': size === 'large', 'mini__input': size === 'mini', 'small__input': size === 'small'}">
      <input
        ref="input"
        :name="name"
        :label="label"
        class="sk__input"
        :value="value"
        :readonly="readonly"
        :disabled="disabled"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <svg v-if="clearable && value !== ''" @click="clear" style="height:16px;width:16px;cursor: pointer; fill: #cdcdcd;" t="1620376685334" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1143" width="200" height="200">
        <path d="M512 11.234c-274.205 0-496.508 222.348-496.508 496.53 0 274.228 222.303 496.486 496.508 496.486 274.25 0 496.508-222.258 496.508-496.485 0-274.205-222.258-496.53-496.508-496.53z m0 928.352c-238.503 0-431.844-193.296-431.844-431.821C80.156 269.262 273.497 75.876 512 75.876c238.48 0 431.866 193.364 431.866 431.889S750.48 939.586 512 939.586z m218.214-598.65l-57.61-57.788-162.132 161.57-164.087-159.391-56.868 58.553 163.166 158.492-172.76 172.199 57.587 57.766L511.214 559.24l175.995 170.94 56.913-58.53-175.075-170.087z" p-id="1144"></path>
      </svg>
    </div>
    <div class="error__tips" :class="{'error__msg': verifyError}">{{errorMsg}}</div>
  </div>
</template>

<script>
import { validEmail, validMoney, validPhone } from './validate'

export default {
  name: 'SkInput',
  props:{
    value: [Number, String],
    label: [Number, String],
    name: [Number, String],
    maxlength: [Number, String],
    minlength: [Number, String],
    placeholder: [Number, String],
    autocomplete: {
      type: String,
      default: 'off'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: (value)=>{
        return ['large', 'default', 'small', 'mini'].indexOf(value) !== -1
      },
      default: 'default'
    },
    verifyType: {
      type: String,
      validator: (value)=>{
        return ['money', 'notNull', 'phone', 'email'].indexOf(value) !== -1
      }
    }
  },
  created(){
    console.log(this.size)
  },
  data(){
    return {
      verifyError: false,
      errorMsg: ''
    }
  },
  methods: {
    clear(){
      this.$emit('input', '')
      this.$emit('clear')
    },
    handleInput(event){
      this.$emit('input', event.target.value)
    },
    handleFocus(event){
      this.$emit('focus', event)
    },
    handleBlur(event){
      this.$emit('blur', event)
      if(this.verifyType){
        if(this.minlength && this.value < this.minlength){
          this.verifyError = true
          this.errorMsg = `最少输入${this.minlength}个字符`
          return
        }
        if(this.verifyType === 'money' && !(validMoney(this.value))){
          this.verifyError = true
          this.errorMsg = `输入的金额格式有误`
          return
        }
        if(this.verifyType === 'phone' && !(validPhone(this.value))){
          this.verifyError = true
          this.errorMsg = `输入的手机号格式有误`
          return
        }
        if(this.verifyType === 'email' && !(validEmail(this.value))){
          this.verifyError = true
          this.errorMsg = `输入的邮箱格式有误`
          return
        }
        this.verifyError = false
      }
    }
  }
}
</script>

<style scoped>
.sk__input__wrapper{
  margin: 0;
  padding: 0;
  box-sizing: border-box!important;


}
.sk__input_box{
  width: 100%;
  display: flex;
  align-items: center;
  min-width: 180px;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  font-size: 14px;
  padding: 3px 12px;
  margin: 0;
}
.sk__input_box.small__input{
  font-size: 13px;
  padding: 1px 12px;
}
.sk__input_box.large__input{
  font-size: 15px;
  padding: 5px 14px;
}
.sk__input_box.mini__input{
  font-size: 12px;
  padding: 0 10px;
}
.sk__input_box .sk__input{
  outline: none;
  width: 100%;
  border: none;
  color: #606266;
  padding: 0;
  margin: 0;
}
.sk__input_box.error__input{
  border-color: red;
}
.sk__input_box .sk__input::placeholder{
  color: #c0cfe3;
}
.error__tips{
  overflow: hidden;
  color: red;
  font-size: 12px;
  transition: all 0.6s;
  max-height: 0;
}
.error__tips.error__msg{
  max-height: 20px;
}
</style>