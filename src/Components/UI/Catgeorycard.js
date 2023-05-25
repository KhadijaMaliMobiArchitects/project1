import React from "react";
import { Card } from "@mui/material";
import styles from "./Subheader.module.css";

export default function Catgeorycard({prop}) {
  return (
    <Card
      className={styles.Catgeorycard}
    > 
      {/* Catégorie: {state.category} */}
      Catégorie:{prop.category}
    </Card>
  );
}
