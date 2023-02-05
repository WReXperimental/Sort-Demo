import "@/css/style.scss";
// import '@/js/utils.js'

import { isNumber, isString } from "@/js/utils";

import { userInfoDom } from "@/js/userDom";

import { UserInfoStructure } from "./user";
import {User} from "./user"

const app = document.getElementById("app");

app.appendChild(userInfoDom);

const user = new UserInfoStructure()
const user2 = new User()
console.log(user);
console.log(user2);