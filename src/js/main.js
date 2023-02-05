import "@/css/style.scss"
// import '@/js/utils.js'


import { isNumber,isString } from "@/js/utils"


import { userInfoDom } from "@/js/userDom"

const app= document.getElementById("app")

app.appendChild(userInfoDom)