import { Box, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import Background from "/src/app/image/fondo-contacto2.png";
import { useState } from "react";
import { toast } from "react-toastify"; 
import emailjs from "@emailjs/browser";
import GoogleMap from "/src/app/components/contact/ContactMap";

function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        name: userInput.name,
        number: userInput.number,
        email: userInput.email,
        message: userInput.message,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          number: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ backgroundPosition: "center" }}
      whileHover={{
        backgroundPosition: "10% 40%",
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      }}
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-position 0.5s ease-in-out",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Título y descripción */}
        <Box
          sx={{
            textAlign: "center",
            py: 5,
            px: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#151931",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "36px" },
              fontFamily: "Poppins, Raleway, sans-serif",
            }}
          >
            Contacto
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#1B285EBA",
              maxWidth: "800px",
              margin: "0 auto",
              pt: "20px",
              lineHeight: "1.8",
              fontFamily: "Poppins, Raleway, sans-serif",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            Contactanos para más información sobre nuestros servicios.
          </Typography>
        </Box>

        {/* Sección del mapa y formulario */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "20px",
            gap: 4,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              pb: { xs: 2, md: 0 },
            }}
          >
            <GoogleMap />
          </Box>
          {/* Formulario de contacto */}
          <Box
            sx={{
              flex: 1,
              maxWidth: "500px",
              borderRadius: "8px",
              padding: "20px",
              width: { xs: "100%", md: "auto" },
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                value={userInput.name}
                onChange={handleChange}
                name="name"
                id="name"
                label="Nombre"
                margin="normal"
                variant="filled"
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#F2F4F8",
                    fontFamily: "Poppins, Raleway, sans-serif",
                  },
                }}
              />

              <TextField
                fullWidth
                required
                name="number"
                value={userInput.number}
                onChange={handleChange}
                id="telefono"
                label="Telefono"
                margin="normal"
                variant="filled"
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#F2F4F8",
                  },
                }}
              />
              <TextField
                fullWidth
                required
                name="email"
                value={userInput.email}
                onChange={handleChange}
                id="email"
                label="Correo Electrónico"
                margin="normal"
                variant="filled"
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#F2F4F8",
                  },
                }}
                type="email"
              />
              <TextField
                fullWidth
                required
                name="message"
                value={userInput.message}
                onChange={handleChange}
                id="message"
                label="Mensaje"
                margin="normal"
                variant="filled"
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#F2F4F8",
                  },
                }}
                multiline
                rows={4}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  padding: "0.5rem 1.3rem",
                  mx: { xs: "auto", md: "175px" },
                  my: "20px",
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
                ENVIAR
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default ContactForm;
// #151931 principal titulos oscuro
// ##486dc7 primer color degradado
// #7892d4 segundo
// #a8b8e0
// #d9dbea
