import data from "@/data/db.json";

export const userInfoDom = document.createElement("div");

export const userNameLabel = document.createElement("label");
export const userAgeLabel = document.createElement("label");
export const userIncomeLabel = document.createElement("label");

export const userNameInput = document.createElement("input");
export const userAgeInput = document.createElement("input");
export const userIncomeInput = document.createElement("input");

export const userInfoSubmit=document.createElement("button")

userInfoDom.id = data.userDom.userInfoDom.id;
userNameInput.id = data.userDom.userNameInput.id;
userAgeInput.id = data.userDom.userAgeInput.id;
userIncomeInput.id = data.userDom.userIncomeInput.id;
userInfoSubmit.id = data.userDom.userInfoSubmit.id;

userNameLabel.htmlFor = userNameInput.id;
userAgeLabel.htmlFor = userAgeInput.id;
userIncomeLabel.htmlFor = userIncomeInput.id;
// 设置相同ID, 用htmlFor就可以点击字光标就会去输入框

// 也可以用setattribute来设置id，一般htmlFor用不了的时候用serattribute，如下
// userNameLabel.setAttribute('for',userNameInput.id)

userNameLabel.textContent = "Name:";
userAgeLabel.textContent = "Age:";
userIncomeLabel.textContent = "Income:";
userInfoSubmit.textContent="Submit"

userInfoDom.appendChild(userNameLabel);
userInfoDom.appendChild(userNameInput);

userInfoDom.appendChild(userAgeLabel);
userInfoDom.appendChild(userAgeInput);

userInfoDom.appendChild(userIncomeLabel);
userInfoDom.appendChild(userIncomeInput);

userInfoDom.appendChild(userInfoSubmit);
