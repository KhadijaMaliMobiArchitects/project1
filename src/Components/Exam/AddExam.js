import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import {useDropzone} from 'react-dropzone';

import "./form.css";
import { useEffect } from "react";

export default function AddExam() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


///////date 
const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2);
const day = ('0' + today.getDate()).slice(-2);

const formattedDate = `${month}/${day}/${year}`;
 // outputs something like: "2023/04/17"

  ////////////////////////
  const Submitfunc = async (data) => {
    const base64Image = await getBase64(data.file[0]);
    const name = await data.name;
    const category = await data.category;
    uploadexam(base64Image, name, category,formattedDate);
  };

  ///// random generator
  function getRandom(min, max) {
    const floatRandom = Math.random();

    const difference = max - min;

    // random between 0 and the difference
    const random = Math.round(difference * floatRandom);

    const randomWithinRange = random + min;

    return randomWithinRange;
  }

  //////////////////////////////
  const [categories, setSCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((response) => {
        const uniqueCategories = new Set(
          response.data.map((item) => item.category)
        );
        setSCategory(["All", ...uniqueCategories]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(categories);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };




  const uploadexam = async (base64Image, name, category,date) => {
    const response = await axios.post("http://localhost:3000/exams", {
      id: getRandom(100, 99999999),
      title: name,
      category: category,
      image: base64Image,
      date: date,
    });
    console.log(response.data);
  };

  return (
    <form action="#" onSubmit={handleSubmit(Submitfunc)}>
      <Box sx={{ mt: 1 , borderRadius: "10px"}}>
        <TextField
        style={{marginLeft:"7px"}}
          className="input"
          {...register("name")}
          type="text"
          margin="normal"
          required
          fullWidth
          id="name"
          label="name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        {/* <TextField className="input" {...register("category")}
                margin="normal"
                required
                fullWidth
                name="category"
                label="category"
                type="text"
                id="category"
                autoComplete="current-password"
            /> */}
        <Box >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
            className="input"
              {...register("category")}
              
              margin="normal"
              required
              fullWidth
              name="category"
              label="category"
              type="text"
              id="category"
            >
              {categories.map((category) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div>

        <input
          className="input"
          margin="normal"
          required
          fullWidth
          name="image"
          label="image"
          id="image"
          autoComplete="current-password"
          type="file"
          {...register("file")}
          />
          {/* <AddToPhotosIcon/> */}
          </div>

        <Grid sx={{ marginTop: "15px" }}>
          <Button
            className="button"
            variant="contained"
            color="primary"
            style={{ fontSize: "12px", fontWeight: "bold" }}
            type="submit"
          >
            Ajouter
          </Button>
        </Grid>
      </Box>
    </form>
  );
}
