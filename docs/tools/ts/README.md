# TypeScript

## interface 与 type 的区别

### 相同点

1. 都可以描述对象或函数

```
# interface
interface Person {
  name: string;
  age: number;
}
interface SetPerson {
  (name: string, age: number): void;
}

# type
type Person = {
  name: string;
  age: number;
};
type SetPerson = (name: string, age: number) => void;

# 测试
const p: Person = { name: 'A', age: 19 };
const setPerson: SetPerson = (name, age) => {
  return `name is ${name},age is ${age}`;
};
setPerson('B', 16);

```

2. 都允许拓展

```
# interface
// interface Name {
//   name: string;
// }
type Name = { name: string };
interface Person extends Name {
  age: number;
}

# type
interface Name {
  name: string;
}
type Person = Name & {
  age: number;
};

# 测试
const p: Person = { name: 'A', age: 19 };
```

### 不同点

1. type 可以而 interface 不行

type 可以声明基本类型别名，联合类型，元组等类型；
type 语句中还可以使用 typeof 获取实例的 类型进行赋值

```
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
```

2. interface 可以而 type 不行

interface 能够声明合并

```
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string
}
*/
```
