import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./Examcontent.module.css";
import api from "../../config/api";
import apiEndpoints from "../../constants/apiEndpoints";

export default function ScoreExam({ prop }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    
      api.get(apiEndpoints.exams + "?id=" + prop.id).then((response) => {
        setScore(response.data[0 ].score);
        console.log(response.data);
      });
    
  }, [])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(prop.id);


  const onSubmit = (data) => {
    console.log(data);
    setScore(data.score);
    
    api
      .patch(apiEndpoints.exams + "/" + prop.id, { "score": data.score })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // axios
  // .put(, {
  //   title: "Hello World!",
  //   body: "This is an updated post."
  // })
  // .then((response) => {
  //   setPost(response.data);
  // });

  console.log(errors);

  return (
    <div>
      <Card className={styles.ScoreExam}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="number"
            placeholder="Le Score maximal"
            {...register("score", {
              required: true,
            })}
            style={{
              border: "none",
              borderBottom: "1px solid #ccc",
              marginBottom: "10px",
              padding: "5px",
            }}
          />

          <input
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
            }}
          />
        </form>
        <Typography
          style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center" }}
        >
          {score} pts
        </Typography>
      </Card>
    </div>
  );
}
