import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Logo from "/src/app/image/logoazul.png";
import { Typography } from "@mui/material";
import { Instagram, LinkedIn } from "@mui/icons-material";

export default function footer({ onNavigate }) {
  const pages = [
    { name: "Home", section: "home" },
    { name: "Quiénes Somos", section: "about" },
    { name: "Servicios", section: "services" },
    { name: "Contacto", section: "contact" },
  ];

  return (
    <footer className="border-t bg-gray-50 w-full flex flex-col justify-between items-center">
      <div className="container px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div
            className="flex items-center space-x-2  md:ml-8"
            style={{ marginLeft: 32 }}
          >
            <Image src={Logo} alt="Asytec Logo" width={70} height={70} />
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:ml-16">
            {pages.map((page) => (
              <Link
                style={{ color: "#151931" }}
                href={`#${page.section}`}
                className="text-sm hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(page.section);
                }}
                key={page.section}
              >
                {page.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 ">
            <Link
              href="https://www.instagram.com/asytecsistemas/"
              className="text-[#151931] hover:text-[#486dc7]"
              target="_blank"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/asytec/"
              className="text-[#151931] hover:text-[#486dc7]"
              target="_blank"
            >
              <LinkedIn className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <Typography
          variant="body2"
          sx={{
            fontFamily: "Poppins, Raleway, sans-serif",
            color: "#7892d4",
          }}
          textAlign={"center"}
          marginTop={3}
        >
          +54 11 5367-8000 - Congreso 2171 Piso 8° Of. A - (C1428BVE) - C.A.B.A.
          - Argentina - info@asytec.com ASYTEC Sistemas S.R.L. © 2024. Todos los
          derechos reservados.
        </Typography>
      </div>
    </footer>
  );
}
// ##486dc7 primer color degradado
// #7892d4 segundo
// #a8b8e0
// #d9dbea
