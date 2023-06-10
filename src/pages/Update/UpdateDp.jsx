import React, { useState } from "react";
import { styled } from "styled-components";
import { useAuth } from "../../context/UserAuthContext";
import UserDp from "../../components/Header/UserDp";
const UpdateDP = () => {
  const { currentUser, UploadAvatar } = useAuth();
  const [photo, setPhoto] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  const handleClick = () => {
    UploadAvatar(photo, currentUser, setLoading);
  };
  return (
    <Wrapper>
      <div>
        <label htmlFor="userDp" className="userDp-label">
          Update Image
        </label>
        <input
          type="file"
          id="userDp"
          name="userDp"
          onChange={handleChange}
          className="input"
        />
        <UserDp />
      </div>
      <button
        disabled={isLoading || !photo}
        onClick={handleClick}
        className="upload-btn"
      >
        Upload
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  .upload-btn {
    color: var(--bg-update-page);
  }
  /*  */
  /* typography */
  /*  */
  label {
    font-size: var(--fs-label);
    font-weight: 600;
  }

  /*  */
  /* layout */
  /*  */
  /* making everything appear in column direction */
  display: flex;
  flex-direction: column;
  label,
  input {
    display: block;
  }
  /* margins */
  .userDp-label {
    margin-bottom: 1.5rem;
  }
  .input {
    margin-bottom: 1.5rem;
  }
  .upload-btn {
    margin-top: 1.5rem;
  }
`;

export default UpdateDP;
