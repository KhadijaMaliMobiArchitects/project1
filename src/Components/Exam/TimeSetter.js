import React, { useState,useEffect } from "react";
import axios from "axios";
import { Card, Modal, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import api from "../../config/api";
import apiEndpoints from "../../constants/apiEndpoints";
import styles from "./Examcontent.module.css";

export default function TimeSetter({ prop }) {

  const [time, setTime] = useState("00");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    
    api.get(apiEndpoints.exams + "?id=" + prop.id).then((response) => {
      setTime(response.data[0].duration);
      console.log(response.data);
    });
  
}, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setTime(data.Time);
    api
      .patch(apiEndpoints.exams + "/" + prop.id, {"duration": data.Time })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      handleClose();
  };
  console.log(errors);

  return (
    <div>
      <Card className={styles.timesetter}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className={styles.time}>{time}:00 <span style={{fontSize:"14px",}}>min</span></div>
          <div className={styles.modifyicon}>
            <button onClick={handleOpen}>
              <EditIcon />
            </button>
          </div>
        </div>
        <div
          style={{
            fontSize: "13px",
            fontStyle: "italic",
            letterSpacing: 0,
            lineHeight: "15px",
            color: "#EE2C16",
            marginLeft: "10px",
            marginTop: "5px",
          }}
        >
          Le temps estimer pour envoyer votre réponse
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            style={{
              height: "260px",
              width: "556px",
              borderRadius: "10px",
              backgroundColor: "#FFFFFF",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                type="number"
                placeholder="Le temps estimer pour envoyer votre réponse"
                {...register("Time", {
                  required: true,
                })}
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  width: "100%",
                  maxWidth: "500px",
                  border: "1px solid #DDE4EB",
                  borderRadius: "6px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 0 0 0 rgba(90,113,208,0.11)",
                }}
              />

              <input
                type="submit"
                style={{
                  background: "linear-gradient(0deg, #2296F7 0%, #0F5DEC 100%)",
                  width: "180px",
                  color: "white",
                  width: "140px",
                  height: "60px",
                  borderRadius: "8px",
                }}
              />
            </form>
          </Box>
        </Modal>
      </Card>
    </div>
  );
}
