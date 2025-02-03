"use client";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Logo from "/src/app/image/logoblanco.png";

function ResponsiveAppBar({ onNavigate }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const pages = [
    { name: "Home", section: "home" },
    { name: "Quiénes Somos", section: "about" },
    { name: "Servicios", section: "services" },
    { name: "Contacto", section: "contact" },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled
          ? "rgba(191, 191, 191, 0.25)" // Blurred background when scrolled
          : "transparent", // Transparent background at the top
        backdropFilter: scrolled ? "blur(10px)" : "none", // Blur effect on scroll
        boxShadow: "none",
        color: "white",
        top: 20, // Add margin from the top to "float" the navbar
        left: "50%",
        transform: "translateX(-50%)", // Center horizontally
        width: "97%", // Navbar width
        borderRadius: "15px", // Rounded shape
        padding: "0.5rem 0", // Padding top and bottom
        transition: "all 0.3s ease-in-out", // Smooth transition
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Image src={Logo} alt="Logo" width={70} height={70} />
          </Box>

          {/* Menu for Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 4 }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.section}
                  onClick={() => {
                    handleCloseNavMenu();
                    onNavigate(page.section); // Navegar a la sección correspondiente
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              justifyContent: "center",
            }}
          >
            {pages.map((page) =>
              page.name !== "Contacto" ? (
                <Button
                  key={page.section}
                  onClick={() => {
                    handleCloseNavMenu();
                    onNavigate(page.section);
                  }}
                  sx={{
                    color: "white",
                    fontSize: "1em",
                    fontWeight: 500,
                    fontFamily: "Poppins, Raleway, sans-serif",
                    "&:hover": {
                      color: "#486dc7",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ) : null
            )}
          </Box>

          <Box
            sx={{
              ml: 4,
              display: { xs: "none", md: "block" },
            }}
          >
            <Button
              variant="contained"
              onClick={() => onNavigate("contact")}
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
              CONTACTO
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
