import React, { useState } from "react";
import "../styles/footer.css"
import "../styles/responsive.css";

import artstation from "../assets/artstation-icon.png";
import instagram from "../assets/instagram-icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a
          href="https://www.artstation.com/studioestelar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src= {artstation}
            alt="ArtStation"
            className="footer-icon"
          />
        </a>
        
        <a
          href="https://www.instagram.com/estelar.multimedia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src= {instagram}
            alt="Instagram"
            className="footer-icon"
          />
        </a>
      </div>
      
      <p>© {new Date().getFullYear()} Agencia Estelar. Todos los derechos reservados.</p>
    </footer>
  );
}
