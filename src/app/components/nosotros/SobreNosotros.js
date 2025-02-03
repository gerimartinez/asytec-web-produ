"use client";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Background from "/src/app/image/backgroundNosotros.png";
import Home from "/src/app/image/Home.png";
import Users from "/src/app/image/Users.png";
import Marker from "/src/app/image/Marker.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardData = [
  {
    id: 1,
    image: Home,
    text: "Desde 1993, somos una empresa argentina brindando servicios a más de 100 empresas nacionales e internacionales de diversos sectores de la economía.",
  },
  {
    id: 2,
    image: Users,
    text: "El resultado de estos años de trabajo se refleja en la confianza de nuestros clientes que se suman año tras año, contribuyendo al crecimiento del staff profesional de ASYTEC. Con todos ellos hemos establecido relaciones prolongadas basadas en la excelencia de los servicios ofrecidos.",
  },
  {
    id: 3,
    image: Marker,
    text: "Trabajamos para empresas localizadas en Argentina, Angola, Bolivia, Brasil, Colombia, Ecuador, Paraguay, Perú, Uruguay, U.S.A. y Venezuela.",
  },
];

const SobreNosotros = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      initial={{ backgroundPosition: "center" }}
      whileHover={{
        backgroundPosition: "10% 15%",
        transition: {
          duration: 1.5, // Duración del efecto
          ease: "easeInOut", // Easing suave
        },
      }}
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-position 0.5s ease-in-out", // Respaldo directo
      }}
    >
      <Box
        sx={{
          pb: 10,
          pt: 5,
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Header Section */}
        <Box mb={6}>
          <Typography
            variant="h3"
            sx={{
              color: "#151931",
              mt: 2,
              fontWeight: 700,
              maxWidth: "50%",
              mx: "auto",
              fontFamily: "Poppins, Raleway, sans-serif",
              fontSize: "36px",
              fontSize: {
                xs: "28px", // Tamaño de fuente para pantallas pequeñas
                sm: "32px", // Tamaño de fuente para pantallas medianas
                md: "36px", // Tamaño de fuente para pantallas grandes
              },
            }}
          >
            Transformamos tus procesos corporativos con tecnología de vanguardia
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#1B285EBA",
              textAlign: "center",
              maxWidth: "50%",
              mx: "auto",
              paddingTop: 2,
              fontFamily: "Poppins, Raleway, sans-serif",
            }}
          ></Typography>
        </Box>

        <Box sx={{ maxWidth: "1200px", mx: "auto" }} ref={ref}>
          <Grid container spacing={10} justifyContent="center">
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : -50,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 4,
                      backgroundColor: "#072BA0",
                      color: "white",
                      textAlign: "center",
                      p: 3,
                      mx: { xs: 2, sm: 1, md: 0 }, 
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Image
                        src={card.image}
                        alt="icon"
                        width={45}
                        height={45}
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "Poppins, Raleway, sans-serif",
                          fontSize: "1rem",
                        }}
                      >
                        {card.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SobreNosotros;
