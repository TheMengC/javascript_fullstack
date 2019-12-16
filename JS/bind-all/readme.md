## call apply bind
都可以 绑定 this

call / apply: 调用函数
```js
function foo(a, b) {}
foo()
foo.call(this, a, b)
foo.apply(this, [a, b])
```

bind: 返回的一个函数
函数式编程：
柯里化 (curry)