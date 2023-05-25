import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Cardexam from "../../Components/Adminpanel/Examcard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { CardActionArea, CardContent, Divider, Button } from "@mui/material";
import { Avatar, Stack } from "@mui/material";
import face from "../face.png";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useForm } from "react-hook-form";

const baseURL = "http://localhost:3000/exams";

export default function Adminpanel() {
  

  const [openCat, setOpenCat] = React.useState(false);
  const handleOpenCat = () => setOpenCat(true);
  const handleCloseCat = () => setOpenCat(false);

 

  const [items, setItems] = useState([]);
  const [categories, setSCategory] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitCategory = (data) => console.log(data);
  console.log(errors);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/category")
      .then((response) => {
        const uniqueCategories = new Set(
          response.data.map((item) => item.category)
        );
        setSCategory(["Tous les catégories", ...uniqueCategories]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const props = {
    name: "John Smith",
    email: "john@example.com",
    birthday: "January 1, 1990",
  };
  // modal
  const style = {
    overflow: "scroll",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 410,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { avatarUrl, name, email, birthday } = props;

  const [selectedCategory, setSelectedCategory] = useState(
    "Tous les catégories"
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter(
    (item) =>
      selectedCategory === "Tous les catégories" ||
      item.category === selectedCategory
  );

  return (
    <>
      <Box
        style={{
          height: "440px",
          width: "100%",
          background: " linear-gradient(0deg, #2296F7 0%, #0F5DEC 100%)",
        }}
      >
        <Typography
          style={{
            height: "127px",
            position: "relative",
            left: "7%",
            top: "7.74%",
            width: " 562px",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontSize: "44px",
            fontWeight: "bold",
            letterSpacing: 0,
            lineHeight: "52px",
          }}
          alignContent="left"
        >
          Découvrez nos exams diplômantes
        </Typography>
          
        <Typography
          style={{
            position: "relative",
            left: "7%",
            top: "7.74%",

            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontSize: "18px",
            fontWeight: "bold",
            letterSpacing: 0,
            lineHeight: "22px",
            height: "2.73%",
            width: "35.13%",
          }}
          alignContent="left"
        >
          Apprenez des compétences d’aujourd’hui et un métier qui a de l’avenir
          avec nos formations 100% en ligne
        </Typography>

        <Card
          sx={{
            border: " 7px solid white",
            borderRadius: "9px",
            maxWidth: "35%",
            position: "relative",
            left: "57.88%",
            bottom: "23%",
          }}
        >
          {/* <CardMedia component="video" src='https://youtu.be/hTWKbfoikeg' /> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UlDou2vA9oA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Card>
      </Box>

      <div style={{ backgroundColor: "#EFEEEF" }}>
        <br></br>

        <Card
          sx={{
            height: "110px",
            borderRadius: "15px",
            marginLeft: "80px",
            marginRight: "80px",
            position: "relative",
            top: "-85px",
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

        <Container
          fixed
          // style={{
          //   marginLeft: "auto",
          //   marginRight: "auto",
          //   width: "1300px",
          //   marginTop: "-60px",
          // }}
        >
          <Swiper
            style={{ marginBottom: "25px", marginTop: "-55px" }}
            spaceBetween={1}
            slidesPerView={6}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {/* l3ayba filter */}
           
              

            {/* l3ayba filter  end */}

            {categories.map((category) => (
              <SwiperSlide key={category}>
                <Card
                  sx={{
                    border: "1px solid #DDE4EB",
                    backgroundColor: "#FFFFFF",
                    boxShadow: " 0 0 0 0 rgba(90,113,208,0.11)",
                    borderRadius: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    width: "180px",
                    height: "60px",
                    cursor: "pointer",
                    
                  
                    backgroundColor:
                      category === selectedCategory ? "#115EEC" : "white",
                  }}
                  onClick={() => handleCategoryClick(category)}
                >
                  <CardContent>
                    <Typography
                      sx={{
                        color:
                          category === selectedCategory ? "white" : "black",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      variant="body1"
                      textAlign="center"
                    >
                      {category}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <Grid
            container
            sx={{ width: 1, bottom: "30px" }}
            justifyContent="center"
            spacing={1}
          >
            {/*l3ayba */}

            {/* nihaya d l3ayba  */}

            {filteredItems.map((item) => (
              <Grid item xs={6} sm={6} md={4} key={item}>
                <Box>
                  <Link
                    style={{
                      width: "100%",
                      textDecoration: "none",
                      paddingRight: "0px",
                    }}
                    to="/ExamContent"
                    state={item}
                  >
                    <Cardexam props={item} />
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

     
     
    </>
  );
}
