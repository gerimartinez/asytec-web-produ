import React from "react";
import { Box } from "@mui/material";

const GoogleMap = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        height: { xs: "300px", md: "453px" }, 
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6571.96322042159!2d-58.460234!3d-34.554021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb53920bb9b89%3A0x1fdfac74a5c14edf!2sAv.%20Congreso%202171%2C%20C1428BVE%20Haedo%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1734971012772!5m2!1ses-419!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </Box>
  );
};

export default GoogleMap;
