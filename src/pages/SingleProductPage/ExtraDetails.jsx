import React from "react";
import { styled } from "styled-components";

const ExtraDetails = ({
  productDescription,
  warranty,
  productBrand,
  customerSupport,
}) => {
  return (
    <Wrapper>
      {productDescription && <p className="text-big">{productDescription}</p>}
      {warranty && customerSupport && productBrand && (
        <table className="details-table">
          <thead>
            <th>Information</th>
            <th>Details</th>
          </thead>
          <tr>
            <td>Brand Name</td>
            <td>{productBrand}</td>
          </tr>
          <tr>
            <td>Warranty</td>
            <td>{warranty}</td>
          </tr>
          <tr>
            <td>Customer Support</td>
            <td>{customerSupport}</td>
          </tr>
        </table>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  thead {
    background-color: var(--clr-single-product-page);
    color: var(--bg-single-product-page);
  }
  /*  */
  /* typography */
  /*  */
  th {
    font-size: var(--fs-table-heading);
  }
  td {
    font-size: var(--fs-table-cell);
  }
  th,
  td {
    text-align: center;
  }

  /*  */
  /* layout */
  /*  */
  .details-table {
    /* border-spaceing : horizontal vertical */
    /* border-spacing: 2rem 1rem; */
    border-spacing: 0;
  }
  /* margins */
  .details-table {
    margin-top: 2rem;
  }
  /* shadows */
  .details-table {
    box-shadow: 0 0 0.5rem 0.1rem rgba(48, 48, 48, 0.1);
  }
  td,
  th {
    padding-inline: 1rem;
    padding-block: 1.5rem;
  }
  td {
    border-bottom: 1px solid black;
  }
  .details-table {
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    th,
    td {
      padding-inline: 0.5rem;
      padding-block: 1.5rem;
      text-align: center;
    }
  }
`;
export default ExtraDetails;
