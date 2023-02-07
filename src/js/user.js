import { isNumber, isString } from "./utils"

export function UserInfoStructure() {
  this.name = undefined
  this.age = undefined
  this.income = undefined
}


// console.log(UserInfoStructure);


export class User {
  #name = undefined
  #age = undefined
  #income = undefined
  constructor(userInfo) {
    this.#name = userInfo.name
    this.#age = userInfo.age
    this.#income = userInfo.income
  }

  get name() {
    return this.#name
  }
  get age() {
    return this.#age
  }
  get income() {
    return this.#income
  }
}

export function createUser(userInfo) {
  let errorFlag = false
  let errorInfo = ''
  if (!isString(userInfo.name)) {
    errorFlag = true
    errorInfo += 'name is not string '
console.log(userInfo.name);
  }

  if (!isNumber(userInfo.age)) {
    errorFlag = true
    errorInfo += 'age is not number '
  }

  if (!isNumber(userInfo.income)) {
    errorFlag = true
    errorInfo += 'income is not number'
  }

  if (errorFlag) {
    return { errorInfo }
  } else {
    return new User(userInfo)
 // new的意思是用这个函数创造一个新的object
  }
}



// 这个函数不是创造功能，而是创造了新的object，我们称为构造函数
// 创造object的方法最简单就是const user = {}，第二个是用函数创造
// function本来是个函数，返回一个被执行的效果，但是这里我们用函数创造了object。

// export class User {
// object里面的数据可以在外部被改变，现在有个功能 用#号能避免被修改
// #name = undefined;
// #age = undefined;
// #income = undefined;
// constructor(name, age, income) {
//   this.#name = name;
//   this.#age = age;
//   this.#income = income;
// }

// user3.name = 'abc'
// 用class功能的时候，如果用了#那么就不能用普通方法（如上）修改
// 需要查看的时候要用get函数, 并且必须写在class的function里面
// 如果只设置了get功能，那么这个object就只能读取，但不能修改
// get name() {
//   return this.#name;
// }
// 需要更改的时候也还是可以用set函数修改，
// set name(name){
//   this.#name=abcd
// }

// }

// const user3 = new User("raymond", 18, 0);
// console.log("user#", user3);
// 上面这个是标准的构造函数class，class是专门用来创造object
