(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function isObject(data) {
    return _typeof(data) === "object" && data !== null;
  }

  var Observer = /*#__PURE__*/function () {
    function Observer(data) {
      _classCallCheck(this, Observer);

      console.log(data, '-----');
      this.walk(data);
    }

    _createClass(Observer, [{
      key: "walk",
      value: function walk(data) {
        //在原型上添加方法，遍历对象属性
        // 判断如果是数组
        if (Array.isArray(data)) ; else {
          Object.keys(data).forEach(function (item) {
            defineReactive(data, item, data[item]);
          });
        }
      }
    }]);

    return Observer;
  }(); // 给所有的对象属性定义get 和 set


  function defineReactive(data, item, value) {
    observe(value); //如果传入的对象属性还是对象

    Object.defineProperty(data, item, {
      set: function set(newValue) {
        if (newValue === value) return;
        observe(newValue); // 如果是用户后添加的对象

        value = newValue;
      },
      get: function get() {
        return value;
      }
    });
  }

  function observe(data) {
    //  对象就是使用definePropety实现响应式
    if (!isObject(data)) {
      return;
    }

    return new Observer(data);
  }

  function initState(vm) {
    var opt = vm.$option;
    console.log(opt);

    if (opt.props) {
      initProps(vm);
    }

    if (opt.methods) {
      initMethods(vm);
    }

    if (opt.data) {
      initDate(vm);
    }
  }

  function initDate(vm) {
    // 数据响应式原理
    var data = vm.$option.data;
    data = vm._data = typeof data === "function" ? data.call(vm) : data;
    observe(data);
  }

  function initMixin(Vue) {
    Vue.prototype._init = function (option) {
      var vm = this;
      vm.$option = option;
      initState(vm);
    };
  }

  function Vue(option) {
    this._init(option);
  }

  initMixin(Vue);

  return Vue;

})));
//# sourceMappingURL=vue.js.map
