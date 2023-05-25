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
import TimeSetter from "./TimeSetter";
import ScoreExam from "./ScoreExam";

import "./form.css";

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
  const [langue, setLangue] = useState("");

  const handleChange = (event) => {
    setLangue(event.target.value);
  };

  console.log({ state });

  return (
    <>
      <div style={{ backgroundColor: "#EFEEEF" }}>
        <Box
          style={{
            height: "109px",
            width: "100%",
            background: "linear-gradient(0deg, #2296F7 0%, #0F5DEC 100%)",
          }}
        >
          <Typography
            style={{
              fontWeight: "normal",
              color: "white",
              position: "relative",
              left: "85px",
              top: "10px",
            }}
          >
            Exams {">"} {state.title}
          </Typography>

          <Card
            sx={{
              height: "130px",
              borderRadius: "15px",
              marginLeft: "80px",
              marginRight: "80px",
              position: "relative",
              top: "18px",
            }}
            variant="outlined"
          >
            <CardContent sx={{ position: "relative", top: "5px" }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar
                    sx={{ height: "70px", width: "70px" }}
                    src={face}
                    alt={name}
                  />
                </Grid>
                <Grid item sx={{ position: "relative", top: "10px" }}>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h5"
                    component="h2"
                  >
                    {name}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                divider="|"
                sx={{ position: "relative", left: "88px", bottom: "25px" }}
                container
                spacing={2}
              >
                <Grid item>
                  <Typography color="black">Email: {email}</Typography>
                </Grid>
                <Grid item>
                  <Typography color="black">Birthday: {birthday}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>

        <Container>
          <Stack style={{ marginLeft: "109px" }} spacing={2}>
            <Typography
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "5px",
                position: "relative",
                top: "106px",
                height: "40px",
              }}
            >
              {state.title}
            </Typography>
          
             
                <Grid container spacing={2}>
                  <Grid item>
                    <Box
                      style={{ width: 166, position: "relative", top: "106px" }}
                    >
                      <FormControl
                        style={{
                          height: "40px",
                          backgroundColor: "white",
                          boxShadow: "0 0 0 0 rgba(90,113,208,0.11)",
                          border: "1px solid #DDE4EB",
                        }}
                        fullWidth
                      >
                        <InputLabel
                          style={{ height: "40px" }}
                          id="demo-simple-select-label"
                        >
                          Langue
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={langue || "fr"} // Set default value to "fr" (French)
                          onChange={handleChange}
                          label="Langue"
                          style={{ height: "40px" }}
                        >
                          <MenuItem value={"fr"}>Langue : Français</MenuItem>
                          <MenuItem value={"en"}>Langue : Anglais</MenuItem>
                          <MenuItem value={"ar"}>Langue : Arabe</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Card
                      style={{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        paddingTop: "5px",
                        position: "relative",
                        top: "106px",
                        fontWeight: "bold",
                        display: "inline-block",
                        height: "40px",
                      }}
                    >
                      Catégorie: {state.category}
                    </Card>
                  </Grid>
                </Grid>
             
              <div>
                <Grid>
                  <Grid>
                    <TimeSetter props={state} />
                  </Grid>
                  <Grid>
                    <ScoreExam props={state} />
                  </Grid>
                </Grid>
              </div>
          
            {Questions === null
              ? "loading"
              : Questions.map((item, index) => (
                  <Card
                    key={item.id}
                    style={{
                      position: "relative",
                      bottom: "150px",
                      height: "60px",
                      width: "1031px",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        style={{ marginLeft: "10px", marginTop: "16px" }}
                        item
                      >
                        <Typography>{index} </Typography>
                      </Grid>

                      <Grid
                        style={{ marginLeft: "10px", marginTop: "16px" }}
                        item
                      >
                        <Typography>{item.nomDuQuestion}</Typography>
                      </Grid>
                    </Grid>
                  </Card>
                ))}

            <Button
              onClick={handleOpen}
              style={{
                width: "180px",
                color: "white",
                position: "relative",
                boxShadow: "0 0 0 0 rgba(90,113,208,0.11)",
                background: "linear-gradient(0deg, #2296F7 0%, #0F5DEC 100%)",
                border: "1px solid black",
              }}
              className="button"
            >
              <AddBoxIcon />
              Ajouter une question
            </Button>
          </Stack>
        </Container>

        {/* modal......................... */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: "#FFFFFF",
              overflow: "scroll",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 650,
              height: 410,
              bgcolor: "background.paper",

              boxShadow: 24,
              p: 4,
            }}
          >
            <Container>
              <Question prop={state} />
            </Container>
          </Box>
        </Modal>

        {/* modal.................................. */}
      </div>
    </>
  );
}
