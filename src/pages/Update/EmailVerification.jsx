import React from "react";
import { useAuth } from "../../context/UserAuthContext";
import { styled } from "styled-components";

const EmailVerification = () => {
  const { currentUser } = useAuth();
  if (currentUser) {
    console.log("email is verified ", currentUser.emailVerified);
  }
  return (
    <Wrapper>
      <p className="label">Verification Status</p>
      {currentUser.emailVerified ? (
        <p className="success">Email is verified</p>
      ) : (
        <p className="error">Verification email is sent</p>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.p`
  /*  */
  /* colors */
  /*  */
  .success {
    background-color: var(--clr-success);
  }
  .error {
    background-color: var(--clr-error);
  }

  /*  */
  /* typography */
  /*  */
  .success,
  .error {
    text-align: center;
    font-weight: 600;
  }
  .label {
    font-size: var(--fs-label);
    font-weight: 600;
  }

  /*  */
  /* layout */
  /*  */

  .success,
  .error {
    padding-block: 0.5rem;
  }

  /* margins */
  .label {
    margin-bottom: 1rem;
  }
`;

export default EmailVerification;
