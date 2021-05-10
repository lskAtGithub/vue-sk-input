# vue-sk-input

## 使用

> npm install sk-input

##示例
```
<sk-input v-model="test" placeholder="placeholder" :validate="validate: { reg: /^1$/, errorMsg: 'error' }" clearable />

import skInput from 'vue-sk-input'
```

##### Input Attributes
|  参数   | 说明  |  类型   | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  | ----  |
| value / v-model | 绑定值 | string / number | —— | —— |
| maxlength | 原生属性，最大输入长度 | number | —— | —— |
| minlength | 原生属性，最小输入长度 | number | —— | —— |
| placeholder | 输入框占位文本 | string | —— | —— |
| clearable | 是否可清空 | boolean | —— | false |
| disabled | 禁用 | boolean | —— | false |
| readonly | 只读 | boolean | —— | false |
| size | 输入框尺寸 | string | large / default / small / mini | default |
| validate | 校验规则,示例： { reg: /[0-9]/, errorMsg: 'error' } | object | —— | —— |
| verifyType | 内置的校验规则( 金额，值不为空，手机号，邮箱 ) | string | money / notNull / phone / email | —— |

##### Input Events
|  事件名   | 说明  |  回调参数  |
|  ----  | ----  | ---- |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| input | 在 Input 值改变时触发 | (event: Event) |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | —— |

