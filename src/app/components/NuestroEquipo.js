"use client";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import BackgroundImage from "/src/app/image/fondo-nuestroequipo2.jpg";

const NuestroEquipo = () => {
  return (
    <motion.div
      initial={{ backgroundPosition: "center" }}
      whileHover={{
        backgroundPosition: "10% 15%", 
        transition: {
          duration: 1.5, 
          ease: "easeInOut",
        },
      }}
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-position 0.5s ease-in-out", // Respaldo directo
      }}
    >
      <Box
        sx={{
          py: 5, // Padding vertical
          px: 2,
          textAlign: "center",
          color: "#111827",
        }}
      >
        {/* Texto principal */}
        <Box component="section" sx={{ maxWidth: "800px", mx: "auto" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "800",
              color: "#151931",
              fontFamily: "Poppins, Raleway, sans-serif",
            }}
          >
            ¿Te gustaría formar parte de nuestro equipo?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#1B285EBA",
              mt: 3,
              lineHeight: "1.8",
              fontSize: "1.1rem",
              fontFamily: "Poppins, Raleway, sans-serif",
            }}
          >
            En Asytec siempre estamos en búsqueda de nuevos talentos. Hacé clic
            en el botón y encontrá la oportunidad ideal para vos.
          </Typography>
        </Box>

        {/* Botón */}
        <Box sx={{ mt: 5 }}>
          <Button
            variant="contained"
            href="https://www.linkedin.com/company/asytec/jobs/"
            target="_blank"
            endIcon={<SendIcon />}
            sx={{
              padding: "0.5rem 1.3rem",
              fontFamily: "Poppins, Raleway, sans-serif",
              color: "white",
              fontSize: "1em",
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
            VER BUSQUEDAS
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default NuestroEquipo;
