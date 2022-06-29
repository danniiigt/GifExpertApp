import { GifItem } from "./GifItem";
import { Grid, Typography, Skeleton, Stack, Box } from "@mui/material";
import { v4 as idGenerator } from "uuid";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          padding: "10px",
          color: "#1d1d1d",
          marginTop: "35px",
          boxShadow: "0px 1px 2px 0px #4e4e4e",
        }}
      >
        {category}
      </Typography>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: "20px" }}
      >
        {gifs.map((gif) => (
          <Grid item md={2} key={idGenerator()}>
            {/* <Stack>
              <Skeleton
                sx={{ bgcolor: "#dfdfdfec" }}
                variant="rectangular"
                width={210}
                height={118}
                animation="wave"
              />
              <Box
                sx={{
                  bgcolor: "#999999eb",
                  padding: "10px",
                  paddingTop: "13px",
                }}
                width={210}
                height={60}
              >
                <Skeleton
                  sx={{ bgcolor: "#cccccceb", borderRadius: "3px" }}
                  variant="rectangular"
                  animation="wave"
                  height={10}
                  width="90%"
                />
                <Skeleton
                  sx={{
                    bgcolor: "#cccccceb",
                    borderRadius: "3px",
                    marginTop: "8px",
                  }}
                  variant="rectangular"
                  animation="wave"
                  height={10}
                  width="60%"
                />
              </Box>
            </Stack> */}
            <GifItem gif={gif} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
