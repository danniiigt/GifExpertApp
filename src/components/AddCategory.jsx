import React, { useState } from "react";
import { Stack, TextField, Button, Box } from "@mui/material";

export const AddCategory = ({ onNewCategory }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const categoryName = data.get("category");
    if (categoryName.trim() != "") {
      onNewCategory(categoryName);
    }

    e.target.reset();
  };

  return (
    <Box
      component="form"
      sx={{ width: "100%", marginTop: 3 }}
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <Stack
        spacing={1}
        direction="row"
        sx={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
      >
        <TextField
          id="outlined-basic"
          label="Buscar gifs"
          name="category"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: "white" }}
        />
        <Button variant="contained" type="submit">
          AGREGAR
        </Button>
      </Stack>
    </Box>
  );
};
