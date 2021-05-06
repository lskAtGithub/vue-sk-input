import SkIput from './vue-skInput.vue';
export default SkIput;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('sk-input', SkIput);
}
