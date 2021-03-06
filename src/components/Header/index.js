import React from "react";

import Upload from "./upload";

import styles from "./styles.module.scss";

function Header(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={require("../../images/logo.svg")} alt="Logo" />
          <h1>Clips</h1>
        </div>
        <Upload setFile={props.setFile} />
      </div>
    </div>
  );
}

export default Header;
