import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
  Avatar,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import face from "./face.png";
import { useLocation } from "react-router-dom";

import Question from "../../pages/Admin";

import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import axios from "axios";
import api from "../../config/api";
import apiEndpoints from "../../constants/apiEndpoints";
import Timer from "./Timer";
// import ScoreExam from "./ScoreExam";
import "./form.css";
import { Subheader } from "../../Components/UI/Subheader";
import Idcard from "../UI/Idcard";
import Dropdownlist from "../../Components/UI/Dropdownlist";
import Catgeorycard from "../../Components/UI/Catgeorycard";
import Questionslist from "../../Components/UI/Questionslist";
import styles from "./Examcontent.module.css";

export default function ExamContent() {
  // const baseURL = "http://localhost:3000/questiondndtext";
  const [Questions, setQuestions] = React.useState(null);

  const { state } = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    api.get(apiEndpoints.Questions + "?examid=" + state.id).then((response) => {
      setQuestions(response.data);
      console.log(response.data);
    });
  }, []);

  console.log(Questions);
  const props = {
    name: "John Smith",
    email: "john@example.com",
    birthday: "January 1, 1990",
  };

  const { name, email, birthday } = props;

  console.log({ state });

  return (
    <div
      style={{
        backgroundColor: "#EFEEEF",
        height: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <div>
        <Subheader />
      </div>
      <div>
        <Idcard />
      </div>
      <p className={styles.title}>{state.title}</p>
      <div
        style={{ display: "flex", flexDirection: "row", marginLeft: "109px" }}
      >
        <div>
          <Dropdownlist />
        </div>
        <div>
          <Catgeorycard prop={state} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div className={styles.questionsSection}>
          <Questionslist state={state} />
        </div>
        <div className={styles.attributesSection}>
          <div>
            <Timer prop={state} />
          </div>
          {/* <div>
            <ScoreExam prop={state} />
          </div> */}
        </div>
      </div>
      <div style={{ backgroundColor: "#EFEEEF", margin: 0, padding: 0 }}>
        <Button onClick={handleOpen} className={styles.addQuestionbutton}>
          <AddBoxIcon />
          <span className=""> &#160; Ajouter une question</span>
        </Button>
      </div>

      {/* modal......................... */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>
          <Container>
            <Question prop={state} />
          </Container>
        </Box>
      </Modal>

      {/* modal.................................. */}
    </div>
  );
}
