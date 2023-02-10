import { useReducer, useContext, useEffect } from "react";
import AuthContext from "../store/AuthContext";
import userStore from "../store/userStore";

const inputReducer = (state, actions) => {
  if (actions.type === "INPUT_CHANGE") {
    return { ...state, [actions.input.name] : actions.input.value };
  }
  if (actions.type === "INPUT_LOAD") {
    return { ...actions.input };
  }
  return { ...state };
};

const MTSForm = (props) => {

  const { manasInstance } = useContext(AuthContext); 
  const userId = userStore(state => state.userId);

  const [inputValue, dispatchInput] = useReducer(inputReducer, {
    firstname: '',
    lastname: '',
    dob: '',
    fathername: '',
    mothername: '',
    address: '',
    city: '',
    state: '',
    pincode: undefined,
    phone: undefined,
    guardianPhone: undefined,
    email: '',
    avatar: '',
    signature: '',
    parentsign: '',
  })

  const inputChangeHandler = (e) => {
    dispatchInput({ type: 'INPUT_CHANGE', input: e.target })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await manasInstance.updateData(userId, inputValue)
    if(res.status === 201){
      props.paymentHandler();
    }
  }

  const profilePicHandler = async (e) => {
    const file = e.target.files[0];
    console.log(e.target.name, e.target.files[0]);
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    console.log(bytes);
  }

  useEffect(() => {
    const loadUser = async () => {
      const res = await manasInstance.getUserData(userId);
      if(res.status === 200) {
        dispatchInput({ type: 'INPUT_LOAD', input: res.data.userRes })
      }
    }
    loadUser();
  }, [userId, manasInstance])

  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input required type="text" name="firstname" value={inputValue.firstname} onChange={inputChangeHandler} />
      <label>Name</label>
      <input required type="text" name="lastname" value={inputValue.lastname} onChange={inputChangeHandler} />
      <br></br> 
      <div>
        Applying for:
        <label>Xth pass</label>
        <input required type="radio" name="class" value="10" />
        <label>XIth pass</label>
        <input type="radio" name="class" value="11" />
        <label>XIIth pass</label>
        <input type="radio" name="class" value="12" />
      </div>
      <br></br>
      <div>
        Gender:
        <label>Male</label>
        <input required type="radio" name="gender" value="male" />
        <label>Female</label>
        <input type="radio" name="gender" value="female" />
      </div>
      <label>Date of birth</label>
      <input required type="date" name="dob" value={inputValue.dob} onChange={inputChangeHandler} />
      <label>Father's Name</label>
      <input required type="text" name="fathername" value={inputValue.fathername} onChange={inputChangeHandler} />
      <label>Mother's Name</label>
      <input required type="text" name="mothername" value={inputValue.mothername} onChange={inputChangeHandler} />
      <label>Address</label>
      <input required type="text" name="address" value={inputValue.address} onChange={inputChangeHandler} />
      <label>City</label>
      <input required type="text" name="city" value={inputValue.city} onChange={inputChangeHandler} />
      <label>State</label>
      <input required type="text" name="state" value={inputValue.state} onChange={inputChangeHandler} />
      <label>Pincode</label>
      <input required type="text" name="pincode" value={inputValue.pincode} onChange={inputChangeHandler} />
      <br></br>
      Contact:
      <label>Personal number</label>
      <input required type="text" name="phone" value={inputValue.phone} onChange={inputChangeHandler} />
      <label>Parent's number</label>
      <input required type="text" name="guardianPhone" value={inputValue.guardianPhone} onChange={inputChangeHandler} />
      <label>Email</label>
      <input required type="email" name="email" value={inputValue.email} onChange={inputChangeHandler} />
      <br></br>
      <div>
        Category:
        <label>Gen</label>
        <input required type="radio" name="category" value="general" />
        <label>OBC (NC)</label>
        <input type="radio" name="category" value="obc" />
        <label>SC/ST</label>
        <input type="radio" name="category" value="sc/st" />
        <label>PD</label>
        <input type="radio" name="category" value="pd" />
      </div>
      <input type="file" name="avatar" accept="image/*" onChange={profilePicHandler} />
      <input type="file" name="signature" accept="image/*" onChange={profilePicHandler} />
      <input type="file" name="parentsign" accept="image/*" onChange={profilePicHandler} />
      <button>Next</button>
    </form>
  )
};

export default MTSForm;