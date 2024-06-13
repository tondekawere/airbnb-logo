import React from "react";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/system";

const images = [
  "/img1.png",
  "/img2.png",
  "/img3.png",
  "/img4.png",
  "/img5.png",
  "/img6.png",
  "/img7.png",
  "/img8.png",
  "/img9.png",
];

const ImageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ImageItem = styled("div")(({ theme, isFullWidth }) => ({
  flex: isFullWidth ? "0 1 20%" : "0 1 20%",
  [theme.breakpoints.down("sm")]: {
    flex: "1 1 100%",
  },
  img: {
    width: "100%",
    borderRadius: "8px",
    marginBottom:"3%"
  },
}));

const ImageSection = () => {
  return (
    <Container>
      <ImageWrapper>
        <Grid
          container
          // spacing={1}
          alignItems={"center"}
          px={3}
          sx={{ width: "100%" }}
        >
          <Grid item p={1} sx={{ width: { sx: "50%", sm: "20%" } }}>
            <ImageItem isFullWidth>
              <img src={images[0]} alt="Experience 0" />
            </ImageItem>
          </Grid>
          <Grid item p={1} sx={{ width: { sx: "50%", sm: "20%" } }}>
            <ImageItem>
              <img src={images[1]} alt="Experience 1" />
            </ImageItem>
            <ImageItem>
              <img src={images[2]} alt="Experience 2" />
            </ImageItem>
          </Grid>
          <Grid
            item
            p={1}
            sx={{ width: { sx: "50%", sm: "20%" } }}
            style={{ marginTop: { sx: "0%", sm: "16%" } }}
          >
            <ImageItem>
              <img src={images[3]} alt="Experience 3" />
            </ImageItem>
            <ImageItem>
              <img src={images[4]} alt="Experience 4" />
            </ImageItem>
          </Grid>
          <Grid item p={1} sx={{ width: { sx: "50%", sm: "20%" } }}>
            <ImageItem>
              <img src={images[5]} alt="Experience 5" />
            </ImageItem>
            <ImageItem>
              <img src={images[6]} alt="Experience 6" />
            </ImageItem>
          </Grid>
          <Grid
            item
            p={1}
            sx={{ width: { sx: "50%", sm: "20%" } }}
            style={{ marginTop: { sx: "0%", sm: "16%" } }}
          >
            <ImageItem>
              <img src={images[7]} alt="Experience 7" />
            </ImageItem>
            <ImageItem>
              <img src={images[8]} alt="Experience 8" />
            </ImageItem>
          </Grid>
        </Grid>
      </ImageWrapper>
    </Container>
  );
};

export default ImageSection;
