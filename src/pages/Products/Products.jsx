import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ProductCard from "./ProductCard";
import { useProducts } from "../../context/ProductsContext";

const Products = () => {
  const [cardComponents, setCardComponents] = useState(null);
  const { getProductCollection, products, getProductCollections, allProducts } =
    useProducts();

  useEffect(() => {
    const fetchLiveAllProducts = async () => {
      try {
        await getProductCollections();
        console.log("all Products loaded");
      } catch (error) {
        console.log("Failed to load products", error.message);
      }
    };
    fetchLiveAllProducts();
  }, []);
  if (allProducts) {
    console.log(allProducts);
  }
  return (
    <Wrapper>
      {allProducts ? (
        <div className="container products">
          {allProducts.map(
            ({
              id,
              productName,
              productReviews,
              productRating,
              productPrice,
              productImages,
            }) => {
              let productData = {
                id,
                productName,
                productReviews,
                productRating,
                productPrice,
                productImages,
              };
              return <ProductCard key={id} id={id} productData={productData} />;
            }
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */

  /*  */
  /* typography */
  /*  */

  /*  */
  /* layout */
  /*  */
  /* padding */
  --pblock: 4rem;
  padding-inline: var(--pinline);
  padding-block: var(--pblock);

  .products {
    /* arranging multiple ProductCard on same row */
    display: flex;
    /* adding some gap between ProductCard */
    gap: 2rem;
    /* allowing flex wrap */
    flex-wrap: wrap;
    /* centering cards horizontally */
    justify-content: center;
  }
`;

export default Products;
