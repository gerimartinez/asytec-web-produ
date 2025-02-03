import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import RrhhImage from "/src/app/image/Soporte.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Soporte = () => {
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
        backgroundColor: "#f4f5f7",
        padding: 4,
        overflow: "hidden",
      }}
      ref={ref}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Image/Illustration Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
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
            <Image
              src={RrhhImage}
              alt="Consulting Illustration"
              style={{
                maxWidth: "520px",
                height: "320px",
                borderRadius: "30px",
              }}
            />
          </motion.div>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
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
              Soporte tecnico{" "}
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
                Brindamos asistencia profesional para garantizar la continuidad
                operativa de tus sistemas. <br />
                - Soporte remoto y presencial.
                <br />
                - Monitoreo proactivo de infraestructura.
                <br />
                - Resolución de incidencias y mantenimiento preventivo.
                <br />- Capacitación a usuarios para un uso eficiente de la
                tecnología.
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Soporte;
// #151931 principal titulos oscuro
// ##486dc7 primer color degradado
// #7892d4 segundo
// #a8b8e0
// #d9dbea
