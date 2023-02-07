import * as userDom from "@/js/userDom";
// 把所有的东西都调用为userDom，之后就可以用userDom. 调用

import { UserInfoStructure, User, createUser } from "./user";

import sortBy from "sort-by";

const userInfoList = [
  {
    name: "Amy",
    age: 28,
    income: 20000,
  },
  {
    name: "Vincent",
    age: 25,
    income: 10000,
  },
  {
    name: "Peter",
    age: 22,
    income: 30000,
  },
];

userDom.userAgeInput.addEventListener("mousemove", () => {
  userDom.userAgeNumber.textContent = userDom.userAgeInput.value;
});

userDom.userInfoSubmit.addEventListener("click", () => {
  // console.log('submit');
  const userInfo = new UserInfoStructure();
  userInfo.name = userDom.userNameInput.value;
  userInfo.age = +userDom.userAgeInput.value;
  userInfo.income = +userDom.userIncomeInput.value;


  

  const user = createUser(userInfo);
  if (user instanceof User) {
    userInfoList.push({ ...userInfo });
    console.log(userInfoList);
    console.log(sort(["age", "name"]));
  } else {
    console.error(user.errorInfo);
  }
});

function sort(attr) {
  return userInfoList.sort(sortBy(...attr));
}
