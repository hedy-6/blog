# this

```
var value = 1;

var foo = {
  value: 2,
  bar: function() {
    return this.value;
  },
};

//示例1
console.log(foo.bar()); // 2
//示例2
console.log((foo.bar)()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4
console.log((false || foo.bar)()); // 1
//示例5
console.log((foo.bar, foo.bar)()); // 1
```

```
function Foo() {
  getName = function() {
    console.log(1);
  };
  return this;
}

function getName() {
  console.log(5);
}

Foo().getName();
// 1
```

this 指向 window ，但是这道题的陷阱在于 Foo 函数执行的时候，里面的 getName 函数覆盖了外层的 getName 函数

## call

```

```
