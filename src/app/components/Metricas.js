"use client"
import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import MetricasImage1 from "/src/app/image/1.png";
import MetricasImage2 from "/src/app/image/2.png";
import MetricasImage3 from "/src/app/image/12.png";
import MetricasImage4 from "/src/app/image/4.png";

const Metricas = () => {
  const [metrics, setMetrics] = useState({
    downloads: 0,
    users: 0,
    clients: 0,
    countries: 0,
  });
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true); 
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (startAnimation) {
      const incrementMetric = (key, target, speed) => {
        const interval = setInterval(() => {
          setMetrics((prev) => {
            const newValue = prev[key] + Math.ceil(target / 100);
            if (newValue >= target) {
              clearInterval(interval);
              return { ...prev, [key]: target };
            }
            return { ...prev, [key]: newValue };
          });
        }, speed);
      };

      incrementMetric("downloads", 10000, 50); // 10,000+ downloads
      incrementMetric("users", 250000, 50); // 250,000 users
      incrementMetric("clients", 500, 70); // 500+ clients
      incrementMetric("countries", 10, 300); // 10+ countries
    }
  }, [startAnimation]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
        backgroundColor: "white",
        padding: 4,
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Title and Description */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "800",
              color: "#151931",
              fontFamily: "Poppins, Raleway, sans-serif",
              fontSize: "46px",
            }}
            gutterBottom
          >
            Impulsando la innovación tecnológica desde hace más de 30 años
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#1B285EBA",
              fontSize: "20px",
              fontFamily: "Poppins, Raleway, sans-serif",
            }}
          >
            Expertos en tecnología y consultoría, liderando el camino desde 1993
          </Typography>
        </Grid>

        {/* Metrics */}
        <Grid item xs={12} md={6} container spacing={4}>
          {/* First Metric */}
          <Grid item xs={6}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Image
                  src={MetricasImage1}
                  alt="Metricas1"
                  width={42}
                  height={42}
                />
                <Typography
                  variant="h4"
                  fontWeight="600"
                  sx={{
                    color: "#151931",
                    fontFamily: "Poppins, Raleway, sans-serif",
                    fontSize: {
                      xs: "1.5em", // Smaller font for mobile
                      sm: "1.5em", // Medium font for tablets
                      md: "2.125rem", // Larger font for desktops
                    },
                  }}
                >
                  {metrics.downloads.toLocaleString()}+
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="#1B285EBA"
                sx={{ fontFamily: "Poppins, Raleway, sans-serif", mx: "50px" }}
              >
                Descargas
              </Typography>
            </Box>
          </Grid>

          {/* Second Metric */}
          <Grid item xs={6}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Image
                  src={MetricasImage2}
                  alt="Metricas2"
                  width={42}
                  height={42}
                />
                <Typography
                  variant="h4"
                  fontWeight="600"
                  sx={{
                    fontFamily: "Poppins, Raleway, sans-serif",
                    color: "#151931",
                    fontSize: {
                      xs: "1.5em", // Smaller font for mobile
                      sm: "1.5em", // Medium font for tablets
                      md: "2.125rem", // Larger font for desktops
                    },
                  }}
                >
                  {metrics.users.toLocaleString()}+
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="#1B285EBA"
                sx={{ fontFamily: "Poppins, Raleway, sans-serif", mx: "50px" }}
              >
                Usuarios
              </Typography>
            </Box>
          </Grid>

          {/* Third Metric */}
          <Grid item xs={6}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Image
                  src={MetricasImage3}
                  alt="Metricas3"
                  width={42}
                  height={42}
                />
                <Typography
                  variant="h4"
                  fontWeight="600"
                  sx={{
                    fontFamily: "Poppins, Raleway, sans-serif",
                    color: "#151931",
                    fontSize: {
                      xs: "1.5em", // Smaller font for mobile
                      sm: "1.5em", // Medium font for tablets
                      md: "2.125rem", // Larger font for desktops
                    },
                  }}
                >
                  {metrics.clients}+
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="#1B285EBA"
                sx={{ fontFamily: "Poppins, Raleway, sans-serif", mx: "50px" }}
              >
                Clientes
              </Typography>
            </Box>
          </Grid>

          {/* Fourth Metric */}
          <Grid item xs={6}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Image
                  src={MetricasImage4}
                  alt="Metricas4"
                  width={42}
                  height={42}
                />
                <Typography
                  variant="h4"
                  fontWeight="600"
                  sx={{
                    fontFamily: "Poppins, Raleway, sans-serif",
                    color: "#151931",
                    fontSize: {
                      xs: "1.5em", // Smaller font for mobile
                      sm: "1.5em", // Medium font for tablets
                      md: "2.125rem", // Larger font for desktops
                    },
                  }}
                >
                  {metrics.countries}+
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="#1B285EBA"
                sx={{ fontFamily: "Poppins, Raleway, sans-serif", mx: "50px" }}
              >
                Países
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Metricas;
