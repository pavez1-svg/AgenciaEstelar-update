import React, { useState } from "react";
import "../styles/navbar.css";

type NavbarProps = {
  setActive: (index: number) => void;
  openToast: (proyecto: any) => void;
  proyectos: any[];
};

const Navbar: React.FC<NavbarProps> = ({ setActive, openToast, proyectos }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => setIsOpen(!isOpen);

  const handleGoToProject = (index: number) => {
    // Cierra el sidebar
    toggleSidebar();

    // Scroll suave al carrusel
    const section = document.getElementById("trabajo");
    section?.scrollIntoView({ behavior: "smooth" });

    // Espera a que termine el scroll
    setTimeout(() => {
      setActive(index); // mueve la tarjeta
    }, 400);

    // Espera a que setActive haya hecho efecto
    setTimeout(() => {
      openToast(proyectos[index]); // abre el popup SIEMPRE
    }, 750); // este timing es el que lo hace funcionar
  };

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        <div className={isOpen ? "bar rotate1" : "bar"}></div>
        <div className={`bar middle ${isOpen ? "fade" : ""}`}></div>
        <div className={isOpen ? "bar rotate2" : "bar"}></div>
      </div>

      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li className="li-inicio">
            <a href="#inicio" onClick={toggleSidebar}>Fin</a>
          </li>

          <li>
            <a href="#trabajo" onClick={toggleSidebar}>Conocimientos</a>
          </li>
          <li>
            <a role="button" onClick={() => handleGoToProject(0)}>3.º coordenada</a>
          </li>

          <li>
            <a role="button" onClick={() => handleGoToProject(1)}>Luz y forma</a>
          </li>

          <li>
            <a role="button" onClick={() => handleGoToProject(2)}>Formas en tránsito</a>
          </li>

          <li>
            <a role="button" onClick={() => handleGoToProject(3)}>Espacio navegable</a>
          </li>
          <li>
            <a role="button" onClick={() => handleGoToProject(4)}>Cápsula visual</a>
          </li>
          <li>
            <a role="button" onClick={() => handleGoToProject(5)}>Núcleo de propósito</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;