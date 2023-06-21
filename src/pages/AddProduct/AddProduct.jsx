import React from "react";
import { styled } from "styled-components";
import AddProductForm from "./AddProductForm";
import { useAuth } from "../../context/UserAuthContext";
const AddProduct = () => {
  const { currentUser } = useAuth();
  return (
    <Wrapper>
      <div className="container">
        {currentUser && currentUser.email == "shoyo@gmail.com" ? (
          <AddProductForm />
        ) : (
          <div>
            <p>You don't have access to this page</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-add-product-page);
  color: var(--clr-add-product-page);
  /*  */
  /* typography */
  /*  */

  /*  */
  /* layout */
  /*  */
  /* did this to center the form  */
  display: flex;
  justify-content: center;
  /* padding */
  padding-block: 4rem;
  padding-inline: var(--pinline);
`;
export default AddProduct;
