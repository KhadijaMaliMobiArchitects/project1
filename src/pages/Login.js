import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Navigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './login.css'
import HelpIcon from '@mui/icons-material/Help';

export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const [Redirect, setRedirect] = useState(null);
    ////////////////////////
    const Submitfunc = (data) => {
        console.log("hello");
        if (data.email === "admin@f.com" && data.password === "admin") {
            console.log("hello");
            setRedirect("/Dashboard")

        }
        else if (data.email === "user@f.com" && data.password === "user") {
            setRedirect("/User")
        }
    };

    if (Redirect) {
        return <Navigate to={Redirect} replace={true} />;
    }
    ///////////////////////
    return (
        <>

            <Container className="rectangle" maxWidth="sm" >

                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >


                    <Typography sx={{
                        position: 'relative',
                        right: '130px',
                        marginTop: '-40px',
                        marginBottom: '30px',

                        height: '20px',
                        width: '174px',
                        color: '#001737',
                        fontFamily: 'Roboto',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        letterSpacing: 0,
                        lineHeight: '20px',
                        textAlign: 'left',
                        alignItems: 'left',
                        textAlign: 'left', // added this line
                    }}



                        component="h1" variant="h5" alignContent="left">

                        Authentification

                    </Typography>
                    <form action="#" onSubmit={handleSubmit(Submitfunc)}>
                        <Box sx={{ mt: 1 }}>

                            <TextField className="input"{...register("email")} type="email"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField className="input" {...register("password")}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <Grid sx={{ marginTop: '15px' }}>
                                <Button className="button" variant="contained" color="primary" style={{ backgroundColor: '#001737', fontSize: '12px', fontWeight: 'bold' }}
                                    type="submit"
                                >
                                    Se connecter
                                </Button>
                            </Grid>

                        </Box>
                    </form>

                </Box>
                <br></br>
                <Grid >

                    <Typography className="register"

                    >

                        Vous n’avez pas un compte ?<span className="creer"> Créez-en un !</span>

                    </Typography>
                </Grid>

                <Box className="forgetpasswordrectangle">

                    <Typography style={{marginLeft:'20px'}} className="forgetpassword">

                        Vous avez oublié votre mot de passe ? 

                    </Typography>
                    <span style={{position:'relative',bottom:'3px',marginLeft:'15px',height:'24px',width:'24px'}}>
                    <HelpIcon/>
                    </span>



                </Box>
            </Container>


        </>

    )
}