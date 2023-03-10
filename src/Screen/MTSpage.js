import { useState, useEffect, useContext } from "react";
import AdmitCard from "../Components/AdmitCard";
import MTSForm from "../Components/MTSForm";
import userStore from "../store/userStore";
import Payment from "../UI/Payment";
import AuthContext from "../store/AuthContext";

const MTSpage = () => {

  const { manasInstance } = useContext(AuthContext);

  const userId = userStore(state => state.userId);
  const [paidStatus, setPaidStatus] = useState(0);

  const showPaymentHandler = async (paymentStatus) => {
    const res = await manasInstance.updateData(userId,{ paymentStatus });
    if (res.status === 201) {
      setPaidStatus(res.data.user.paymentStatus);
    }
  }

  useEffect(() => {
    const loadUser = async () => {
      const res = await manasInstance.getUserData(userId);
      if (res.status === 200) {
        setPaidStatus(res.data.userRes.paymentStatus);
      }
    };
    loadUser();
  }, [userId, manasInstance, paidStatus]);

  return (
    <>
      {(paidStatus === 1 )&& <MTSForm paymentHandler={showPaymentHandler} />}
      {(paidStatus === 2) && <Payment paymentHandler={showPaymentHandler} />}
      {(paidStatus === 3) && <AdmitCard />}
    </>
  );
};

export default MTSpage;