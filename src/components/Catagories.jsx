import React from "react";
import { styled } from "styled-components";
import ArrowTitle from "./ArrowTitle";
import { Link } from "react-router-dom";

const Catagories = () => {
  return (
    <Wrapper className="catagory__list text-regular" role="list">
      <ArrowTitle title="Catagories" />

      <li className="catagory__item">
        <a to="/electronics" className="catagory__link">
          <p className="catagory__title"> Electronics</p>
          <img
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDYxNDB8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="catagory__image "
          />
        </a>
      </li>
      <li className="catagory__item">
        <a to="/clothing" className="catagory__link">
          <p className="catagory__title">Clothes</p>
          <img
            src="https://images.unsplash.com/photo-1542060748-10c28b62716f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDY1NTZ8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="catagory__image"
          />
        </a>
      </li>
      <li className="catagory__item">
        <a to="/accessories" className="catagory__link">
          <p className="catagory__title">Accessories</p>
          <img
            src="https://images.unsplash.com/photo-1615210768832-159ca3912a05?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDY2Mzh8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="catagory__image"
          />
        </a>
      </li>
      <li className="catagory__item">
        <a to="/food" className="catagory__link">
          <p className="catagory__title">Food</p>
          <img
            src="https://images.unsplash.com/photo-1534766438357-2b270dbd1b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM4MDY2MDd8&ixlib=rb-4.0.3&q=85"
            alt=""
            className="catagory__image"
          />
        </a>
      </li>
      <li className="catagory__item">
        <a to="shoes" className="catagory__link">
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

  .catagory__link {
    font-weight: 600;
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
    z-index: 1;
  }
  /* margins */

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
