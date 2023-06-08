import React, { useState, useEffect } from "react";
import defaultAvatar from "../../assets/defaultAvatar.png";
import { styled } from "styled-components";
import { useAuth } from "../../context/UserAuthContext";
const UserDp = () => {
  const { currentUser } = useAuth();

  // initializing userAvatar state with defaultAvatar
  const [userAvatar, setUserAvatar] = useState(defaultAvatar);
  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      // console.log("hi this worked");
      // if user is logged in updating UserAvtar to photoURL of currentUser
      setUserAvatar(currentUser.photoURL);
    }
  }, [currentUser]);
  return (
    <Wrapper>
      <img src={userAvatar} alt="Avatar" />
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
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export default UserDp;
