import {observe} from './observe.js'

export function initState(vm) {
  const opt = vm.$option
  console.log(opt)
  if(opt.props) {
    initProps(vm)
  }

  if(opt.methods) {
    initMethods(vm)
  }

  if(opt.data) {
    initDate(vm)
  }
}

function initDate(vm) {
  // 数据响应式原理
  let data = vm.$option.data

  data = vm._data =  typeof data === "function" ? data.call(vm) : data
  observe(data)
}