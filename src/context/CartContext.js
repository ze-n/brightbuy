import { createContext, useContext, useEffect, useState } from "react";
import { fs, storage } from "../Config/Config";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import { useAuth } from "./UserAuthContext";
const cartContext = createContext();
export const useCart = () => {
  return useContext(cartContext);
};

const CartProvider = ({ children }) => {
  const { currentUser, currentUserUid } = useAuth();
  const [cartProducts, setCartProducts] = useState();
  const [liveCartProducts, setLiveCartProducts] = useState();

  let Product;
  const addToCart = (id, productData) => {
    if (currentUser) {
      console.log(productData);
      Product = productData;
      Product["qty"] = 1;
      Product["totalProductPrice"] = Product.qty * Product.productPrice;
      console.log(currentUserUid);
      console.log(id, "id ");
      const cartCollectionRef = collection(fs, "Cart " + currentUserUid);
      const productDocRef = doc(cartCollectionRef, id);

      if (id) {
        setDoc(productDocRef, Product)
          .then(() => {
            console.log("successfully added to cart");
          })
          .catch((error) => {
            console.log(
              "something went wrong while adding to cart ",
              error.message
            );
          });
      } else {
        console.log("Invalid product ID");
      }
    } else {
      alert("please first login");
    }
  };
  const updateQty = async (newQty, id, updatedTotalPrice) => {
    if (currentUser) {
      const cartCollectionRef = collection(fs, "Cart " + currentUserUid);
      const productDocRef = doc(cartCollectionRef, id);
      updateDoc(productDocRef, {
        qty: newQty,
        totalProductPrice: updatedTotalPrice,
      });
    } else {
      console.log("no user is logged in to increment");
    }
  };
  const deleteCartProduct = async (id) => {
    if (currentUser) {
      const cartCollectionRef = collection(fs, "Cart " + currentUserUid);
      const productDocRef = doc(cartCollectionRef, id);
      deleteDoc(productDocRef)
        .then(() => {
          console.log("product deleted from cart refresh to see updated cart");
        })
        .catch((error) => {
          console.log(
            "something happened while deleting cart product ",
            error.message
          );
        });
    } else {
      console.log("no user is logged in to delete cart product");
    }
  };

  const getCartProducts = async () => {
    console.log("it stars from here");
    if (currentUser) {
      const cartCollectionRef = collection(fs, "Cart " + currentUserUid);
      getDocs(cartCollectionRef)
        .then((querySnapshot) => {
          const cartproducts = [];
          querySnapshot.forEach((doc) => {
            cartproducts.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          console.log("i am here");
          setCartProducts(cartproducts);
          return cartproducts;
        })
        .catch((error) => {
          console.log("Error retrieving cart products", error.message);
          setCartProducts([]);
          return [];
        });
    }
  };
  // live get cart products

  const getLiveCartProducts = async () => {
    if (currentUser) {
      const cartCollectionRef = collection(fs, "Cart " + currentUserUid);
      onSnapshot(cartCollectionRef, (querySnapshot) => {
        const cartproducts = [];
        querySnapshot.forEach((doc) => {
          cartproducts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log("i am here");
        setLiveCartProducts(cartproducts);
        return cartproducts;
      });
    }
  };

  const value = {
    addToCart,
    getCartProducts,
    getLiveCartProducts,
    cartProducts,
    updateQty,
    deleteCartProduct,
    liveCartProducts,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
export default CartProvider;
