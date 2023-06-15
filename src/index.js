import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserAuthProvider from "./context/UserAuthContext";
import ProductsProvider from "./context/ProductsContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserAuthProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserAuthProvider>
  </React.StrictMode>
);
