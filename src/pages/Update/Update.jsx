import React from "react";
import { styled } from "styled-components";
import UpdateDp from "./UpdateDp";
import UpdateName from "./UpdateName";
import UpdateEmail from "./UpdateEmail";
import UpdatePass from "./UpdatePass";
import DeleteAccount from "./DeleteAccount";
import { useAuth } from "../../context/UserAuthContext";
const Update = () => {
  const { verifyEmail } = useAuth();
  return (
    <Wrapper>
      <div className="container">
        <UpdateDp />
        <UpdateName />
        <UpdateEmail />
        <UpdatePass />
        <DeleteAccount />
        {verifyEmail && (
          <p
            className="email-verification"
            style={{ "--bg-email-verification": "var(--clr-green-450)" }}
          >
            Email is verified
          </p>
        )}
        {!verifyEmail && (
          <p className="email-verification">
            Email is sent verify your account{" "}
          </p>
        )}
        {console.log("email verified ", verifyEmail)}
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
  --bg-email-verification: var(--clr-error);
  .email-verification {
    /* color: var(--bg-update-page); */
    background: var(--bg-email-verification);
  }
  /*  */
  /* typography */
  /*  */
  .email-verification {
    font-weight: 600;
    text-align: center;
  }
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
  .email-verification {
    padding: 0.5rem;
  }
`;
export default Update;
