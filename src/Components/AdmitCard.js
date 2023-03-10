import { useContext } from "react";
import AuthContext from "../store/AuthContext";
import styles from "./MTSForm.module.css"

const AdmitCard = () => {
  const { manasInstance } = useContext(AuthContext);

  const generateAdmitCardHandler = async () => {
    const res = await manasInstance.generateAdmitCard();
    const buffer = res.data.data.data;
    const file = new Blob([new Uint8Array(buffer)], {
      type: "application/pdf",
    });

    const fileURL = URL.createObjectURL(file);

    window.open(fileURL);
  };

  return (
    <>
      <div className={styles.admitCard}>
        Please download the AdmitCard
        <button onClick={generateAdmitCardHandler}>Generate admit card</button>
      </div>
    </>
  );
};

export default AdmitCard;
