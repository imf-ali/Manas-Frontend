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
  if (actions.type === "IMAGE_UPLOAD") {
    return { ...state, [actions.input.name]: actions.input.value };
  }
  return { ...state };
};

const MTSForm = (props) => {
  const { manasInstance } = useContext(AuthContext);
  const userId = userStore((state) => state.userId);

  const [inputValue, dispatchInput] = useReducer(inputReducer, {
    firstname: "",
    lastname: "",
    class: "",
    gender: "",
    category: "",
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
    console.log(inputValue);
    const res = await manasInstance.updateData(userId, inputValue);
    if (res.status === 201) {
      props.paymentHandler();
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const profilePicHandler = async (e, imageType) => {
    const file = e.target.files[0];
    const base64img = await toBase64(file);
    if (imageType === "avatar") {
      dispatchInput({
        type: "IMAGE_UPLOAD",
        input: { name: "avatar", value: base64img },
      });
      console.log(base64img);
    } else if (imageType === "signature") {
      dispatchInput({
        type: "IMAGE_UPLOAD",
        input: { name: "signature", value: base64img },
      });
    } else if (imageType === "parentsign") {
      dispatchInput({
        type: "IMAGE_UPLOAD",
        input: { name: "parentsign", value: base64img },
      });
    }
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
      <div className={styles.container}>
        <h3>
          <span>
            Registration No. : <input className={styles.mtsInput} />
          </span>
        </h3>
        <div className={styles.applyFor}>
          <h3>Applying for:</h3>
          <div className={styles.radioInput}>
            {" "}
            <label>Xth pass</label>
            <input
              className={styles.mtsInput}
              required
              type="radio"
              name="class"
              value="10"
            />
          </div>
          <div className={styles.radioInput}>
            {" "}
            <label>XIth pass</label>
            <input
              className={styles.mtsInput}
              type="radio"
              name="class"
              value="11"
              onChange={inputChangeHandler}
              checked={inputValue.class === 11}
            />
          </div>
          <div className={styles.radioInput}>
            <label>XIIth pass</label>
            <input
              className={styles.mtsInput}
              type="radio"
              name="class"
              value="12"
              onChange={inputChangeHandler}
              checked={inputValue.class === 12}
            />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <label>First Name</label>
          <input
            className={styles.mtsInput}
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
            className={styles.mtsInput}
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
                className={styles.mtsInput}
                required
                type="date"
                name="dob"
                value={inputValue.dob}
                onChange={inputChangeHandler}
              />
            </div>
            <div className={styles.container}>
              Gender:
              <div className={styles.radioInput}>
                <label>Male</label>
                <input
                  className={styles.mtsInput}
                  required
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={inputChangeHandler}
                  checked={inputValue.gender === "male"}
                />
              </div>
              <div className={styles.radioInput}>
                <label>Female</label>
                <input
                  className={styles.mtsInput}
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={inputChangeHandler}
                  checked={inputValue.gender === "female"}
                />
              </div>
            </div>
          </div>
          <div className={styles.inputBox}>
            <label>Father's Name</label>
            <input
              className={styles.mtsInput}
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
              className={styles.mtsInput}
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
              style={{ background: "url" }}
              type="file"
              name="avatar"
              accept="image/*"
              onChange={(e) => profilePicHandler(e, "avatar")}
            />
          </label>
        </div>
      </div>
      <div className={styles.inputBox}>
        <label>Address</label>
        <input
          className={styles.mtsInput}
          required
          type="text"
          name="address"
          value={inputValue.address}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={styles.containerD}>
        <div className={styles.inputBox}>
          <label>City</label>
          <input
            className={styles.mtsInput}
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
            className={styles.mtsInput}
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
            className={styles.mtsInput}
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
            className={styles.mtsInput}
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
            className={styles.mtsInput}
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
            className={styles.mtsInput}
            required
            type="email"
            name="email"
            value={inputValue.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.container}>
          Category:
          <div className={styles.radioInput}>
            <label>Gen</label>
            <input
              className={styles.mtsInput}
              required
              type="radio"
              name="category"
              value="general"
              onChange={inputChangeHandler}
              checked={inputValue.category === "general"}
            />
          </div>
          <div className={styles.radioInput}>
            <label>OBC (NC)</label>
            <input
              className={styles.mtsInput}
              type="radio"
              name="category"
              value="obc"
              onChange={inputChangeHandler}
              checked={inputValue.category === "obc"}
            />
          </div>
          <div className={styles.radioInput}>
            <label>SC/ST</label>
            <input
              className={styles.mtsInput}
              type="radio"
              name="category"
              value="sc/st"
              onChange={inputChangeHandler}
              checked={inputValue.category === "sc/st"}
            />
          </div>
          <div className={styles.radioInput}>
            <label>PD</label>
            <input
              className={styles.mtsInput}
              type="radio"
              name="category"
              value="pd"
              onChange={inputChangeHandler}
              checked={inputValue.category === "pd"}
            />
          </div>
        </div>
      </div>
      <br></br>
      <div className={styles.container}>
        <label for="image" className={`${styles.avatarBox} ${styles.sign}`}>
          <span className={styles.avatarTitle}>Upload Image</span>
          <input
            id="image"
            className={styles.avatar}
            type="file"
            name="avatar"
            accept="image/*"
            onChange={(e) => profilePicHandler(e, "signature")}
          />
        </label>
        <label for="image" className={`${styles.avatarBox} ${styles.sign}`}>
          <span className={styles.avatarTitle}>Upload Image</span>
          <input
            id="image"
            className={styles.avatar}
            type="file"
            name="avatar"
            accept="image/*"
            onChange={(e) => profilePicHandler(e, "parentsign")}
          />
        </label>
      </div>
      <button>Next</button>
    </form>
  );
};

export default MTSForm;
