import React, { useState } from "react";
import { styled } from "styled-components";

const ImagesContainer = ({ images }) => {
  // if (images) {
  var [mainImage, setMainImage] = useState(images[0]);
  // console.log(images, " these are the images");
  // }

  return (
    <Wrapper className="product__images-container">
      {/* main image container */}
      {images && (
        <div className="main-image-container">
          <img src={mainImage} alt="" />
        </div>
      )}
      {/* all small imgages container */}
      <div className="small-images-container flex-columns">
        {images &&
          images.map((curEle, index) => {
            return (
              // small image container
              <figure className="small-image-container flex-column" key={index}>
                <img
                  src={curEle}
                  onClick={() => {
                    setMainImage(curEle);
                  }}
                />
              </figure>
            );
          })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */

  /*  */
  /* layout */
  /*  */

  /* these variables represent padding mainly used by main-image-container */
  --pblock: 2rem;
  --pinline: 0.3rem;
  .main-image-container {
    /* giving height */
    height: 25rem;
    /* positioning image in the center */
    display: flex;
    justify-content: center;
    align-items: center;
    /* giving some padding */
    padding-block: var(--pblock);
    padding-inline: var(--pinline);
  }
  img {
    /* giving width and height to image */
    height: 100%;
    width: 100%;
    /* making sure image aspect ration is maintained */
    object-fit: contain;
  }
  .small-images-container {
    /* adding some gap vetween small-image-container */
    gap: 0.5rem;
  }
  .small-image-container {
    /* giving max-height and width */
    max-height: 150px;
    max-width: 150px;
    padding: 0.2rem;
  }
  /* box-shadows */
  .main-image-container {
    box-shadow: 0 0 0.8rem 0rem rgba(153, 153, 153, 0.1);
  }
  .small-image-container {
    box-shadow: 0 0 0.8rem 0rem rgba(175, 175, 175, 0.1);
  }
  /* margins */

  .main-image-container {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 750px) {
    .small-images-container {
      flex-direction: row;
      gap: 0.2rem;
    }
    .small-image-container {
      /* reducin max-height */
      max-height: 130px;
    }
  }
`;
export default ImagesContainer;
