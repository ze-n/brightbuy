import React from "react";
import { styled } from "styled-components";
import API from "./Temp";
import ProductCard from "./ProductCard";
const Products = () => {
  return (
    <Wrapper>
      <div className="container products">
        {API.map((e) => {
          const { id, name, reviews, rating, price, images } = e;

          return (
            <ProductCard
              id={id}
              name={name}
              price={price}
              reviews={reviews}
              rating={rating}
              image={images[0]}
            />
          );
        })}
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
