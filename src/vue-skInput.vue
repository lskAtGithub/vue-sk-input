<template>
  <div class="sk__input_box">
    <input
      class="sk__input"
      :class="{'errorInput': verify}"
      :value="value"
      :maxlength="maxlength"
      :minlength="minlength"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />

  </div>
</template>

<script>
  export default {
    name: 'SkInput',
    props:{
      value: [Number, String],
      maxlength: [Number, String],
      minlength: [Number, String],
      placeholder: [Number, String],
      autocomplete: {
        type: String,
        default: 'off'
      },
    },
    data(){
      return {
        verify: true
      }
    },
    methods: {
      handleInput(event){
        this.$emit('input', event.target.value)
      },
      handleFocus(event){
        this.$emit('focus', event)
      },
      handleBlur(event){
        this.$emit('blur', event)
      }
    }
  }
</script>

<style scoped>
.sk__input_box{
  width: 100%;
  min-width: 180px;
}
.sk__input_box .sk__input{
  outline: none;
  width: 100%;
  border: 1px solid #dcdfe6;
  color: #606266;
  font-size: 15px;
  padding: 5px 14px;
}
.sk__input_box .sk__input::placeholder{
  color: #c0cfe3;
}
</style>