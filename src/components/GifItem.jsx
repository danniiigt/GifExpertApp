import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

export const GifItem = ({ gif }) => {
  console.log(gif);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={gif.images.downsized_medium.url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {gif.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
