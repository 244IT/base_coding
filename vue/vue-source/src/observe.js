import {isObject} from './utils.js'

class Observer{
  constructor(data) {
    console.log(data, '-----')
    this.walk(data)
  }

  walk(data) {  //在原型上添加方法，遍历对象属性
    // 判断如果是数组
    if(Array.isArray(data)) {
      // 函数劫持，重写数组函数
      

    }else{
      Object.keys(data).forEach((item) => {
        defineReactive(data, item, data[item])
      })
    } 
  }
}
// 给所有的对象属性定义get 和 set
function defineReactive(data, item, value) {
  observe(value) //如果传入的对象属性还是对象
  Object.defineProperty(data, item, {
    set(newValue) {
      if(newValue === value) return
      observe(newValue) // 如果是用户后添加的对象
      value = newValue 
    },
    get() {
      return value
    }
  })
}

export function observe(data) {

  //  对象就是使用definePropety实现响应式
  if(!isObject(data)) {
    return
  }
  return new Observer(data)
}