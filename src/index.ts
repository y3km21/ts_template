import * as _ from "lodash";
import "./style/reset.scss";
const hoge = require("./ts/hoge");

const hello_div = document.createElement("div");
hello_div.id = "test";
hello_div.textContent = "Hello!";
document.body.appendChild(hello_div);

hoge.addDiv();
