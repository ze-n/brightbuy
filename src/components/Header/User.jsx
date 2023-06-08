import React, { useState } from "react";
import { styled } from "styled-components";
import UserDp from "./UserDp";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/UserAuthContext";

const User = () => {
  const { currentUser, UserLogout } = useAuth();
  // this state decides if user-menu will be shown or not
  const [showUserMenu, setShowUserMenu] = useState("false");
  return (
    <Wrapper>
      {/* user dp */}
      <div
        className="user-dp"
        onClick={() => {
          setShowUserMenu(!showUserMenu);
        }}
      >
        <UserDp />
      </div>
      {/* user-menu */}
      <div
        className={showUserMenu ? "user-menu" : "user-menu show-user-menu"}
        onClick={() => {
          setShowUserMenu(!showUserMenu);
        }}
      >
        {!currentUser && (
          <Link to="/signup" className="user-menu__link">
            Sign up
          </Link>
        )}
        {!currentUser && (
          <Link to="/login" className="user-menu__link">
            Log in
          </Link>
        )}

        {currentUser && (
          <Link to="/" className="user-menu__link" onClick={() => UserLogout()}>
            Log Out
          </Link>
        )}
        {currentUser && (
          <Link className="user-menu__link" to="/update">
            Update
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  .user-menu {
    background-color: var(--bg-header);
  }
  .user-menu {
    border-color: var(--clr-header);
  }

  /*  */
  /* typography */
  /*  */
  .user-menu__link {
    font-size: 0.9rem;
  }
  /*  */
  /* layout */
  /*  */

  position: relative;
  /* this will be used to position user-menu */

  /* want links to appear on seperate lines */
  .user-menu__link {
    display: block;
  }
  /* positioning user-menu and also giving it width */
  .user-menu {
    position: absolute;
    right: 0;
    top: 4rem;
    z-index: 5;
    width: max-content;
  }
  /* border */
  .user-menu {
    border: 1px solid;
  }
  /* padding */
  .user-menu {
    padding: 2rem;
  }
  /* margins */
  .user-menu__link:first-of-type {
    margin-bottom: 0.5rem;
  }
  /*  */
  /* animation */
  /*  */

  /* hide user-menu by default */
  .user-menu {
    clip-path: circle(0.4% at 100% 0);
    transition: clip-path 0.3s ease;
  }
  /* show user menu */
  .show-user-menu {
    clip-path: circle(141.4% at 100% 0);
  }
`;
export default User;
