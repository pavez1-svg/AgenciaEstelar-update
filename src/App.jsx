import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Secciones
import Inicio from "./sections/Inicio";
import NuestroTrabajo from "./sections/NuestroTrabajo";
import SobreNosotros from "./sections/SobreNosotros";
import Contacto from "./sections/Contacto";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#2a0070] to-[#140030] text-white overflow-x-hidden">
      

      <main>
        <section id="inicio">
          <Inicio />
        </section>

        <section id="trabajo">
          <NuestroTrabajo />
        </section>

{/*    <section id="nosotros">
          <SobreNosotros />
        </section>

        <section id="contacto">
          <Contacto />
        </section>*/} 
      </main>    

      <Footer />
    </div>
  );
}


export default App;

