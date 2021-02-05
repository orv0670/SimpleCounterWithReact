//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let number = 0;
setInterval(() => {
	number = number + 1;
	ReactDOM.render(
		<Home number={number.toString()} />,
		document.querySelector("#app")
	);
}, 1000);
