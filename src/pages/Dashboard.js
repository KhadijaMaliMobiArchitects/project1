import React from "react";
import HorizontalCard from "../Components/Dashboard/HorizintalCardGraph";
import MainBarGraph from "../Components/Dashboard/MainBarGraph";
import TablePerson from "../Components/Dashboard/Table";
import ZoneActive from "../Components/Dashboard/ZoneActive";
import { Grid, Box, Stack } from "@mui/material";

export default function Dashboard() {
  const linedata = [
    [12, 19, 3, 5, 2, 3, 8],
    [1, 14, 30, 15, 5, 2, 20],
    [5, 19, 3, 15, 2, 30, 8],
    [12, 19, 30, 50, 20, 55, 80],
  ];

  const lndta = [
    {
      title: "Nombre d'ouvriers disponibles",
      number: 105,
      progress: "+12 mois février",
      yaxis: [12, 19, 3, 5, 2, 3, 8],
    },
    {
      title: "Nombre des examen déjà passe",
      number: 20,
      progress: "+4 mois février",
      yaxis: [1, 14, 30, 15, 5, 2, 20],
    },
    {
      title: "examen disponible",
      number: 34,
      progress: "+5 mois février",
      yaxis: [5, 19, 3, 15, 2, 30, 8],
    },
    {
      title: "Taux de réussite.",
      number: "90%",
      progress: "+100 mois février",
      yaxis: [12, 19, 30, 50, 20, 55, 80],
    },
  ];

  const mock = {
    id: 1,
    name: "mohamed",
    adress: "mabrouka",
    phone: "0634601449",
  };

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 13],
        borderColor: "#3f51b5",
        backgroundColor: "rgba(63, 81, 181, 0.1)",
        pointRadius: 0,
      },
    ],
  };
  return (
    <>
      <Box
        sx={{
          marginTop: "15px",
          flexGrow: 1,
          backgroundColor: "#EFEEEF",
        }}
      >
        <Grid container spacing={2}>
          <Stack
            sx={{ position: "relative", left: "109px", top: "30px" }}
            direction="row"
            spacing={2}
          >
            {lndta.map((category, index) => (
              <HorizontalCard
                key={index}
                title={category.title}
                number={category.number}
                progress={category.progress}
                yaxis={category.yaxis}
              />
            ))}
          </Stack>

          <Grid sx={{ position: "relative", top: "20px", left: "109px" }}>
            <Stack
              sx={{ position: "relative", top: "30px" }}
              direction="row"
              spacing={2}
            >
              <MainBarGraph />
              <Box>
                <ZoneActive
                  style={{ position: "relative", top: "20px" }}
                  data={{
                    id: 1,
                    name: "mohamed",
                    address: "mabrouka",
                    phone: "0634601449",
                  }}
                />
              </Box>
            </Stack>
          </Grid>
          <Grid sx={{ position: "relative", top: "20px", left: "50px" }}>
            <TablePerson />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
