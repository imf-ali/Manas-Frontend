import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.cross}>
        <RxCrossCircled size={50} onClick={props.onClose} />
      </div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay onClose={props.onClose}/>
    </React.Fragment>
  );
};

export default Modal;
