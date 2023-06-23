import React, { useState } from "react";
import { styled } from "styled-components";
import ArrowBtn from "../../components/ArrowBtn";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UserAuthContext";

const Login = () => {
  const { UserLogin } = useAuth();
  const [err, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // takes e an event object as argument which is an event object triggerd by user interaction
  // such as form input fields.
  const UserHandler = (e) => {
    // destructure name and value from e.target object
    const { name, value } = e.target;
    // updating state of user
    setUser((pre) => {
      return {
        //  spread operator (...) is used to create a copy of the previous state (pre),
        //  preserving any existing properties.
        ...pre,
        // properties of user object are changed dynamically
        // by using name attribue and value attribute of input fields.
        [name]: value,
      };
    });
  };
  // this will be called when user clicks login button

  // e is the submission event triggered by the user
  const SubmitHandler = async (e) => {
    // prevent the default form submission behavior,
    // which typically involves refreshing the page.
    e.preventDefault();
    // extracting email and password from user object
    const { email, password } = user;
    // checking if email and password fields are empty,
    // then return method which updates error state respectively.

    if (email == "" || password == "") {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("Fill All the Field");
    }
    // call UserLogin method which returns a promise so we need to use await here
    try {
      await UserLogin(email, password);
      // navigate to home page if everything is good
      navigate("/brightbuy");
    } catch (error) {
      // setting respective error messages
      if (error.code == "auth/user-not-found") {
        // setInterval is used to remove after 5 seconds
        // and then we immediatly set the error
        // so basically error will be shown for 5 seconds and then method inside
        // setInterval will be called.
        setInterval(() => {
          setError("");
        }, 5000);
        return setError("User Not Found");
      } else if (error.code == "auth/wrong-password") {
        setInterval(() => {
          setError("");
        }, 5000);
        return setError("Wrong Password");
      } else {
        setInterval(() => {
          setError("");
        }, 5000);
        return setError(`${error.message}`);
      }
    }
  };
  return (
    <Wrapper>
      <div className="container">
        <form action="#" className="form" onSubmit={SubmitHandler}>
          {/* if there is any error message then execute p element statement otherwise don't */}
          {err && <p className="error">{err}</p>}
          {/* email code */}
          <div className="email input-container">
            <label htmlFor="email ">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              name="email"
              onChange={UserHandler}
              required
            />
          </div>
          {/* password code */}
          <div className="password input-container">
            <label htmlFor="password ">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
              name="password"
              onChange={UserHandler}
              required
            />
          </div>
          {/* login submit button */}
          <ArrowBtn arrowHeight=".7rem" arrowWidth="4rem">
            Log in
          </ArrowBtn>

          {/* or sign up if don't have account */}
          <div className="signup-container">
            <Link to="/signup" className="signup">
              or sign-up now
            </Link>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-login-page);
  color: var(--clr-login-page);
  input {
    background: transparent;
    border: none;
  }
  .signup {
    color: var(--clr-orange-400);
  }
  input {
    border-color: var(--clr-login-page);
  }
  .form {
    border-color: #999 !important;
  }
  .error {
    color: var(--clr-error);
  }

  /*  */
  /* typography */
  /*  */
  ::placeholder,
  input {
    font-size: var(--fs-placeholder);
  }
  label {
    font-size: var(--fs-label);
    font-weight: 600;
  }

  /* or sign up adding that wavy underline */
  .signup,
  .error {
    font-weight: 600;
    text-decoration: underline wavy 2px;
    text-underline-offset: 0.4rem;
  }

  /*  */
  /* layout */
  /*  */

  /* making form appear in center  */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* padding */
  /* adding padding to entire page */
  --pblock: 10rem;
  padding-inline: var(--pinline);
  padding-block: var(--pblock);
  /* adding padding to form */
  .form {
    padding: 3rem;
  }
  input {
    padding-block: 0.5rem;
  }
  /* making label take all the width */
  label {
    display: block;
  }
  /* addign some border to form  */
  .form {
    border: 1px solid;
  }

  /* margins */

  label {
    margin-bottom: 0.5rem;
  }
  .input-container {
    margin-bottom: 2rem;
  }
  input {
    border-bottom: 1px solid;
  }
  .signup-container {
    margin-top: 1rem;
  }
  .error {
    margin-bottom: 1rem;
  }
  /* states */
  input:focus,
  input:active {
    outline: none;
  }
  /* others */
  .signup {
    cursor: pointer;
  }
`;
export default Login;
