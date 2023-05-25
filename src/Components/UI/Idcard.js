import React from "react";
import { Card, Avatar } from "@mui/material";
import styles from "./Subheader.module.css";
import face from "./face.png";
export default function Idcard() {
  return (
    <div>
      <Card className={styles.id}>
        <div>
          <Avatar className={styles.avatar} alt="face" src={face} />
        </div>
        <div>
          <div>
            <p className={styles.name}>Mohamed El mernisi</p>
          </div>

          <div className={styles.info}>
            <p>Date de naissance : 26 mars</p>
            <span ClassName={styles.separator}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <p>Email : mohamedelmersnisi@gmail.com</p>
            <span ClassName={styles.separator}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <p>Total exams débloquée : 4 </p>
            <span ClassName={styles.separator}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <p>Total réponses vrai : 28 Réponses</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
