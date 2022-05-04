import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ProductsContext, ProductsProvider } from "./contexts/products.context";

import "./index.scss";

reactDom.render(
  <React.StrictMode>
    <BrowserRouter>

      <UserProvider>
      <ProductsProvider >
        <App/>
        </ProductsProvider>
      </UserProvider>
     
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
