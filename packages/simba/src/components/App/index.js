import React from "react";

import LocalButton from "../Button";
import styles from './styles';
import simbaImg from './simba.jpg';

export default function Simba() {
  const classes = styles();
  return (
    <div className={classes.container}>
      <h2>Remote Simba App</h2>
      <img
        className={classes.image}
        src={simbaImg}
        alt="Simba from Lion King"
      />
      <LocalButton/>
    </div>
  );
}

