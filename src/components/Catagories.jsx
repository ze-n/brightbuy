import React from "react";
import { styled } from "styled-components";

const Catagories = () => {
  return (
    <Wrapper className="catagory__list" role="list">
      <h2 className="title">Catagories &rarr;</h2>

      <li className="catagory__item">
        <a href="#" className="catagory__link">
          <p className="catagory__title"> Electronics</p>
          <img
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDYxNDB8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="catagory__image "
          />
        </a>
      </li>
      <li className="catagory__item">
        <a href="#" className="catagory__link">
          <p className="catagory__title">Clothes</p>
          <img
            src="https://images.unsplash.com/photo-1542060748-10c28b62716f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDY1NTZ8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="catagory__image"
          />
        </a>
      </li>
      <li className="catagory__item">
        <a href="#" className="catagory__link">
          <p className="catagory__title">Accessories</p>
          <img
            src="https://images.unsplash.com/photo-1534766438357-2b270dbd1b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDY2MDd8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="catagory__image"
          />
        </a>
      </li>
      <li className="catagory__item">
        <a href="#" className="catagory__link">
          <p className="catagory__title">Food</p>
          <img
            src="https://images.unsplash.com/photo-1615210768832-159ca3912a05?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDY2Mzh8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="catagory__image"
          />
        </a>
      </li>
      <li className="catagory__item">
        <a href="#" className="catagory__link">
          <div className="catagory__title">Shoes</div>
          <img
            src="https://images.unsplash.com/photo-1612034398734-d4ae0bc9169c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDY3MDR8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="catagory__image"
          />
        </a>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  /*  */
  /* typography */
  /*  */
  .catagory__title {
    font-size: var(--fs-medium);
  }
  .title {
    font-size: var(--fs-lg);
  }
  /*  */
  /* layout */
  /*  */

  /* tis will be used to align images with respect to catagory__list */
  position: relative;

  /* setting size of image */
  .catagory__image {
    height: 80%;
    width: 75%;
    object-fit: cover;
  }
  /* setting up image alignment */
  .catagory__image {
    position: absolute;
    top: 20%;
    right: 1rem;
  }

  .catagory__title {
    position: relative;
    z-index: 3;
  }
  /* margins */
  .title {
    margin-bottom: 2rem;
  }
  .catagory__item {
    margin-bottom: 0.5rem;
  }

  /*  */
  /* transitions */
  /*  */
  .catagory__image {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .catagory__link:hover .catagory__image {
    opacity: 0.5;
  }
`;

export default Catagories;
