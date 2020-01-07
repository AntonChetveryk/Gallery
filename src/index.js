import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/style.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
