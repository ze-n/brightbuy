import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/UserAuthContext";
import { styled } from "styled-components";
const UpdateName = () => {
  const { currentUser, UpdateName } = useAuth();
  const [userName, setUserName] = useState("");
  const [newName, setNewName] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.displayName);
      console.log("name is ", currentUser.displayName);
    }
  }, [currentUser]);
  const handleChange = (e) => {
    setNewName(e.target.value);
    console.log(newName);
  };
  const handleClick = () => {
    if (currentUser) {
      UpdateName(currentUser, newName, setLoading);
    }
  };
  return (
    <Wrapper>
      <label htmlFor="newname" className="newname-label">
        Update Name
      </label>
      {currentUser && (
        <p className="oldname">
          <span className="bold">Old Name : </span>
          {userName}
        </p>
      )}
      <input
        type="text"
        name="FullName"
        id="newname"
        onChange={handleChange}
        placeholder="Write new name"
      />
      <button
        disabled={newName.trim().length < 4 && !isLoading}
        onClick={handleClick}
      >
        Update name
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
  /* margins*/
  --margin: 1.5rem;
  .newname-label,
  .oldname,
  #newname {
    margin-bottom: var(--margin);
  }
`;
export default UpdateName;
