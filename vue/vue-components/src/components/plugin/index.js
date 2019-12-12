let Toast = {}

Toast.install = function (Vue, options) {
  let opt = {
    defaultType: "center",  // 默认显示的位置
    duration: '1500'
  }

  for (let property in options) {
    //使用options的配置
    opt[property] = options[property]
  }

  Vue.prototype.$toast = (tips, type) => {
    if (type) {
      opt.defaultType = type
    }

    let toastTpl = Vue.extend({
      template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
    })

    let tpl = new toastTpl().$mount().$el
    document.body.appendChild(tpl)
    setTimeout(function () {
      document.body.removeChild(tpl)
    }, opt.duration)
  }

  ['buttom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.property.$toast(tips, type)
    }
  }) 
}

export {
  Toast
}