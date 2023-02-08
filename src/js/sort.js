import * as userDom from "@/js/userDom";
// 把所有的东西都调用为userDom，之后就可以用userDom. 调用

import { UserInfoStructure, User, createUser } from "./user";

import sortBy from "sort-by";

// const userInfoList = [
//   {
//     name: "Amy",
//     age: 28,
//     income: 20000,
//   },
//   {
//     name: "Vincent",
//     age: 25,
//     income: 10000,
//   },
//   {
//     name: "Peter",
//     age: 22,
//     income: 30000,
//   },
// ];

const userInfoList = [];
// 创建空list，这样就可以用index拿到数据放到table里

userDom.userAgeInput.addEventListener("mousemove", () => {
  userDom.userAgeNumber.textContent = userDom.userAgeInput.value;
});

let flag = false;
// 单例功能要放在click功能外面，不然每次click，flag会重置

userDom.userInfoSubmit.addEventListener("click", () => {
  // console.log('submit');
  const userInfo = new UserInfoStructure();
  userInfo.name = userDom.userNameInput.value;
  userInfo.age = +userDom.userAgeInput.value;
  userInfo.income = +userDom.userIncomeInput.value;

  const user = createUser(userInfo);

  if (user instanceof User) {
    userInfoList.push({ ...userInfo });
    // console.log(userInfoList[1].name)
    // console.log(sort(["age", "name"]));
    // 如果在这里排序的话用后面用userAge.textContent=userInfoList[L].age的userInfoList就会被排序，那么用index拿到的数据就不准

    //table initialize,
    if (!flag) {
      flag = true;

      const firstRow = document.createElement("tr");

      const tableHeadNumber = document.createElement("th");
      const tableHeadName = document.createElement("th");
      const tableHeadAge = document.createElement("th");
      const tableHeadIncome = document.createElement("th");

      tableHeadNumber.textContent = "Number";
      tableHeadName.textContent = "Name";
      tableHeadAge.textContent = "Age";
      tableHeadIncome.textContent = "Income";

      userDom.userTable.appendChild(firstRow);

      firstRow.appendChild(tableHeadNumber);
      firstRow.appendChild(tableHeadName);
      firstRow.appendChild(tableHeadAge);
      firstRow.appendChild(tableHeadIncome);
    }

    // create a table of user's info

    const tableRow = document.createElement("tr");
    const userNumber = document.createElement("td");
    const userName = document.createElement("td");
    const userAge = document.createElement("td");
    const userIncome = document.createElement("td");

    let L = userInfoList.length - 1;
    userNumber.textContent = userInfoList.length;
    userName.textContent = userInfoList[L].name;
    userAge.textContent = userInfoList[L].age;
    userIncome.textContent = userInfoList[L].income;

    tableRow.appendChild(userNumber);
    tableRow.appendChild(userName);
    tableRow.appendChild(userAge);
    tableRow.appendChild(userIncome);

    userDom.userTable.appendChild(tableRow);
  } else {
    console.error(user.errorInfo);
  }
});

function sort(attr) {
  return userInfoList.sort(sortBy(...attr));
}
