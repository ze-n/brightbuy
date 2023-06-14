import React, { useState } from "react";
import { useAuth } from "../../context/UserAuthContext";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
const DeleteAccount = () => {
  const Navigate = useNavigate();
  const { DeleteUser, currentUser } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => {
    if (currentUser) {
      DeleteUser(currentUser, setLoading);
      Navigate("/");
    }
  };

  return (
    <Wrapper>
      <label htmlFor="delete-account" className="delete-account-label">
        Delete Account
      </label>
      <button id="delete-account" onClick={handleClick} disabled={isLoading}>
        Delete Account
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  #delete-account {
    border: none;
    background: var(--clr-red-500);
  }

  /*  */
  /* typography */
  /*  */
  label {
    font-size: var(--fs-label);
    font-weight: 600;
  }
  #delete-account {
    font-weight: 600;
  }
  /*  */
  /* layout */
  /*  */
  /* placing children in column direction */
  display: flex;
  flex-direction: column;

  /* padding */
  #delete-account {
    padding-inline: 1rem;
    padding-block: 0.5rem;
  }
  /* margins */
  label {
    margin-bottom: 1.5rem;
  }

  #delete-account {
    cursor: pointer;
  }
`;

export default DeleteAccount;
