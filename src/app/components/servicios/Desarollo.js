import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import DesarolloImage from "/src/app/image/soporte-tecnico.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Desarollo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se activa solo la primera vez que se ve la sección
    threshold: 0.5, // La animación se dispara cuando el 50% de la sección es visible
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        padding: 4,
        overflow: "hidden",
      }}
      ref={ref}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Inicia fuera de la pantalla a la izquierda
            animate={{
              opacity: inView ? 1 : 0, // Cuando está en vista, se vuelve visible
              x: inView ? 0 : -100, // El texto entra desde la izquierda
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "700",
                color: "#151931",
                fontFamily: "Poppins, Raleway, sans-serif",
                textAlign: "center",
                fontSize: "36px",
              }}
            >
              Desarrollo
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 2, sm: 1, md: 10 },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#1B285EBA",
                  fontFamily: "Poppins, Raleway, sans-serif",
                  textAlign: "justify",
                  mx: { xs: 2, sm: 1, md: 1 }, // Add margin for smaller screens
                }}
              >
                Creamos soluciones tecnológicas a medida, diseñadas para
                potenciar la productividad y el crecimiento de tu empresa.{" "}
                <br />
                - Desarrollo de aplicaciones web y móviles. <br />
                - Integración de sistemas legacy. <br />
                - Automatización de procesos. <br />- Mantenimiento y
                actualización de software.
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        {/* Image/Illustration Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Inicia fuera de la pantalla a la derecha
            animate={{
              opacity: inView ? 1 : 0, // Cuando está en vista, se vuelve visible
              x: inView ? 0 : 100, // La imagen entra desde la derecha
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            <Image
              src={DesarolloImage}
              alt="Consulting Illustration"
              style={{
                maxWidth: "520px",
                height: "320px",
                borderRadius: "30px",
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Desarollo;
