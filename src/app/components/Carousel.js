"use client";
import Carousel from "react-material-ui-carousel";
import { Button, Typography, Box } from "@mui/material";
import Image from "next/image";
import HeroImage1 from "/src/app/image/carousel1.png";
import HeroImage2 from "/src/app/image/carousel2.png";
import HeroImage3 from "/src/app/image/carousel3.png";

function HeroCarousel() {
  const items = [
    {
      name: "Impulsamos el futuro de tu empresa con tecnología innovadora y soluciones que transforman",
      description: "Conocé más sobre nuestros servicios en nuestro brochure",
      image: HeroImage1,
    },
    {
      name: "Somos especialistas en tecnología y consultoría , liderando la innovación desde 1993",
      description: "Conocé más en nuestro brochure",
      image: HeroImage2,
    },
    {
      name: "Con más de 30 años de experiencia, llevamos soluciones tecnológicas a empresas líderes",
      description: "Descargá el brochure y descubrí cómo podemos ayudarte",
      image: HeroImage3,
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      indicators={false}
      stopAutoPlayOnHover={false}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0)", 
          color: "white", 
        },
      }}
    >
      {items.map((item, i) => (
        <HeroItem key={i} item={item} />
      ))}
    </Carousel>
  );
}

function HeroItem({ item }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          p: 3,
          textAlign: "center",
          maxWidth: "900px",
          padding: "5rem",
        }}
      >
        <Typography
          variant="h8"
          component="p"
          gutterBottom
          sx={{
            fontFamily: "Poppins, Raleway, sans-serif",
            fontWeight: 300,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            lineHeight: 1.5,
            maxWidth: "800px",
            mb: 2,
          }}
        >
          ASYTEC SISTEMAS
        </Typography>
        <hr />
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            mt: 2,
            fontFamily: "Poppins, Raleway, sans-serif",
            fontWeight: 500, 
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            lineHeight: 1.2,
            textTransform: "none",
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          sx={{
            fontFamily: "Poppins, Raleway, sans-serif",
            fontWeight: 300, // Regular
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            lineHeight: 1.5,
            maxWidth: "800px",
            mb: 3,
          }}
        >
          {item.description}
        </Typography>
        <Button
          variant="contained"
          href="/Brochure.pdf"
          target="_blank"
          sx={{
            padding: "0.5rem 1.3rem",
            fontFamily: "Poppins, Raleway, sans-serif",
            color: "white",
            fontSize: "1.2em",
            borderRadius: "10px",
            borderColor: "#072BA0",
            backgroundColor: "#072BA0",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#0907a0",
              color: "white",
              borderColor: "#0907a0",
            },
          }}
        >
          VER BROCHURE
        </Button>
      </Box>
    </Box>
  );
}

export default HeroCarousel;
