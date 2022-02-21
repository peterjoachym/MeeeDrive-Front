import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AlertContextProvider } from "./contexts/AlertContext";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <AlertContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </AlertContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
