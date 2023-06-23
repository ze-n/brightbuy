import React from "react";
import { styled } from "styled-components";
import Currency from "./Currency";
const NotificationBar = () => {
  return (
    <Wrapper>
      <p className="text text-small">
        Free Shipping over <Currency price="2000" />
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  background: var(--bg-notification);
  color: var(--clr-notification);
  /*  */
  /* typography */
  /*  */
  font-weight: 600;
  /*  */
  /* layout */
  /*  */
  /* giving some padding */
  --pinline: 3rem;
  padding-inline: var(--pinline);
  padding-block: 0.2rem;
  /* aliging text in center */
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    text-align: center;
  }
  p {
    display: flex;
    gap: 0.3rem;
  }
`;
export default NotificationBar;
