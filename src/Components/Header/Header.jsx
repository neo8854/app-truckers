import React from "react";
import styles from "./Header.module.scss";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import ReactDOM from "react-dom";

const Header = ({ onGetData }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal((prevState) => {
      return (prevState = !prevState);
    });
  };
  return (
    <header className={styles.header}>
      <div className={styles.h1}>
        <h2>Assets Map</h2>
      </div>
      <div className={styles.btn}>
        <input className={styles.inputHeader} />
        <button onClick={openModal} className={styles.btnAddAsset}>
          Add Asset
        </button>
        {modal &&
          onGetData &&
          ReactDOM.createPortal(
            <Modal onToggleModal={openModal} onGetData={onGetData} />,
            document.getElementById("modal")
          )}
      </div>
    </header>
  );
};

export default Header;
