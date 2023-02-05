export function UserInfoStructure() {
  this.name = undefined;
  this.age = undefined;
  this.income = undefined;
}
// 这个函数不是创造功能，而是创造了新的object，我们称为构造函数


export class User{
  constructor(){
    this.name=undefined;
    this.age=undefined;
    this.income=undefined;  
  }
}
// 上面这个是标准的构造函数class