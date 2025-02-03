"use client";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/Navbar";
import NuestroEquipo from "./components/NuestroEquipo";
import Client from "./components/client/Clientes";
import SobreNosotros from "./components/nosotros/SobreNosotros";
import ContactForm from "./components/contact/Contact";
import HeroCarousel from "./components/Carousel";
import Consultoria from "./components/servicios/Consultoria";
import Desarollo from "./components/servicios/Desarollo";
import Rrhh from "./components/servicios/rrhh";
import Seguridad from "./components/servicios/Seguridad";
import Soporte from "./components/servicios/Soporte";
import Metricas from "./components/Metricas";
import { useRef, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/poppins/400.css"; // Peso regular
import "@fontsource/poppins/700.css"; // Peso bold (opcional)
import "@fontsource/poppins/900.css"; // Peso regular
import Loader from "./components/Loader";
import { CircularProgress, Box } from "@mui/material";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <ResponsiveAppBar
          onNavigate={(section) => {
            if (section === "home") handleScroll(homeRef);
            if (section === "about") handleScroll(aboutRef);
            if (section === "services") handleScroll(servicesRef);
            if (section === "contact") handleScroll(contactRef);
          }}
        />

        <ToastContainer />
        <div ref={homeRef}>
          <HeroCarousel />
        </div>
        <Client />
        <div ref={aboutRef}>
          <SobreNosotros />
        </div>
        <Metricas />
        <div ref={servicesRef}>
          <Consultoria />
          <Desarollo />
          <Rrhh />
          <Seguridad />
          <Soporte />
        </div>
        <NuestroEquipo />
        <div ref={contactRef}>
          <ContactForm />
        </div>
        <Footer
          onNavigate={(section) => {
            if (section === "home") handleScroll(homeRef);
            if (section === "about") handleScroll(aboutRef);
            if (section === "services") handleScroll(servicesRef);
            if (section === "contact") handleScroll(contactRef);
          }}
        />
      </div>
      {isLoading && <Loader />}
    </>
  );
}
