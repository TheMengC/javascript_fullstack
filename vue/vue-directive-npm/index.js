let loadingNode = document.createElement('div')
loadingNode.style.backgroundColor = '#eee'
loadingNode.style.opacity = '.6'
loadingNode.style.position = 'absolute'
loadingNode.style.left = 0
loadingNode.style.top = 0
loadingNode.style.right = 0
loadingNode.style.bottom = 0
function toggleLoding(el, binding) {
  if (binding.value) {
    el.appendChild(loadingNode)
  } else {
    el.contains(loadingNode) && el.removeChild(loadingNode)
  }
}

let plugin = {}
plugin.install = function (Vue) {
  Vue.directive('loading', {
    bind: function (el, binding) {
      // console.log(el, binding)
      //第一次绑定的时候  只会调用一次
      toggleLoding(el, binding)
    },
    update(el, binding) {
      toggleLoding(el, binding)
    }
  })
}
// vue 插件 提供全局的方法

// 导出
// 通用 模块化 方案 UMD
if(typeof exports === 'object') {
  module.exports = plugin
} else {
  // window
  window.Vue.use(plugin)
}