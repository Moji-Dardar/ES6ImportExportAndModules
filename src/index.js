import React from "react";
import ReactDOM from "react-dom";
// import pi, {doublePi, triplePi} from "./math.js"
import * as pi from "./math.js";

// Do not use *(wildcard) typically, discouraged in style guides, import only what you need.

ReactDOM.render(
  <ul>
    {/* <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li> */}
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
);
