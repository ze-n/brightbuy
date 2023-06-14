import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import ArrowBtn from "../../components/ArrowBtn";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UserAuthContext";

const Signup = () => {
  const navigate = useNavigate();
  // extracting error Signup and currentUser
  const { error, SignUp, currentUser } = useAuth();
  // creating state for err
  const [err, setError] = useState("");
  // creating
  const [backError, setBackError] = useState("");
  // creating user state and initializing it with object having various properties
  const [user, setUser] = useState({
    FullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // this effect runs whenever error or currentUser changes
  useEffect(() => {
    console.log("i am in");
    if (error) {
      // set backError to empty after 5 seconds and till then  set backError to error
      setInterval(() => {
        setBackError("");
      }, 5000);
      setBackError(error);
    }
  }, [error, currentUser]);

  // takes e an event object as argument which is an event object triggerd by user interaction
  // such as form input fields.
  const UserHandler = (e) => {
    // extract name and value from e.target object
    const { name, value } = e.target;
    // console.log(name + "::::::::::" + value);
    setUser((pre) => {
      return {
        // preserving previous values
        ...pre,
        // properties of user object are changed dynamically
        // by using name attribue and value attribute of input fields.
        [name]: value,
      };
    });
  };

  // this will be called when user clicks signup button

  // e is the submission event triggered by the user
  const SubmitHandler = async (e) => {
    //  prevent the default form submission behavior,
    //  which typically involves refreshing the page.
    e.preventDefault();
    // extracting the email, password, confirmPassword,
    // and FullName properties from the user state object.
    const { email, password, confirmPassword, FullName } = user;
    // If any of the required fields are empty,
    // it sets a timer to clear the setError after 5 seconds and then sets the
    //  setError with the message "please fill All the field".
    if (
      password == "" ||
      confirmPassword == "" ||
      email == "" ||
      FullName == ""
    ) {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("please fill All the field ");
    }
    // if password and confirm password do not match
    else if (password !== confirmPassword) {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("Password does not match");
    }
    // if password length is too short
    else if (!password.length >= 6 || !confirmPassword.length >= 6) {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("Password Must be Greater then 6 Length");
    }
    // Calls SignUp method to create account
    else {
      const userData = {
        Fullname: user.FullName,
        Password: user.password,
        Email: user.email,
      };
      await SignUp(userData);

      {
        currentUser &&
          setUser({
            FullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
      }
      navigate("/");
    }
  };
  return (
    <Wrapper>
      <div className="container">
        <form action="#" className="form" onSubmit={SubmitHandler}>
          {/* if any error or backerror show them */}
          {err
            ? err && <p className="error">{err}</p>
            : backError && <p className="error">{backError}</p>}

          {/* name */}
          <div className="name input-container">
            <label htmlFor="name  ">FullName</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={user.FullName}
              name="FullName"
              onChange={UserHandler}
            />
            {/* email */}
          </div>
          <div className="email input-container">
            <label htmlFor="email ">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              name="email"
              onChange={UserHandler}
            />
          </div>
          {/* password */}
          <div className="password input-container">
            <label htmlFor="password ">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
              name="password"
              onChange={UserHandler}
            />
          </div>
          {/* confirm password */}
          <div className="password input-container">
            <label htmlFor="password ">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Enter your password"
              value={user.confirmPassword}
              name="confirmPassword"
              onChange={UserHandler}
            />
          </div>
          {/* signup button */}
          <ArrowBtn arrowHeight=".7rem" arrowWidth="4.7rem">
            Sign up
          </ArrowBtn>
          {/* or login  */}
          <div className="login-container">
            <Link to="/login" className="login">
              or log-in now
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
  .login {
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
  .login,
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
  .login-container {
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
  .login {
    cursor: pointer;
  }
`;
export default Signup;
