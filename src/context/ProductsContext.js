import { createContext, useContext, useState } from "react";
import { fs, storage } from "../Config/Config";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const productsContext = createContext();
export const useProducts = () => {
  return useContext(productsContext);
};

const ProductsProvider = ({ children }) => {
  // this method is used to store product details in database
  const addProduct = async (
    productImages,
    productName,
    productType,
    productDescription,
    productBrand,
    productPrice,
    productRating,
    productReviews,
    customerSupport,
    warranty,
    colors
  ) => {
    let imgUrls = [];
    colors = Object.values(colors);

    try {
      // Create an array of promises for each image upload operation
      const uploadPromises = productImages.map((selectedFile) => {
        const storageRef = ref(
          storage,
          `productImages/${productType.toUpperCase()}/${productName}/${Date.now()}`
        );
        return uploadBytes(storageRef, selectedFile)
          .then(() => getDownloadURL(storageRef))
          .then((url) => imgUrls.push(url));
      });

      // Wait for all the promises to resolve
      await Promise.all(uploadPromises);

      // Add the document to the Firestore collection
      const docRef = await addDoc(
        collection(fs, `products-${productType.toUpperCase()}`),
        {
          productName,
          productType,
          featured,
          bestSellers,
          productDescription,
          productBrand,
          customerSupport,
          productPrice,
          productRating,
          productReviews,
          warranty,
          colors,
          productImages: imgUrls,
        }
      );

      console.log("Product details added to store");
      console.log(imgUrls);
    } catch (error) {
      console.log("Error adding product:", error.message);
    }
  };
  // getProductCollection
  const getProductCollection = async (productType) => {
    try {
      const collectionRef = collection(
        fs,
        `products-${productType.toUpperCase()}`
      );
      const querySnapshot = await getDocs(collectionRef);

      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return products;
    } catch (error) {
      console.log("Error retrieving product collection:", error.message);
      return [];
    }
  };
  const value = { addProduct, getProductCollection };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsProvider;
