import {initMixin} from './init.js'

function Vue(option) {
  this._init(option)
}

initMixin(Vue)

export default Vue