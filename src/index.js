import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import {ProductProvider} from "./Context/ProductContext"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
