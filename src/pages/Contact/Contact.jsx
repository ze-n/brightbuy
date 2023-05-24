import React from "react";
import { styled } from "styled-components";
import ContactForm from "./ContactForm";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Contact = () => {
  return (
    <Wrapper>
      <div className="container flex-columns">
        {/* text-container */}
        <div className="flex-column text-container">
          {/* title */}
          <h2 className="title">Contact Us</h2>
          {/* contact info */}
          <div className="contact-info-container">
            {/* address */}
            <div className="address contact-info">
              <CiLocationOn className="address__icon contact-info__icon" />
              <span className="address__text text-regular contact-info__text">
                Central University of Himachal Pradesh (Shahpur Campus)
              </span>
            </div>
            {/* email */}
            <div className="email contact-info">
              <CiMail className="email__icon contact-info__icon" />
              <a
                href="mailto:brightbuy@gmail.com"
                className="email__text text-regular contact-info__text"
              >
                brightbuy@gmail.com
              </a>
            </div>
            {/* phone */}
            <div className="phone contact-info">
              <CiPhone className="phone__icon contact-info__icon" />
              <a
                href="tel:+91 9898989989"
                className="phone__text text-regular contact-info__text"
              >
                +91 9898989989
              </a>
            </div>
          </div>
        </div>
        {/* contact-form container */}
        <div className="contact-form-container flex-column">
          {/* contact form */}
          <ContactForm />
        </div>
      </div>
      {/* google map  */}
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.2477793998182!2d76.15402567639224!3d32.22449421201602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5ea0362d1c07%3A0x4b75f266ab9a9cc7!2sCentral%20University%20of%20Himachal%20Pradesh%20(Shahpur%20Campus)!5e0!3m2!1sen!2sin!4v1684843262662!5m2!1sen!2sin"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-contact-page);
  color: var(--clr-contact-page);
  /* applying filter to map to make it look little grayish  */
  --grays: 40%;
  .map {
    -webkit-filter: grayscale(var(--grays));
    -moz-filter: grayscale(var(--grays));
    -ms-filter: grayscale(var(--grays));
    -o-filter: grayscale(var(--grays));
    filter: grayscale(var(--grays));
  }

  /*  */
  /* typography */
  /*  */

  .contact-info__text {
    max-width: 30ch;
  }

  /*  */
  /* layout */
  /*  */
  /* want a big address icon */
  --size: 1.8rem;
  .contact-info__icon {
    min-width: var(--size);
    min-height: var(--size);
  }
  /* padding */
  /* giving padding top */
  .container {
    padding-top: 2rem;
  }
  /* giving more padding top to text container so it aligns with padding 
  that is given inside contact form component */
  .text-container {
    padding-top: 3rem;
    padding-inline: var(--pinline);
  }
  /* padding inline is given seperatly
because gonna remove pinline from contact form container on smaller devices
*/
  .contact-form-container {
    padding-inline: var(--pinline);
  }
  .map {
    /* giving dimensions */
    width: 100vw;
    height: 400px;
    /* pulling map towards top  */
    position: relative;
    top: -5rem;
  }
  /* bringing contact form to front */
  .contact-form-container {
    position: relative;
    z-index: 2;
  }
  /* giving some gap between contact-info */
  .contact-info-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  /* bringing icon and text in same row */
  /* and also giving some gap between them */
  .contact-info {
    display: flex;
    gap: 0.5rem;
  }

  /* margins */

  /* creating some margin between title and address */
  .title {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1100px) {
    /* because of less space this had to be done */
    .container {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 750px) {
    /* removing padding inline because of less space and alignment also looks better */
    .contact-form-container {
      padding-inline: 0;
    }
    /* briging map to original position */
    .contact-form-container,
    .map {
      position: static;
    }
    /* removing padding top because text container already have enough padding top for smaller devices */
    .container {
      padding-top: 0rem;
    }
  }
`;

export default Contact;
