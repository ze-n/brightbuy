import React from "react";
import { styled } from "styled-components";
import ArrowBtn from "../../components/ArrowBtn";
const ContactForm = () => {
  return (
    <Wrapper
      className="contact-form"
      action="https://formspree.io/f/xknaajnp"
      method="POST"
    >
      {/* greetings */}
      <p className=" subtitle | greeting"> Say hi !</p>
      {/* this container used to put name and email on same line on big screens flex-columns does that */}
      <div className="flex-columns | name-email-container ">
        {/* name container */}
        <div className="name-container input-container">
          <label htmlFor="#name" className="label-text">
            Name
          </label>
          <span className="input">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Write yout name"
              required
            />
            <span className="animated-line"></span>
          </span>
          {/* email container */}
        </div>
        <div className="email-container input-container">
          <label htmlFor="email" className="label-text">
            Email
          </label>
          <span className="input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required
            />
            <span className="animated-line"></span>
          </span>
        </div>
      </div>
      {/* message container */}
      <div className=" message-container input-container ">
        <label htmlFor="message" className="label-text">
          Message
        </label>
        <span className="input">
          <textarea
            name="message"
            id="message"
            className="message"
            cols="20"
            rows="2"
            placeholder="Write your message here"
            required
          ></textarea>
          <span className="animated-line"></span>
        </span>
      </div>
      <ArrowBtn
        text="Submit"
        fw="600"
        arrowWidth="4.2rem"
        animDuration=".2s"
        animeScale="1.5"
      />
    </Wrapper>
  );
};
const Wrapper = styled.form`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-contact-form);
  color: var(--clr-contact-form);

  /* changing placeholder text color */
  ::placeholder {
    color: var(--clr-contact-form);
  }
  /* removing background color */
  .input-container :where(input, textarea) {
    background: none;
    border: none;
    outline: none;
  }
  /*  */
  /* typography */
  /*  */
  .label-text {
    font-weight: 600;
  }
  /* setting up font for placeholder */
  ::placeholder {
    font-weight: 400;
    font-size: var(--fs-placeholder);
    line-height: var(--lh-placeholder);
  }

  /*  */
  /* layout */
  /*  */

  /* showing label on their own lines */
  label {
    display: block;
  }

  /* padding */
  padding-inline: 4rem;
  padding-block: 4rem;
  .input-container :where(input, textarea) {
    padding-inline: 0.5rem;
    padding-block: 0.5rem;
  }

  /* margins */
  .greeting {
    margin-bottom: 3rem;
  }
  .name-email-container {
    margin-bottom: 2rem;
  }
  .message-container {
    margin-bottom: 3rem;
  }
  label {
    margin-bottom: 1rem;
  }

  /*  */
  /* aniamtion  */
  /*  */

  /* this will be used to place animated-line */
  .input {
    position: relative;
  }
  .animated-line {
    content: "";
    /* setting up position */
    position: absolute;
    left: 0;
    bottom: -1rem;
    /* setting up dimensions */
    width: 100%;
    height: 1px;
    /* setting up background color */
    background: var(--clr-contact-form);
    /* animation */
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }
  /* when input is in focused state its sibling animated-line will animate */
  input:focus ~ .animated-line,
  textarea:focus ~ .animated-line {
    transform: scaleX(1);
  }
  @media screen and (max-width: 1100px) {
    /* want to reduce padding inline of form on smaller devices */
    padding-inline: var(--pinline);
  }
`;

export default ContactForm;
