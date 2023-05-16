import React from "react";
import SocialButtonList from "../SocialButtonList";
import { styled } from "styled-components";
import Title from "../Title";
const FooterContact = () => {
  return (
    <Wrapper>
      <Title title="Contact Us" />
      <div className="outlined-links">
        <a href="#" className="email outlined-link">
          brightbuy@gmail.com
        </a>
        <a href="#" className="call outlined-link last-link">
          +91 8889998889
        </a>
      </div>
      <SocialButtonList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* layout */
  /*  */

  .outlined-link {
    /* sincle links are inline and padding will not work */
    display: block;
    /* giving padding */
    padding-inline: 1rem;
    padding-block: 0.5rem;
    /* giving border */
    border: 1px solid var(--clr-white);
    /* creating some space between outlined-link */
    margin-bottom: 1rem;
    /* do not want it to take whole width */
    max-width: 25ch;
  }
  .last-link {
    margin-bottom: 0;
    /* removing margin bottom from last link */
  }

  /* giving some space between outlined-links and social links */
  .outlined-links {
    margin-bottom: 2rem;
  }
`;

export default FooterContact;
