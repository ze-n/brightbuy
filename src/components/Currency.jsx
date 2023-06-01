import React from "react";

const Currency = ({ price }) => {
  let formatedPrice = Intl.NumberFormat("En-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price);
  return <p>{formatedPrice}</p>;
};

export default Currency;
