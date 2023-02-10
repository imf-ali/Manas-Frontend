import { useReducer, useContext, useEffect } from "react";
import AuthContext from "../store/AuthContext";
import userStore from "../store/userStore";
import styles from "./MTSForm.module.css";

const inputReducer = (state, actions) => {
  if (actions.type === "INPUT_CHANGE") {
    return { ...state, [actions.input.name]: actions.input.value };
  }
  if (actions.type === "INPUT_LOAD") {
    return { ...actions.input };
  }
  return { ...state };
};

const MTSForm = (props) => {
  const { manasInstance } = useContext(AuthContext);
  const userId = userStore((state) => state.userId);

  const [inputValue, dispatchInput] = useReducer(inputReducer, {
    firstname: "",
    lastname: "",
    dob: "",
    fathername: "",
    mothername: "",
    address: "",
    city: "",
    state: "",
    pincode: undefined,
    phone: undefined,
    guardianPhone: undefined,
    email: "",
    avatar: "",
    signature: "",
    parentsign: "",
  });

  const inputChangeHandler = (e) => {
    dispatchInput({ type: "INPUT_CHANGE", input: e.target });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await manasInstance.updateData(userId, inputValue);
    if (res.status === 201) {
      props.paymentHandler();
    }
  };

  const profilePicHandler = async (e) => {
    const file = e.target.files[0];
    console.log(e.target.name, e.target.files[0]);
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    console.log(bytes);
  };

  useEffect(() => {
    const loadUser = async () => {
      const res = await manasInstance.getUserData(userId);
      if (res.status === 200) {
        dispatchInput({ type: "INPUT_LOAD", input: res.data.userRes });
      }
    };
    loadUser();
  }, [userId, manasInstance]);

  return (
    <form onSubmit={submitHandler} className={styles.mtsForm}>
      <div>
        Applying for:
        <label>Xth pass</label>
        <input required type="radio" name="class" value="10" />
        <label>XIth pass</label>
        <input type="radio" name="class" value="11" />
        <label>XIIth pass</label>
        <input type="radio" name="class" value="12" />
      </div>
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <label>First Name</label>
          <input
            required
            type="text"
            name="firstname"
            value={inputValue.firstname}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.inputBox}>
          <label>Last Name</label>
          <input
            required
            type="text"
            name="lastname"
            value={inputValue.lastname}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <div className={styles.container}>
            <div className={styles.inputBox}>
              <label>Date of birth</label>
              <input
                required
                type="date"
                name="dob"
                value={inputValue.dob}
                onChange={inputChangeHandler}
              />
            </div>
            Gender:
            <div className={styles.container}>
              <label>Male</label>
              <input required type="radio" name="gender" value="male" />
              <label>Female</label>
              <input type="radio" name="gender" value="female" />
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Father's Name</label>
            <input
              required
              type="text"
              name="fathername"
              value={inputValue.fathername}
              onChange={inputChangeHandler}
            />
          </div>
          <div className={styles.inputBox}>
            <label>Mother's Name</label>
            <input
              required
              type="text"
              name="mothername"
              value={inputValue.mothername}
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className={styles.containerRight}>
          <label for="image" className={styles.avatarBox}>
            <span className={styles.avatarTitle}>Upload Image</span>
            <input
              id="image"
              className={styles.avatar}
              type="file"
              name="avatar"
              accept="image/*"
              onChange={profilePicHandler}
            />
          </label>
        </div>
      </div>
      <div className={styles.inputBox}>
        <label>Address</label>
        <input
          required
          type="text"
          name="address"
          value={inputValue.address}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <label>City</label>
          <input
            required
            type="text"
            name="city"
            value={inputValue.city}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.inputBox}>
          <label>State</label>
          <input
            required
            type="text"
            name="state"
            value={inputValue.state}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.inputBox}>
          <label>Pincode</label>
          <input
            required
            type="text"
            name="pincode"
            value={inputValue.pincode}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <br></br>
      <div className={styles.container}>
        Contact:
        <div className={styles.inputBox}>
          <label>Personal number</label>
          <input
            required
            type="text"
            name="phone"
            value={inputValue.phone}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.inputBox}>
          <label>Parent's number</label>
          <input
            required
            type="text"
            name="guardianPhone"
            value={inputValue.guardianPhone}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            value={inputValue.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.container}>
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
      </div>

      <br></br>
      <div className={styles.container}>
        <label for="image" className={styles.avatarBox}>
          <span className={styles.avatarTitle}>Upload Image</span>
          <input
            id="image"
            className={styles.avatar}
            type="file"
            name="avatar"
            accept="image/*"
            onChange={profilePicHandler}
          />
        </label>
        <label for="image" className={styles.avatarBox}>
          <span className={styles.avatarTitle}>Upload Image</span>
          <input
            id="image"
            className={styles.avatar}
            type="file"
            name="avatar"
            accept="image/*"
            onChange={profilePicHandler}
          />
        </label>
      </div>
      <button>Next</button>
    </form>
  );
};

export default MTSForm;
