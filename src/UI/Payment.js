import React, { useEffect, useContext } from "react";
import styles from "./Payment.module.css";
import AuthContext from "../store/AuthContext";

const Payment = (props) => {
  const { manasInstance } = useContext(AuthContext);

  const displayRazorpay = async () => {
    const data = await manasInstance.makePayment(1);
    const options = {
      key: process.env.REACT_APP_YOUR_KEY_ID,
      currency: data.data.currency,
      amount: data.data.amount,
      description: "MTS Form Payment",
      order_id: data.data.id,
      handler: async function (response) {
        props.paymentHandler(3);
      },
      prefill: {
        name: props.name,
        email: props.email,
        contact: props.contact,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <React.Fragment>
      <div className={styles.container}>
        <button
          className={styles.back}
          onClick={() => {
            props.paymentHandler(1);
          }}
        >
          Back
        </button>
        <button
          className={styles.makePayment}
          type="button"
          onClick={displayRazorpay}
        >
          Make Payment
        </button>
      </div>
    </React.Fragment>
  );
};

export default Payment;
