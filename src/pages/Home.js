import React from "react";
import logo from './examlpe.jpg'
import medal from './medal.png'
import { Link, Route,Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Login from './Login';

function Home() {
  return (
    
<>
<Grid marginTop={5} container={true} alignItems="center" justifyContent="center" spacing={0}>
  <Grid sx={{ width: 0 }}  alignItems="center" justifyContent="center" item>
    <Avatar  src={medal} alt="logo" sx={{ width: 60, height: 60}} />
  </Grid>
  <Grid item marginRight={0}>
    <Box sx={{ width: 450 }} textAlign="center">
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>OCP QUALIFICATION PRO</Typography>
      <Typography sx={{ color: 'warning.main' }}>EDUCATION - TRAINING - KNOWLEDGE</Typography>
    </Box>
  </Grid>
</Grid>

<Grid container={true}>

<Login/>

</Grid>

</>


  );
}

export default Home;
