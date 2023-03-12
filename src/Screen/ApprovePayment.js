import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/AuthContext";

const ApprovePayment = () => {
  const { manasInstance } = useContext(AuthContext);
  const [studentList, setStudentList] = useState([]);
  const [ statechange, setStateChange] = useState(true);

  useEffect(()=> {
    const loadData = async () => {
      const res = await manasInstance.getAllStudents();
      if (res.status === 200) {
        setStudentList(res.data.studentList.filter(student => student.paymentStatus === 2));
        setStateChange(false);
      }
    }
    if(statechange) 
      loadData();
  },[manasInstance, statechange]);

  const markPaidHandler = async (studentId) => {
    const res = await manasInstance.changePaymentStatus(studentId, 3);
    if (res.status === 200) {
      setStateChange(true);
    }
  }

  return (
    <div>
      <h2>Approve Payemnt</h2>
      {studentList.map((student, index) => {
        return (
          <div key={index}>
            <h3>{student.registration}</h3>
            <div>{student.firstname} {student.lastname}</div>
            <button onClick={() => markPaidHandler(student._id)}>Mark paid</button>
          </div>
        )
      })}
    </div>
  )
};

export default ApprovePayment;