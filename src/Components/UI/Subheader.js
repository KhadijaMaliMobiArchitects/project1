import React from "react";
import styles from "./Subheader.module.css";
import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
export const Subheader = () => {
  const navigate = useNavigate();

  const goBack = () => {
    console.log("hello");
    navigate(-1)
  };
  return (
    <div className={styles.content}>
      <div className={styles.navigation}>
        <a onClick={goBack}>Exams </a>
        <p className={styles.space}> &gt;</p>
        <a>Gestion des Matériaux Dangereux et Sécurité.</a>
      </div>
    </div>
  );
};
