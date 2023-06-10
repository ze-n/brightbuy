import React from "react";
import { styled } from "styled-components";
import UpdateDp from "./UpdateDp";
import UpdateName from "./UpdateName";
const Update = () => {
  return (
    <Wrapper>
      <div className="container">
        <UpdateDp />
        <UpdateName />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-update-page);
  color: var(--clr-update-page);
  /*  */
  /* layout */
  /*  */

  .container {
    /* making sure all children appear in column direction */
    display: flex;
    flex-direction: column;
    /* making sure children appear in center */
    justify-content: center;
    align-items: center;
    /* giving some gap to children */
    gap: 2rem;
  }
  .container > * {
    /* giving fixed width to all direct children of container */
    width: calc(300px - 2rem);
    /* align-items: stretch; */
  }
  /* padding  */
  --pblock: 5rem;
  padding-inline: var(--pinline);
  padding-block: var(--pblock);
`;
export default Update;
