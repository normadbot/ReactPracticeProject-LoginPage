import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthConextProvide } from "./store/auth-context";

ReactDOM.render(
  <AuthConextProvide>
    <App />
  </AuthConextProvide>,
  document.getElementById("root")
);
