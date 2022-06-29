import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { Typography } from "@mui/material";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = async (category) => {
    setCategories([category, ...categories]);
  };

  return (
    <>
      <Typography variant="h3" align="center">
        GifExpertApp
      </Typography>
      <AddCategory onNewCategory={(category) => handleAddCategory(category)} />
      {categories.map((category) => (
        <GifGrid category={category} />
      ))}
    </>
  );
};
