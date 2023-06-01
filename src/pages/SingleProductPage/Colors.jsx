import React, { useState } from "react";
import { styled } from "styled-components";
const Colors = ({ colors }) => {
  const [color, setColor] = useState(colors[0]);
  return (
    <Wrapper>
      <h2 className="heading">Colors</h2>
      <div className="colors">
        {colors.map((curEle) => {
          return (
            <div
              className={color === curEle ? "color active" : "color"}
              style={{ "--bg-color": curEle, color: curEle }}
              onClick={() => setColor(curEle)}
            ></div>
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
  /* setting up variable default values. */
  /* this value will be changed using inline css */
  --bg-color: black;
  .color {
    background-color: var(--bg-color);
  }

  /*  */
  /* layout */
  /*  */
  /* this represent height and width of color element */
  --color-size: 2.4rem;

  /* arraging color elements in same row and adding some gap */
  .colors {
    display: flex;
    gap: 0.6rem;
  }
  /* this variable represents width of outline */
  --outline-width: 2px;
  .color {
    /* setting up width and height */
    width: var(--color-size);
    height: var(--color-size);
    /* making cursor pointer */
    cursor: pointer;
    /* making color element circular from square */
    border-radius: 40rem;
    /* setting up outline and making it transparent for smooth animation on hover and when .active class is on */
    outline: var(--outline-width) solid transparent;
    /* adding some outline offset */
    outline-offset: 0.1rem;
    /* reducing opacity so that colors seem faded */
    /* opacity will be changed to 1 in .active class */
    opacity: 0.7;
    /* adding trasnsition for outline and opacity */
    transition: outline 0.4s ease, opacity 0.4s ease;
  }
  .color:hover {
    /* on hover color of outline will change from transparent to this */
    outline: var(--outline-width) solid var(--bg-color);
  }

  .active {
    /* when this class is on outline color will be changed to this */
    outline: var(--outline-width) solid var(--bg-color);
    /* opacity of element will also be full */
    opacity: 1;
  }

  /* margins */
  /* adding some margin between heading and colors */
  .heading {
    margin-bottom: 0.5rem;
  }
`;
export default Colors;
