const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, ...args)
    }, delay)
  }
}

test = function (e) {
  console.log(123)
}

debounce(test(e), 500)