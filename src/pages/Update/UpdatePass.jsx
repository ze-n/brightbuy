import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/UserAuthContext";
import { styled } from "styled-components";
const UpdateName = () => {
  const { currentUser, UpdatePassword, storeOrUpdateUserData } = useAuth();
  const [userPassword, setUserPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setUserPassword(currentUser.password);
      console.log("password is ", currentUser.password);
    }
  }, [currentUser]);
  const handleChange = (e) => {
    setNewPassword(e.target.value);
    console.log(newPassword);
  };
  const handleClick = () => {
    UpdatePassword(currentUser, newPassword, setLoading);
  };
  return (
    <Wrapper>
      <label htmlFor="newpassword" className="newpassword-label">
        Update Password
      </label>
      {currentUser && (
        <p className="oldpassword">
          <span className="bold">Old Password : </span>
          {userPassword}
        </p>
      )}
      <input
        type="password"
        name="password"
        id="newpassword"
        onChange={handleChange}
        placeholder="Write new password"
      />
      <button
        disabled={newPassword.trim().length < 4 && !isLoading}
        onClick={handleClick}
      >
        Update Password
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
  .newpassword-label,
  .oldpassword,
  #newpassword {
    margin-bottom: var(--margin);
  }
`;
export default UpdateName;
