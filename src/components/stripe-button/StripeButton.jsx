import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51JHA3ISHAS2IzWlQywTQdISluOQTZqytaxNcvboBUlj9v3plpzEbBqEzzqpbCKE3D4zx3nLLnnQ4WA7sH6QnAZYK00qrRKRFsQ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeButton;
