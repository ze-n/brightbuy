import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BreadCrumbs from "./BreadCrumbs";
import Images from "./Images";
import Details from "./Details";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductsContext";
import ExtraDetails from "./ExtraDetails";

const SingleProductPage = () => {
  const [product, setProduct] = useState();
  const [isProductFetched, setIsProductFetched] = useState(false);
  const { id } = useParams();
  const { allProducts, getProductCollections } = useProducts();

  useEffect(() => {
    const fetchProduct = async () => {
      await getProductCollections();
    };

    fetchProduct();
  }, [getProductCollections]);

  useEffect(() => {
    if (allProducts) {
      const foundProduct = allProducts.find((product) => product.id === id);
      setProduct(foundProduct);
    }
  }, [allProducts, id]);

  if (!product || !allProducts) {
    return <div>Loading...</div>;
  }

  const {
    productName,
    productType,
    featured,
    bestSeller,
    productDescription,
    productBrand,
    productPrice,
    productRating,
    productReviews,
    customerSupport,
    warranty,
    productImages,
    colors,
  } = product || {}; // Provide default empty object

  return (
    <Wrapper>
      <div className="container">
        {/* <div className="breadcrumbs">
          {allProducts && <BreadCrumbs name={productName} />}
        </div> */}
        <div className="product__images-details-container flex-columns">
          <div className="product__images-container flex-column">
            {allProducts && <Images images={productImages} />}
          </div>
          <div className="product__details-container flex-column">
            {allProducts && <Details product={product} />}
          </div>
        </div>
        <div className="product__extra-details">
          <ExtraDetails
            productDescription={productDescription}
            productBrand={productBrand}
            warranty={warranty}
            customerSupport={customerSupport}
          />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-product-page);
  color: var(--clr-product-page);

  /*  */
  /* layout */
  /*  */
  /* padding */
  --pblock: 2rem;
  padding-inline: var(--pinline);
  padding-block: var(--pblock);

  /* margins */

  /* adding some margin below breadcrumbs */
  .breadcrumbs {
    margin-bottom: 2rem;
  }
  .product__extra-details {
    margin-top: 4rem;
  }
`;

export default SingleProductPage;
