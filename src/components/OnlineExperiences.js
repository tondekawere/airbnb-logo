import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const Section = styled("div")({
  margin: "50px 0",
});

const CardWrapper = styled("div")({
  display: "flex",
  overflowX: "scroll",
  scrollbarWidth: "none", // Hide scrollbar for Firefox
  msOverflowStyle: "none", // Hide scrollbar for Internet Explorer and Edge
  "&::-webkit-scrollbar": {
    display: "none", // Hide scrollbar for Chrome, Safari, and Opera
  },
  paddingBottom: "20px",
  gap: "20px", // Add spacing between cards
  padding: "0 20px", // Add padding to the container
});

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: "calc(100% / 2.5)", // Show 2.5 cards
  margin: "10px 0", // Adjust vertical margin
  position: "relative",
  flex: "1 0 auto",
  [theme.breakpoints.down("sm")]: {
    minWidth: "calc(100% / 1)", // Show 1 card on small screens
  },
}));

const SoldOutButton = styled(Button)({
  position: "absolute",
  top: "3%",
  left: "17%",
  transform: "translateX(-50%)",
  backgroundColor: "#fff",
  color: "#000",
  fontSize: "14px",
  padding: "5px 10px",
  borderRadius: "5px",
  textTransform: "none",
});

const experiences = [
  {
    image: "/card1.png",
    title: "Life lessons with Katie Zaferes",
    rating: 5.0,
    reviews: 6,
    country: "USA",
    price: 136,
    soldOut: true,
    text: "SOLD OUT",
  },
  {
    image: "/card2.png",
    title: "Learn wedding photography",
    rating: 5.0,
    reviews: 6,
    country: "USA",
    price: 125,
    soldOut: true,
    text: "ONLINE",
  },
  {
    image: "/card3.png",
    title: "Group Mountain Biking",
    rating: 5.0,
    reviews: 6,
    country: "USA",
    price: 50,
  },
];

const OnlineExperiences = () => {
  return (
    <Section>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "36px", md: "50px" },
            fontWeight: "600",
          }}
        >
          Online Experiences
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "16px", md: "30px" },
            fontWeight: "300",
            width: { xs: "90%", sm: "60%" },
          }}
        >
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </Typography>
        <CardWrapper>
          {experiences.map((exp, index) => (
            <StyledCard key={index} sx={{ border: "none", boxShadow: "none" }}>
              <CardMedia
                component="img"

                height="455"
                image={exp.image}
                alt={exp.title}
                sx={{
                  objectFit: "contain",
                  objectPosition: "center",
                  borderRadius: "10px",
                }}
              />
              {exp.soldOut && <SoldOutButton>{exp.text}</SoldOutButton>}
              <CardContent>
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                  variant="body2"
                  color="textSecondary"
                >
                  <strong style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      style={{
                        fill: "#FE395C",
                      }}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {exp.rating}
                  </strong>{" "}
                  ({exp.reviews}) . {exp.country}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { xs: "12px", md: "20px" },
                    fontWeight: "200",
                    color: "#222222",
                  }}
                >
                  {exp.title}
                </Typography>
                <Typography variant="body2">
                  <strong>From ${exp.price}</strong> / person
                </Typography>
              </CardContent>
            </StyledCard>
          ))}
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default OnlineExperiences;
