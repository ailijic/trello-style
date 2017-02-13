// js/index.js

require('babel-polyfill');

import Board from "./components/board";
import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Board />, document.getElementById("app"))
});
