import { useState } from "react";
import AdmitCard from "../Components/AdmitCard";
import MTSForm from "../Components/MTSForm";
import userStore from "../store/userStore";
import Payment from "../UI/Payment";

const MTSpage = () => {

  const isPaid = userStore(state => state.isPaid);
  const setIsPaid = userStore(state => state.setIsPaid);
  const [ showPayment, setShowPayment ] = useState(false);

  const showPaymentHandler = (isPaid) => {
    setShowPayment(state => !state);
    setIsPaid(isPaid);
  }

  return (
    <>
      {!showPayment && !isPaid && <MTSForm paymentHandler={showPaymentHandler} />}
      {showPayment && !isPaid && <Payment paymentHandler={showPaymentHandler} />}
      {isPaid && <AdmitCard/>}
    </>
  )
};

export default MTSpage;