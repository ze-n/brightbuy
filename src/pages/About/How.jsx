import React from "react";
import { styled } from "styled-components";
import LeftTextScroll from "../../components/LeftTextScroll";
const How = () => {
  return (
    <Wrapper>
      <LeftTextScroll
        text="About Us"
        slideWidth="110rem"
        shift="-110rem"
        animDuration="15s"
        opacity=".02"
        fontSize="300px"
        top="10rem"
      />
      <div className="container flex-columns">
        <h2 className="flex-column-left section-heading-lg">
          How It All Started
        </h2>
        <div className="story flex-column text-lg">
          <p>
            Welcome to our e-commerce site, created by two guys with a
            <span className="bold"> passion for technology </span> and
            entrepreneurship: Nitish and Ankush.
          </p>
          <p>
            Our journey began when we realized that we had a shared interest in
            building something that would
            <span className="bold"> make a difference in people's lives </span>.
            We knew that e-commerce was a rapidly growing industry, and we saw
            an opportunity to create an online marketplace that would
            <span className="bold">
              {" "}
              offer something unique and valuable to customers
            </span>
            .
          </p>
          <p>
            Our vision for this site is simple:{" "}
            <span className="bold">
              to provide a seamless and enjoyable shopping experience for our
              customers
            </span>
            , while also{" "}
            <span className="bold">
              offering high-quality products at competitive prices
            </span>
            . We believe that by combining the power of technology with our
            entrepreneurial spirit, we can create a platform that not only meets
            but{" "}
            <span className="bold">exceeds our customers' expectations</span>.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-about-how-started);
  color: var(--clr-about-how-started);
  /*  */
  /* padding */
  /*  */
  --pblock: 10rem;
  padding-inline: var(--pinline);
  padding-block: var(--pblock);

  /*  */
  /* layout */
  /*  */
  /* this will be used by text scroll container */
  position: relative;
  .story :where(p) {
    margin-bottom: 2rem;
  }
  .story :where(p):last-child {
    margin-bottom: 0;
  }
  .flex-columns {
    gap: 4rem;
  }

  /* bringing container to top */
  .container {
    position: relative;
    z-index: 2;
  }
`;
export default How;
