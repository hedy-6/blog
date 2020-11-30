# 词法(静态)作用域和动态作用域

Javascript 采用的是静态作用域，即**函数的作用域在函数定义的时候决定**。而动态作用域里，函数的作用域在函数调用的时候才决定。

```
var value = 1;
function foo() {
  console.log(value);
}
function bar() {
  var value = 2;
  foo();
}
bar();
// 1
// 在foo作用域内没有value，会从外部作用域去找，而不是从调用作用域去找
```

比较下面两组代码

```
# 代码1
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    console.log(scope); // local scope
    return scope;
  }
  return f();
}
checkscope();
# 代码2
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    console.log(scope);
    return scope;
  }
  return f;
}
checkscope()();
// 闭包
```

这两组执行代码返回的结果都是`local scope`。但是他们的区别是执行上下文栈的变化不一样。

当执行到一段代码的时候，会创建一个上下文栈。

```
# 第一组执行顺序
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();
# 第二组执行顺序
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();
```

```
var a = 10;
var o = {
  a: 11,
  b: {
    fn: function() {
      console.log(a);
    },
  },
};
o.b.fn();
// 10
// fn 内没有a，所以读取到的是全局变量
```

## 变量提升与函数提升

函数可以在声明之前就可以调用，并且跟变量声明不同的是，它还能得到正确的结果，其实引擎是把函数声明整个地提升到了当前作用域的顶部。如果在同一个作用域中存在多个同名函数声明，后面出现的将会覆盖前面的函数声明。

变量提升

```
var foo = function() {
  console.log("foo1");
};
foo(); // foo1
var foo = function() {
  console.log("foo2");
};
foo(); // foo2
/*
* 预编译之后
var foo;
foo = function() {
  console.log("foo1");
};
foo();
foo = function() {
  console.log("foo2");
};
foo();
*/
```

函数提升

```
function foo() {
  console.log("foo1");
}
foo(); // foo2
function foo() {
  console.log("foo2");
}
foo(); // foo2
/**
 * 预编译之后
function foo() {
  console.log("foo1");
}
function foo(params) {
  console.log("foo2");
}
foo(); // foo2
foo(); // foo2
 */
```

## 参数按值传递

### 按值传递

```
var value = 1;
function foo(v) {
    v = 2;
    console.log(v); //2
}
foo(value);
console.log(value) // 1
```

当传递 value 到函数 foo 中，相当于拷贝了一份 value，假设拷贝的这份叫 \_value，函数中修改的都是 \_value 的值，而不会影响原来的 value 值。

### 引用传递

所谓按引用传递，就是传递对象的引用，函数内部对参数的任何改变都会影响该对象的值，因为两者引用的是同一个对象

```
var obj = {
    value: 1
};
function foo(o) {
    o.value = 2;
    console.log(o.value); //2
}
foo(obj);
console.log(obj.value) // 2
```

### 共享传递

按引用传递是传递对象的引用，而按共享传递是传递对象的引用的副本！

```
var obj = {
    value: 1
};
function foo(o) {
    o = 2;
    console.log(o); //2
}
foo(obj);
console.log(obj.value) // 1
```

**参数如果是基本类型是按值传递，如果是引用类型按共享传递。但是因为拷贝副本也是一种值的拷贝，所以在高程中也直接认为是按值传递了。**
