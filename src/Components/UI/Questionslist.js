import React from "react";
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
  Container,
} from "@mui/material";
import Circlenum from "./Circlenum";
import api from "../../config/api";
import apiEndpoints from "../../constants/apiEndpoints";
import styles from "./Subheader.module.css";

export default function Questionslist({ state }) {
  console.log(state);
  const [Questions, setQuestions] = React.useState(null);
  const [qcm, setQcm] = React.useState(null);

  React.useEffect(() => {
    api.get(apiEndpoints.Questions + "?examid=" + state.id).then((response) => {
      setQuestions(response.data);
      console.log(response.data);
    });
  }, []);


  React.useEffect(() => {
    api.get(apiEndpoints.Questionscm + "?examid=" + state.id).then((response) => {
      setQcm(response.data);
      console.log(response.data);
    });
  }, []);
  let i =0;
if (Questions != null){
  i=Questions.length ;
}
  return (
    <Box>
      <Stack spacing={1.5}>
        {Questions === null
          ? "loading" 
          : Questions.map((item, index) => (
           
              <Grid>
                <Card className={styles.questioncard} key={item.id}>
                  <Grid container spacing={2}>
                    <Grid
                      style={{ marginLeft: "10px", marginTop: "16px" }}
                      item
                    >
                      <Typography>
                        <Circlenum num={index+1} />
                      </Typography>
                    </Grid>

                    <Grid
                      style={{ marginLeft: "10px", marginTop: "16px" }}
                      item
                    >
                      <Typography
                        style={{ marginLeft: "-10px" }}
                      >
                        {item.nomDuQuestion}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
             {qcm === null
          ? "loading"
          : qcm.map((item, index) => (
              <Grid>
                <Card className={styles.questioncard} key={item.id}>
                  <Grid container spacing={2}>
                    <Grid
                      style={{ marginLeft: "10px", marginTop: "16px" }}
                      item
                    >
                      <Typography>
                        <Circlenum num={index+1+i} />
                      </Typography>
                    </Grid>

                    <Grid
                      style={{ marginLeft: "10px", marginTop: "16px" }}
                      item
                    >
                      <Typography
                        style={{ marginLeft: "-10px" }}
                      >
                        {item.nomDuQuestion}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
      </Stack>

     
    </Box>
  );
}
