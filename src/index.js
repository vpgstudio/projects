import React from "react";
import ReactDOM from "react-dom";
import AppHandler from "./AppHandler";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { MuiThemeProvider } from "material-ui/styles";

ReactDOM.render(
  <MuiThemeProvider>
    <AppHandler />
  </MuiThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
