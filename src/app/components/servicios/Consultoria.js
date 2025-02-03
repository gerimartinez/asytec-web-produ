import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ConsoltoriaImage from "/src/app/image/consultoria.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Consultoria = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }} 
            animate={{
              opacity: inView ? 1 : 0, 
              x: inView ? 0 : -100,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            <Image
              src={ConsoltoriaImage}
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
              Consultoría
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
                - Software ERP: Implementación, customización, soporte
                funcional/mesa de ayuda de JD Edwards, SAP, Oracle EBS <br></br>
                - Procesos de Negocio: relevamiento, análisis, documentación,
                diagnóstico, optimización y rediseño de procesos. <br></br>-
                Asesoramiento para laselección e implementación de software
                (CRM, ERP y otros). <br></br>- Diseño, implementación e
                integración de soluciones tecnológicas
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Consultoria;
