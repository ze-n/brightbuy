import { createContext, useContext, useState } from "react";

const productsContext = createContext();
export const useProducts = () => {
  return useContext(productsContext);
};

const ProductsProvider = ({ children }) => {
  return <productsContext.Provider>{children}</productsContext.Provider>;
};

export default ProductsProvider;
