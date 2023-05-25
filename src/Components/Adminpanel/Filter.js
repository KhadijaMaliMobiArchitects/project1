import React, { useState } from "react";
import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import Examcard from "./Examcard";

const items = [
  { id: 1, title: "Item 1", category: "Category 1" },
  { id: 2, title: "Item 2", category: "Category 2" },
  { id: 3, title: "Item 3", category: "Category 3" },
  { id: 4, title: "Item 4", category: "Category 1" },
  { id: 5, title: "Item 5", category: "Category 2" },
  { id: 6, title: "Item 6", category: "Category 3" },
];

function Filter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const categories = ["All", "Category 1", "Category 2", "Category 3"];

  return (
    <Box sx={{ m: 2 }}>
      <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
        {categories.map((category) => (
          <Grid item key={category}>
            <Card
              sx={{
                cursor: "pointer",
                backgroundColor:
                  category === selectedCategory ? "grey.300" : "white",
              }}
              onClick={() => handleCategoryClick(category)}
            >
              <CardContent>
                <Typography variant="body1" textAlign="center">
                  {category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {filteredItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ p: 2 }}>
              <Examcard/>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Filter;
