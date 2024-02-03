import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { MantineProvider } from "@mantine/core";
import ReduxApp from "./ReduxApp";
console.log("state", store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <BrowserRouter>
         <App />
      
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
