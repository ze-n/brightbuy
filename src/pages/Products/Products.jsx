import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import API from "./Temp";
import ProductCard from "./ProductCard";
import { useProducts } from "../../context/ProductsContext";

const Products = () => {
  const [cardComponents, setCardComponents] = useState(null);
  const { getProductCollection } = useProducts();
  useEffect(() => {
    const productType = "CLOTHING";
    getProductCollection(productType)
      .then((products) => {
        const components = products.map((product) => {
          const productId = product.id; // Get the ID of the product
          const productData = product; // Get the data of the product

          // Access specific fields of the product document
          const {
            productName,
            productReviews,
            productRating,
            productPrice,
            productImages,
          } = productData;
          const coverImg = productImages[0];

          // Return the card component with product details as props
          return (
            <ProductCard
              id={productId}
              name={productName}
              price={productPrice}
              reviews={productReviews}
              rating={productRating}
              image={coverImg}
            />
          );
        });

        setCardComponents(components);
      })
      .catch((error) => {
        console.log("Error retrieving product collection:", error.message);
        return null;
      });
  }, []);

  return (
    <Wrapper>
      <div className="container products">
        {" "}
        {cardComponents ? cardComponents : "No products available."}
      </div>
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
