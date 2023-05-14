import React from "react";
import userImg from "../assets/uesrDp.png";
import { styled } from "styled-components";
const UserDp = () => {
  return (
    <Wrapper>
      <img src={userImg} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* layout */
  --size: 2.5rem;
  width: var(--size);
  height: var(--size);
  border-radius: 1000px;
  overflow: hidden;
`;

export default UserDp;
