import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import iguana from "./contemplative-reptile.jpg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Box from "@mui/material/Box";
import image from './portrait-factory-worker-protective-equipment-holding-thumbs-up-production-hall-6@3x.png'

export default function Examcard({ props }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "290px",
        border: "1px solid #DDE4EB",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        boxShadow: " 0 0 0 0 rgba(90,113,208,0.11)",
        paddingRight: "0px",
      }}
    >
      <CardMedia
        sx={{
          height: "134px",
          margin:"10px",
          marginBottom:"0px",
          border: " 20px solid white",
          border: " 7px solid white",
          borderRadius: "15px",
        }}
        image={image}
      />
      <CardContent>
        <Typography
          sx={{overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display: "inline-block",
            bgcolor: "#8CC640",
            color: "white",
            borderRadius: 1, // adjust this value to change the border radius
            px: 2, // add horizontal padding to make the text easier to read
            py: 1, // add vertical padding to make the text easier to read

            fontSize: "12px",
            fontWeight: "bold",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.category}
        </Typography>
        <Typography
          sx={{ overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",fontWeight: "bold", marginTop: "15px" }}
          color="text.primary"
        >
          {props.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CalendarTodayIcon sx={{ marginRight: "5px", marginTop: "10px" }} />

          <Typography sx={{ marginTop: "10px" }} color="text.secondary">
            {props.date}
          </Typography>
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
