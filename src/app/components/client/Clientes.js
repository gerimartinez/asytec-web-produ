"use client";
import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import austral from "/src/app/image/austral.png";
import ba from "/src/app/image/ba.svg.png";
import cablevision from "/src/app/image/cablevision.svg.png";
import cauquen from "/src/app/image/cauquen.png";
import lesaffre from "/src/app/image/lesaffre.png";
import level3 from "/src/app/image/level32.png";
import lojack from "/src/app/image/lojack.png";
import metropol from "/src/app/image/metropol.svg.png";
import modo from "/src/app/image/modo.png";
import newsan from "/src/app/image/newsan.png";
import nextel from "/src/app/image/nextel.svg.png";
import pecom from "/src/app/image/pecom.png";
import petrobras from "/src/app/image/petrobras2.png";
import petrocuyo from "/src/app/image/petrocuyo.png";
import pluspetrol from "/src/app/image/pluspetrol.png";
import richet from "/src/app/image/richet.png";
import sadesa from "/src/app/image/sadesa.png";
import telecom from "/src/app/image/telecom.png";
import toyota from "/src/app/image/toyota2.png";
import walmart from "/src/app/image/walmart2.png";
import bianchi from "/src/app/image/bianchi.png";

const Client = () => {
  return (
    <>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }} 
          spaceBetween={40}
          slidesPerView={5} 
          navigation={true} 
          loop={true} 
          justify-content="center"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 }, 
            480: { slidesPerView: 2, spaceBetween: 30 }, 
            640: { slidesPerView: 2, spaceBetween: 40 }, 
            768: { slidesPerView: 3, spaceBetween: 40 }, 
            1024: { slidesPerView: 5, spaceBetween: 40 }, 
          }}
        >
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 9,
              }}
            >
              <Image
                src={austral}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 9,
              }}
            >
              <Image
                src={ba}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 8,
              }}
            >
              <Image
                src={cablevision}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{ width: "100%", margin: "40px auto", textAlign: "center" }}
            >
              <Image
                src={cauquen}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{ width: "100%", margin: "35px auto", textAlign: "center" }}
            >
              <Image
                src={lesaffre}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={level3}
              alt="Logo 1"
              style={{ maxWidth: "60%", height: "auto", margin: "40px auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ width: "100%", mt: 3 }}>
              <Image
                src={lojack}
                alt="Logo 1"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 10,
              }}
            >
              <Image
                src={metropol}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 8,
              }}
            >
              <Image
                src={modo}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 9,
              }}
            >
              <Image
                src={newsan}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 9,
              }}
            >
              <Image
                src={nextel}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 9,
              }}
            >
              <Image
                src={pecom}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={petrobras}
              alt="Logo 1"
              style={{ maxWidth: "70%", height: "auto", margin: "20px auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 9,
              }}
            >
              <Image
                src={petrocuyo}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 9,
              }}
            >
              <Image
                src={pluspetrol}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{ width: "100%", margin: "50px auto", textAlign: "center" }}
            >
              <Image
                src={richet}
                alt="Logo 1"
                style={{ maxWidth: "40%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{ width: "100%", margin: "50px auto", textAlign: "center" }}
            >
              <Image
                src={sadesa}
                alt="Logo 1"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                margin: "50px auto",
                textAlign: "center",
                mt: 9,
              }}
            >
              <Image
                src={telecom}
                alt="Logo 1"
                style={{ maxWidth: "60%", height: "auto" }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={toyota}
              alt="Logo 1"
              style={{ maxWidth: "70%", height: "auto", margin: "20px auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={walmart}
              alt="Logo 1"
              style={{ maxWidth: "70%", height: "auto", margin: "20px auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bianchi}
              alt="Logo 1"
              style={{ maxWidth: "50%", margin: "30px auto", height: "auto" }}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #4a6d76; /* Cambia el color */
          font-size: 0.3em; /* Cambia el tamaño */
          /* Centra las flechas verticalmente */
        }
        .swiper-button-prev {
          left: 10px; /* Espaciado a la izquierda */
        }
        .swiper-button-next {
          right: 10px; /* Espaciado a la derecha */
        }
        .swiper-slide img {
          display: block;
          margin: 0 auto; /* Centra las imágenes */
        }
        .swiper-slide:first-of-type {
          margin-left: 20px; /* Espacio inicial */
        }
      `}</style>
    </>
  );
};
export default Client;
