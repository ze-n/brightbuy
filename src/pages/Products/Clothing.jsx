import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ProductCard from "./ProductCard";
import { useProducts } from "../../context/ProductsContext";

const Clothing = () => {
  const [cardComponents, setCardComponents] = useState(null);
  const { getProductCollection } = useProducts();
  useEffect(() => {
    const productType = "CLOTHING";
    getProductCollection(productType)
      .then((products) => {
        const components = products.map((product) => {
          const productId = product.id; // Get the ID of the product
          const productData = product; // Get the data of the product

          // Return the card component with product details as props
          return <ProductCard id={productId} productData={productData} />;
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
        {cardComponents ? cardComponents : "Loading ......"}
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

export default Clothing;
