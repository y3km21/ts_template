import * as _ from "lodash";
import "./style/reset.scss";

const hello_div = document.createElement("div");
hello_div.id = "test";
hello_div.textContent = "Hello!";
document.body.appendChild(hello_div);
