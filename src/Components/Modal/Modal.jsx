import React from "react";
import styles from "./Modal.module.scss";
import { useState } from "react";

export const Modal = ({ onToggleModal, onGetData }) => {
  const [nameTrucks, setNameTrucks] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longiyude, setLongiyude] = useState("");

  const nameHandler = (e) => {
    setNameTrucks(e.target.value);
  };
  const latitudeHandler = (e) => {
    setLatitude(e.target.value);
  };
  const longiyudeHandler = (e) => {
    setLongiyude(e.target.value);
  };

  const consoleData = (e) => {
    e.preventDefault();
    const dataInput = {
      nameTrucks,
      latitude,
      longiyude,
      id: Date.now().toString(),
    };
    onGetData(dataInput);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalFilling}>
        <div className={styles.modalHeader}>
          <h3>Add new asset</h3>
        </div>
        <form className={styles.modalContent}>
          <div className={styles.nameTr}>
            <label className={styles.nameTruck} for="name">
              Name
            </label>
            <input
              onChange={(e) => {
                nameHandler(e);
              }}
              className={styles.nameInputTruck}
              type="text"
              maxLength={10}
              value={nameTrucks}
              placeholder="Truck 1001"
              required
            />
          </div>
          <div className={styles.nameLat}>
            <label className={styles.nameLatitude} for="latitude">
              Latitude
            </label>
            <input
              onChange={(e) => latitudeHandler(e)}
              className={styles.nameInputLatitude}
              type="number"
              value={latitude}
              placeholder="43.817699"
              required
            />
          </div>
          <div className={styles.nameL}>
            <label className={styles.nameLongiyude} for="longiyude">
              Longitude
            </label>
            <input
              onChange={(e) => longiyudeHandler(e)}
              className={styles.nameInputLongiyude}
              type="number"
              value={longiyude}
              placeholder="-79.1880791"
              required
            />
          </div>
          <div className={styles.btn}>
            <button className={styles.close} onClick={onToggleModal}>
              Cansel
            </button>
            <button
              className={styles.btnAdd}
              type="submit"
              onClick={consoleData}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
