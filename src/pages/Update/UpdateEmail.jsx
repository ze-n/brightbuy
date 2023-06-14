import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/UserAuthContext";
import { styled } from "styled-components";
const UpdateName = () => {
  const { currentUser, UpdateEmail, storeOrUpdateUserData } = useAuth();
  const [userEmail, setUserEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setUserEmail(currentUser.email);
      console.log("Email is ", currentUser.email);
    }
  }, [currentUser]);
  const handleChange = (e) => {
    setNewEmail(e.target.value);
    console.log(newEmail);
  };
  const handleClick = () => {
    UpdateEmail(currentUser, newEmail, setLoading);
  };
  return (
    <Wrapper>
      <label htmlFor="newemail" className="newemail-label">
        Update Email
      </label>
      {currentUser && (
        <p className="oldemail">
          <span className="bold">Old Email : </span>
          {userEmail}
        </p>
      )}
      <input
        type="email"
        name="email"
        id="newemail"
        onChange={handleChange}
        placeholder="Write new email"
      />
      <button
        disabled={newEmail.trim().length < 4 && !isLoading}
        onClick={handleClick}
      >
        Update Email
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  input {
    background: none;
  }
  button {
    color: var(--bg-update-page);
  }
  /*  */
  /* typography */
  /*  */

  label {
    font-size: var(--fs-label);
    font-weight: 600;
  }
  ::placeholder,
  input {
    font-size: var(--fs-placeholder);
  }
  /*  */
  /* layout */
  /*  */
  /* displaying children in column direction */
  display: flex;
  flex-direction: column;

  /* giving border bottom */
  input {
    border: none;
    border-bottom: 1px solid var(--clr-update-page);
  }
  /* removing outline of focus state */
  input:focus {
    outline: none;
  }
  /* padding */
  input,
  ::placeholder {
    padding-bottom: 0.5rem;
  }
  /* margins*/
  --margin: 1.5rem;
  .newemail-label,
  .oldemail,
  #newemail {
    margin-bottom: var(--margin);
  }
`;
export default UpdateName;
