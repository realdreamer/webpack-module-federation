import React from "react";
import styles from './styles';

export default function Button() {
  const classes = styles();
  return (
    <button className={classes.myButton}>App 2 Button</button>
  )
}
