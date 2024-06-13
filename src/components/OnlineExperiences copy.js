import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
// import Slider from "react-slick";
import { styled } from "@mui/system";

const Section = styled("div")({
  margin: "50px 0",
});

const StyledCard = styled(Card)({
  maxWidth: 300,
  margin: "0 auto",
  position: "relative", // Added relative positioning
});

const SoldOutButton = styled(Button)({
  position: "absolute",
  top: "5%", // Adjusted to 5% from the top
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#ff5252",
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  padding: "5px 10px",
  borderRadius: "5px",
  textTransform: "none",
});

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2.5,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

const experiences = [
  {
    image: "/card1.png",
    title: "Life lessons with Katie Zaferes",
    rating: 5.0,
    reviews: 6,
    country: "USA",
    price: 136,
    soldOut: true,
  },
  {
    image: "/card2.png",
    title: "Learn wedding photography",
    rating: 5.0,
    reviews: 6,
    country: "USA",
    price: 125,
    soldOut: true,
  },
  {
    image: "/card3.png",
    title: "Group Mountain Biking",
    rating: 5.0,
    reviews: 6,
    country: "USA",
    price: 50,
    soldOut: true,
  },
];

const OnlineExperiences = () => {
  return (
    <Section>
      <Container>
        <Typography variant="h4" gutterBottom>
          Online Experiences
        </Typography>
        <Typography variant="body1" paragraph>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </Typography>
        {/* <Slider {...settings}> */}
          {experiences.map((exp, index) => (
            <StyledCard key={index}>
              <CardMedia
                component="img"
                height="140"
                image={exp.image}
                alt={exp.title}
              />
              {exp.soldOut && <SoldOutButton>SOLD OUT</SoldOutButton>}
              <CardContent>
                <Typography variant="h6">{exp.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>{exp.rating}</strong> ({exp.reviews}) {exp.country}
                </Typography>
                <Typography variant="body2">
                  <strong>From ${exp.price}</strong> / person
                </Typography>
              </CardContent>
            </StyledCard>
          ))}
        {/* </Slider> */}
      </Container>
    </Section>
  );
};

export default OnlineExperiences;
