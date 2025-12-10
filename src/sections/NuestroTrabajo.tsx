import React, { useState } from "react";
import "../styles/global.css";
import "../styles/responsive.css";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/Navbar";

import fondo2 from "../assets/seccion2-06.png";
import portada3d from "../assets/3d-icon.png";
import portada2 from "../assets/diseno-icon.png";
import portada3 from "../assets/motion-icon.png";
import portada4 from "../assets/webs-icon.png";
import portada5 from "../assets/reel-icon.png";
import portada6 from "../assets/manifiesto-icon.png";

import playIcon from "../assets/play_icon.svg";

import espacioExterior1 from "../assets/espacioExterior1.jpg";
import espacioExterior1Mobile from "../assets/9x16-espacioExterior1.jpg";
import espacioExterior2 from "../assets/espacioExterior2.jpg";
import espacioExterior2Mobile from "../assets/9x16-espacioExterior2.jpg";
import espacioExterior3 from "../assets/espacioExterior3.jpg";
import espacioExterior3Mobile from "../assets/9x16-espacioExterior3.jpg";
import espacioExterior4 from "../assets/espacioExterior4.jpg";
import espacioExterior4Mobile from "../assets/9x16-espacioExterior4.jpg";
import espacioExterior5 from "../assets/espacioExterior5.jpg";
import espacioExterior5Mobile from "../assets/9x16-espacioExterior5.jpg";
import espacioExterior6 from "../assets/espacioExterior6.jpg";
import espacioExterior6Mobile from "../assets/9x16-espacioExterior6.jpg";

import muñeca0 from "../assets/muneca-render.mp4";
import muñeca1 from "../assets/muneca1.jpg";
import muñeca1Mobile from "../assets/9x16-muneca1.jpg";
import muñeca2 from "../assets/muneca2.jpg";
import muñeca2Mobile from "../assets/9x16-muneca2.jpg";
import muñeca3 from "../assets/muneca3.jpg";
import muñeca3Mobile from "../assets/9x16-muneca3.jpg";
import muñeca4 from "../assets/muneca4.jpg";
import muñeca4Mobile from "../assets/9x16-muneca4.jpg";

import ovni0 from "../assets/ovni-render.mp4";
import ovni1 from "../assets/ovni1.jpg";
import ovni1Mobile from "../assets/9x16-ovni1.jpg";
import ovni2 from "../assets/ovni2.jpg";
import ovni2Mobile from "../assets/9x16-ovni2.jpg";
import ovni3 from "../assets/ovni3.jpg";
import ovni3Mobile from "../assets/9x16-ovni3.jpg";

import satelite0 from "../assets/satelite-render.mp4";
import satelite1 from "../assets/satelite1.jpg";
import satelite1Mobile from "../assets/9x16-satelite1.jpg";
import satelite2 from "../assets/satelite2.jpg";
import satelite2Mobile from "../assets/9x16-satelite2.jpg";
import satelite3 from "../assets/satelite3.jpg";
import satelite3Mobile from "../assets/9x16-satelite3.jpg";
import satelite4 from "../assets/satelite4.jpg";
import satelite4Mobile from "../assets/9x16-satelite4.jpg";
import satelite5 from "../assets/satelite5.jpg";
import satelite5Mobile from "../assets/9x16-satelite5.jpg";

import nave0 from "../assets/nave-render.mp4";
import nave1 from "../assets/nave1.jpg";
import nave1Mobile from "../assets/9x16-nave1.jpg";
import nave2 from "../assets/nave2.jpg";
import nave2Mobile from "../assets/9x16-nave2.jpg";
import nave3 from "../assets/nave3.jpg";
import nave3Mobile from "../assets/9x16-nave3.jpg";

import piano0 from "../assets/piano-render.mp4";
import piano1 from "../assets/piano1.jpg";
import piano1Mobile from "../assets/9x16-piano1.jpg";
import piano2 from "../assets/piano3.jpg";
import piano2Mobile from "../assets/9x16-piano2.jpg";
import piano3 from "../assets/piano2.jpg";
import piano3Mobile from "../assets/9x16-piano3.jpg";

import reloj0 from "../assets/reloj-render.mp4";
import reloj1 from "../assets/reloj1.jpg";
import reloj1Mobile from "../assets/9x16-reloj1.jpg";
import reloj2 from "../assets/reloj2.jpg";
import reloj2Mobile from "../assets/9x16-reloj2.jpg";
import reloj3 from "../assets/reloj3.jpg";
import reloj3Mobile from "../assets/9x16-reloj3.jpg";

import rockola0 from "../assets/rockola-render.mp4";
import rockola1 from "../assets/rockola1.jpg";
import rockola1Mobile from "../assets/9x16-rockola1.jpg";
import rockola2 from "../assets/rockola2.jpg";
import rockola2Mobile from "../assets/9x16-rockola2.jpg";
import rockola3 from "../assets/rockola3.jpg";
import rockola3Mobile from "../assets/9x16-rockola3.jpg";
import rockola4 from "../assets/rockola4.jpg";
import rockola4Mobile from "../assets/9x16-rockola4.jpg";

import starwars from "../assets/star-wars-2.jpg";
import starwarsMobile from "../assets/9x16-star-wars.jpg";
import starwars2 from "../assets/star-wars-breakdown.mp4";
import sirena from "../assets/sirena-3.jpg";
import sirenaMobile from "../assets/9x16-sirena.jpg";
import sirena2 from "../assets/sirena-breakdown-2.mp4";
import wonder from "../assets/wonder_woman.jpg";
import wonderMobile from "../assets/9x16-wonder-woman.jpg";
import wonder2 from "../assets/wonder-woman-breakdown.mp4";
import blue from "../assets/perfect-blue-4.jpg";
import blueMobile from "../assets/9x16-perfect-blue.jpg";
import blue2 from "../assets/perfect-blue-breakdown.mp4";
import drinkeat1 from "../assets/drinkeat-slide2.jpg";
import drinkeat1Mobile from "../assets/9x16-drinkeat-slide2.jpg";
import drinkeat2 from "../assets/drinkeat-slide3.jpg";
import drinkeat2Mobile from "../assets/9x16-drinkeat-slide3.jpg";
import drinkeat3 from "../assets/drinkeat-slide12.jpg";
import drinkeat3Mobile from "../assets/9x16-drinkeat-slide12.jpg";
import drinkeat4 from "../assets/drinkeat-slide15.jpg";
import drinkeat4Mobile from "../assets/9x16-drinkeat-slide15.jpg";
import drinkeat5 from "../assets/drinkeat-slide16.jpg";
import drinkeat5Mobile from "../assets/9x16-drinkeat-slide16.jpg";
import drinkeat6 from "../assets/drinkeat-slide17.jpg";
import drinkeat6Mobile from "../assets/9x16-drinkeat-slide17.jpg";
import drinkeat7 from "../assets/drinkeat-slide18.jpg";
import drinkeat7Mobile from "../assets/9x16-drinkeat-slide18.jpg";
import drinkeat8 from "../assets/drinkeat-slide19.jpg";
import drinkeat8Mobile from "../assets/9x16-drinkeat-slide19.jpg";

import mtv from "../assets/videos/mtv.mp4";
import clones from "../assets/videos/clones.mp4";
import estelar from "../assets/videos/Estelar_AJR_MaybeMan_V1_01.mp4";
import flybondi from "../assets/videos/flybondi2.mp4";
import infografia from "../assets/videos/infografia.mp4";
import fresca from "../assets/videos/fresca_lowerSize.mp4";

import webterra from "../assets/terra-header.jpg";
import webterraMobile from "../assets/9x16-terra-header.jpg";
import webresident from "../assets/re4-header.jpg";
import webresidentMobile from "../assets/9x16-re4-header.jpg";
import webprana from "../assets/yoga-header.jpg";
import webpranaMobile from "../assets/9x16-yoga-header.jpg";

import reel from "../assets/reel_lowerSize.mp4";

import manifiesto from "../assets/manifiesto_lowerSize.mp4";

// ====================== TIPOS ======================
type Media = {
  type: "image" | "video";
  src: string;
  mobileSrc?: string;
  bigMobileSrc?: string;
};

type Slide = {
  titulo: string;
  descripcion1: string;
  descripcion2: string;
  galeria: Media[];
  link?: {
    url: string;
    text: string;
  };
};

type Proyecto = {
  id: number;
  titulo: string;
  portada: string;
  slides: Slide[];
};

// ====================== DATA ======================
const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "3.º coordenada",
    portada: portada3d,
    slides: [
      {
        titulo: "Registros materiales de viajes estelares",
        descripcion1: "Ecos de cada planeta donde aterrizamos, conversamos y comerciamos luz",
        galeria: [
          { type: "image", src: espacioExterior1, mobileSrc: espacioExterior1Mobile, bigMobileSrc: espacioExterior1Mobile },
          { type: "image", src: espacioExterior2, mobileSrc: espacioExterior2Mobile, bigMobileSrc: espacioExterior2Mobile },
          { type: "image", src: espacioExterior3, mobileSrc: espacioExterior3Mobile, bigMobileSrc: espacioExterior3Mobile },
          { type: "image", src: espacioExterior4, mobileSrc: espacioExterior4Mobile, bigMobileSrc: espacioExterior4Mobile },
          { type: "image", src: espacioExterior5, mobileSrc: espacioExterior5Mobile, bigMobileSrc: espacioExterior5Mobile },
          { type: "image", src: espacioExterior6, mobileSrc: espacioExterior6Mobile, bigMobileSrc: espacioExterior6Mobile },
        ],
      },
      {
        titulo: "Saltador estelar",
        descripcion1: "Primera forma de cruzar al vacío para pequeños estelares",
        galeria: [
          { type: "image", src: nave1, mobileSrc: nave1Mobile, bigMobileSrc: nave1Mobile },
          { type: "image", src: nave2, mobileSrc: nave2Mobile, bigMobileSrc: nave2Mobile },
          { type: "image", src: nave3, mobileSrc: nave3Mobile, bigMobileSrc: nave3Mobile },
          { type: "video", src: nave0 }
        ],
      },
      {
        titulo: "Oreja intergaláctica",
        descripcion1: "Aparato que chusmea lo que dicen los otros planetas... y lo traduce sin ofender a nadie",
        galeria: [
          { type: "image", src: satelite1, mobileSrc: satelite1Mobile, bigMobileSrc: satelite1Mobile },
          { type: "image", src: satelite2, mobileSrc: satelite2Mobile, bigMobileSrc: satelite2Mobile },
          { type: "image", src: satelite3, mobileSrc: satelite3Mobile, bigMobileSrc: satelite3Mobile },
          { type: "image", src: satelite4, mobileSrc: satelite4Mobile, bigMobileSrc: satelite4Mobile },
          { type: "image", src: satelite5, mobileSrc: satelite5Mobile, bigMobileSrc: satelite5Mobile },
          { type: "video", src: satelite0 }
        ],
      },
      {
        titulo: "Plato viajero",
        descripcion1: "Diseñada para pasar desapercibida en cocinas humanas",
        galeria: [
          { type: "image", src: ovni1, mobileSrc: ovni1Mobile, bigMobileSrc: ovni1Mobile },
          { type: "image", src: ovni2, mobileSrc: ovni2Mobile, bigMobileSrc: ovni2Mobile },
          { type: "image", src: ovni3, mobileSrc: ovni3Mobile, bigMobileSrc: ovni3Mobile },
          { type: "video", src: ovni0 }
        ],
      },
      {
        titulo: "HuMan4 pr0T0tip0 B3ta",
        descripcion1: "Intentamos reconstruirlos humanos... y bueno, salió esto",
        galeria: [
          { type: "image", src: muñeca1, mobileSrc: muñeca1Mobile, bigMobileSrc: muñeca1Mobile },
          { type: "image", src: muñeca2, mobileSrc: muñeca2Mobile, bigMobileSrc: muñeca2Mobile },
          { type: "image", src: muñeca3, mobileSrc: muñeca3Mobile, bigMobileSrc: muñeca3Mobile },
          { type: "image", src: muñeca4, mobileSrc: muñeca4Mobile, bigMobileSrc: muñeca4Mobile },
          { type: "video", src: muñeca0 }
        ],
      },
      {
        titulo: "Voces atrapadas en rosa",
        descripcion1: "¡CUIDADO! Contiene gritos humanos, que siguen atrapados incluso cuando la máquina duerme",
        galeria: [
          { type: "image", src: rockola1, mobileSrc: rockola1Mobile, bigMobileSrc: rockola1Mobile },
          { type: "image", src: rockola2, mobileSrc: rockola2Mobile, bigMobileSrc: rockola2Mobile },
          { type: "image", src: rockola3, mobileSrc: rockola3Mobile, bigMobileSrc: rockola3Mobile },
          { type: "image", src: rockola4, mobileSrc: rockola4Mobile, bigMobileSrc: rockola4Mobile },
          { type: "video", src: rockola0 }
        ],
      },
      {
        titulo: "Caja de sonidos por golpecitos",
        descripcion1: "Los humanos tocan sus superficies blancas y negras... y la máquina canta",
        galeria: [
          { type: "image", src: piano1, mobileSrc: piano1Mobile, bigMobileSrc: piano1Mobile },
          { type: "image", src: piano2, mobileSrc: piano2Mobile, bigMobileSrc: piano2Mobile },
          { type: "image", src: piano3, mobileSrc: piano3Mobile, bigMobileSrc: piano3Mobile },
          { type: "video", src: piano0 }
        ],
      },
      {
        titulo: "Trampa para minutos",
        descripcion1: "Los humanos inventaron esto para agarrar al tiempo pero no se dejó",
        galeria: [
          { type: "image", src: reloj1, mobileSrc: reloj1Mobile, bigMobileSrc: reloj1Mobile },
          { type: "image", src: reloj2, mobileSrc: reloj2Mobile, bigMobileSrc: reloj2Mobile },
          { type: "image", src: reloj3, mobileSrc: reloj3Mobile, bigMobileSrc: reloj3Mobile },
          { type: "video", src: reloj0 }
        ],
      },
    ],
  },
  {
    id: 2,
    titulo: "Luz y forma",
    portada: portada2,
    slides: [
      {
        titulo: "Guerra estelar",
        descripcion1: "Documento de conflictos cósmicos... ¿reales o imaginados?",
        galeria:[
          { type: "image", src: starwars, mobileSrc: starwarsMobile, bigMobileSrc: starwarsMobile },
          { type: "video", src: starwars2 }
        ],
      },
      {
        titulo: "Medusa en ESTELAR mayor",
        descripcion1: "¿Cómo lo lograron? La tía medusa posa igual para su foto del pasaporte interestelar...",
        galeria: [
          { type: "image", src: sirena, mobileSrc: sirenaMobile, bigMobileSrc: sirenaMobile},
          { type: "video", src: sirena2 }
        ],
      },
      {
        titulo: "Fuga líquida armónica",
        descripcion1: (<>¿Lágrimas que salen transmisor?<br />
                      Aún evaluamos si eso es normal en su especie...</>),
        galeria: [
          { type: "image", src: blue, mobileSrc: blueMobile, bigMobileSrc: blueMobile },
          { type: "video", src: blue2 }
        ],
      },
      {
        titulo: "Guerrera terrícola",
        descripcion1: "Evidencia de la obsesión terrestre por capas y heroína",
        galeria: [
          { type: "image", src: wonder, mobileSrc: wonderMobile, bigMobileSrc: wonderMobile },
          { type: "video", src: wonder2 },
        ],
      },
      {
        titulo: "Dr1nke4t",
        descripcion1: (<>Sólidos y líquidos<br />
                      generan gases...<br />
                      que salen por ahí.......
                      </>),
        galeria: [
          { type: "image", src: drinkeat1, mobileSrc: drinkeat1Mobile, bigMobileSrc: drinkeat1Mobile },
          { type: "image", src: drinkeat2, mobileSrc: drinkeat2Mobile, bigMobileSrc: drinkeat2Mobile },
          { type: "image", src: drinkeat3, mobileSrc: drinkeat3Mobile, bigMobileSrc: drinkeat3Mobile },
          { type: "image", src: drinkeat4, mobileSrc: drinkeat4Mobile, bigMobileSrc: drinkeat4Mobile },
          { type: "image", src: drinkeat5, mobileSrc: drinkeat5Mobile, bigMobileSrc: drinkeat5Mobile },
          { type: "image", src: drinkeat6, mobileSrc: drinkeat6Mobile, bigMobileSrc: drinkeat6Mobile },
          { type: "image", src: drinkeat7, mobileSrc: drinkeat7Mobile, bigMobileSrc: drinkeat7Mobile },
          { type: "image", src: drinkeat8, mobileSrc: drinkeat8Mobile, bigMobileSrc: drinkeat8Mobile }
        ],
      },
    ],
  },
  {
    id: 3,
    titulo: "Formas en tránsito",
    portada: portada3,
    slides: [
      {
        titulo: "Intervención en vivo",
        descripcion1: "MTV amigo",
        descripcion2: " ",
        galeria: [{ type: "video", src: mtv }],
      },
      {
        titulo: "Clones",
        descripcion1: "Presentamos nuestro apoyo en contra de los originales",
        descripcion2: " ",
        galeria: [{ type: "video", src: clones }],
      },
      {
        titulo: "Intérprete emocional",
        descripcion1: "¿Por qué los humanos tienen tantos idiomas? Solo elijan al mejor, el nuestro!¡",
        descripcion2: " ",
        galeria: [{ type: "video", src: estelar }],
      },
      {
        titulo: "Mensaje desde los cielos",
        descripcion1: "¿Saltos entre ciudades y caminos aéreos? Por algo se empieza...",
        descripcion2: " ",
        galeria: [{ type: "video", src: flybondi }],
      },
      {
        titulo: "Pensar-no-humano",
        descripcion1: "Intento humano de explicar lo que ellos mismos inventaron y ya no entienden del todo",
        descripcion2: " ",
        galeria: [{ type: "video", src: infografia }],
      },
      {
        titulo: "Fideos infinitos",
        descripcion1: "Ningún humano fue herido durante su producción! :D",
        descripcion2: " ",
        galeria: [{ type: "video", src: fresca }],
      },
    ],
  },
  {
    id: 4,
    titulo: "Espacio navegable",
    portada: portada4,
    slides: [
      {
        titulo: "Terra",
        descripcion1: "!!!Vendemos humanos¡¡¡",
        galeria: [{ type: "image", src: webterra, mobileSrc: webterraMobile, bigMobileSrc: webterraMobile }],
        link: {
          url: "http://107.20.232.211/",
          text: "Visitar Terra",
        },
      },
      {
        titulo: "Portal de respiración",
        descripcion1: "Para la mejor calibración, alineación y funcionamiento de su cobardía!! :D",
        galeria: [{ type: "image", src: webprana, mobileSrc: webpranaMobile, bigMobileSrc: webpranaMobile }],
        link: {
          url: "https://vleitaop.github.io/PranaSite/",
          text: "Visitar Prana Yoga",
        },
      },
      {
        titulo: "Residente malito 444",
        descripcion1: "Creemos que su enfermedad se debe a su temor por lo desconocido",
        galeria: [{ type: "image", src: webresident, mobileSrc: webresidentMobile, bigMobileSrc: webresidentMobile }],
        link: {
          url: "https://residentevil4byestelar.netlify.app/",
          text: "Visitar Resident Evil 4",
        },
      },
    ],
  },
  {
    id: 5,
    titulo: "Cápsula visual",
    portada: portada5,
    slides: [
      {
        titulo: "Sorpresa ocular!!",
        descripcion1: "",
        galeria: [{ type: "video", src: reel }]
      }
    ],
  },
  {
    id: 6,
    titulo: "Núcleo de propósito",
    portada: portada6,
    slides: [
      {
        titulo: "Llamado de origen",
        descripcion1: "",
        galeria: [{ type: "video", src: manifiesto }]
      }
    ],
  },
];

// ====================== COMPONENTE ======================
import { useScroll } from "framer-motion";

export default function NuestroTrabajo() {
  const { scrollY } = useScroll();

  // Estado interno del scroll real
  const [scrollVal, setScrollVal] = useState(0);

  // Escucha cambios del scroll
  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrollVal(latest);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const width = window.innerWidth;

  const isMobile = width <= 480;
  const isBigMobile = width > 572 && width <= 768;
  const isBigMobile2 = width > 480 && width <= 572;
  const isTablet = width > 768 && width <= 1024;
  const isDektop = width > 1024; 

  const radiusStart =
    isMobile ? 180 :
    isBigMobile ? 160 :
    140;
  const radiusEnd =
    isMobile ? 200 :
    isBigMobile ? 270 :
    isBigMobile2 ? 200 :
    320;

  const yStart =
    isMobile ? -260 :
    isBigMobile ? -300 :
    -300;
  const yEnd =
    isMobile ? -15 :
    isBigMobile ? 55 :
    isBigMobile2 ? 70 :
    0;

  const scrollThreshold = 20;

  // progreso normalizado entre 0 y 1
  const scrollProgress = Math.min(scrollVal / scrollThreshold, 1);

  // interpolaciones
  const currentRadius = radiusStart + (radiusEnd - radiusStart) * scrollProgress;
  const currentY = yStart + (yEnd - yStart) * scrollProgress;


  const [active, setActive] = useState<number>(1);
  const [toastProject, setToastProject] = useState<Proyecto | null>(null);
  const [slideByProject, setSlideByProject] = useState<Record<number, number>>({});
  const [galleryIndexByProject, setGalleryIndexByProject] = useState<
    Record<number, Record<number, number>>
  >({});
  const [lightbox, setLightbox] = useState<Media | null>(null);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // Gestos táctiles
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = (proyecto: Proyecto) => {
    if (touchStart - touchEnd > 75) nextSlideInProject(proyecto);
    if (touchStart - touchEnd < -75) prevSlideInProject(proyecto);
  };

  // Toast
  const openToast = (proyecto: Proyecto) => {
    setToastProject(proyecto);
    setSlideByProject((prev) => ({ ...prev, [proyecto.id]: 0 }));
    setGalleryIndexByProject((prev) => {
      const init: Record<number, number> = {};
      proyecto.slides.forEach((_, i) => (init[i] = 0));
      return { ...prev, [proyecto.id]: init };
    });
  };

  const closeToast = () => setToastProject(null);

  // Slides
  
  const nextSlideInProject = (proyecto: Proyecto) => {
    const cur = slideByProject[proyecto.id] ?? 0;
    const next = (cur + 1) % proyecto.slides.length;
    setSlideByProject((prev) => ({ ...prev, [proyecto.id]: next }));
  };

  const prevSlideInProject = (proyecto: Proyecto) => {
    const cur = slideByProject[proyecto.id] ?? 0;
    const prevIdx = cur === 0 ? proyecto.slides.length - 1 : cur - 1;
    setSlideByProject((prev) => ({ ...prev, [proyecto.id]: prevIdx }));
  };

  // Galería
  const changeGalleryImage = (proyectoId: number, slideIdx: number, imgIdx: number) => {
    setGalleryIndexByProject((prev) => ({
      ...prev,
      [proyectoId]: { ...(prev[proyectoId] || {}), [slideIdx]: imgIdx },
    }));
  };

  const nextImageInSlide = (proyecto: Proyecto) => {
    const slideIdx = slideByProject[proyecto.id] ?? 0;
    const cur = galleryIndexByProject[proyecto.id]?.[slideIdx] ?? 0;
    const len = proyecto.slides[slideIdx].galeria.length;
    const next = (cur + 1) % len;
    changeGalleryImage(proyecto.id, slideIdx, next);
  };

  const prevImageInSlide = (proyecto: Proyecto) => {
    const slideIdx = slideByProject[proyecto.id] ?? 0;
    const cur = galleryIndexByProject[proyecto.id]?.[slideIdx] ?? 0;
    const len = proyecto.slides[slideIdx].galeria.length;
    const prevIdx = cur === 0 ? len - 1 : cur - 1;
    changeGalleryImage(proyecto.id, slideIdx, prevIdx);
  };

  // ====================== RENDER ======================
  return (
    <div
      className="secciontrabajos"
      style={{
        backgroundColor: "#8457ecff",
        backgroundImage: `url(${fondo2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Navbar 
    setActive={setActive}
    openToast={openToast}
    proyectos={proyectos}
    />
      <div className="overlay2">
        <div className="carrusel3d">
          {proyectos.map((proyecto, index) => {
            const total = proyectos.length;
            const angle = (360 / total) * (index - active);

            return (
              <div
                key={proyecto.id}
                className={`card3d ${index === active ? "active" : ""}`}
                style={{
                  transform: `
                    rotateY(${angle}deg)
                    translateZ(${currentRadius}px)
                    translateY(${currentY}px)
                  `,
                  opacity: index === active ? 1 : 0.7,
                  transition: "transform 0.8s ease, opacity 0.6s ease",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (index === active) {
                    openToast(proyecto);
                  } else {
                    setActive(index);
                  }
                }}
              >
          
                <div className="card-img-container">
                  <img src={proyecto.portada} alt={proyecto.titulo} className="card-portada" />
                </div>
                <h3 className="card-title">{proyecto.titulo}</h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* TOAST CON ANIMACIÓN */}
      <AnimatePresence>
        {toastProject && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="toast-content">
              <button className="toast-close" onClick={closeToast}>
                ✕
              </button>

              {(() => {
                const proyecto = toastProject;
                const slideIdx = slideByProject[proyecto.id] ?? 0;
                const slide = proyecto.slides[slideIdx];
                const contieneVideo = slide.galeria.some(item => item.type === "video");
                const curIdx = galleryIndexByProject[proyecto.id]?.[slideIdx] ?? 0;
                const media = slide.galeria[curIdx];

                return (
                  <>
                    <h2 className="tituloslide">{slide.titulo}</h2>
                    <p className="toast-desc">{slide.descripcion1}</p>

                    <div
                      className="toast-carousel"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={() => handleTouchEnd(proyecto)}
                    >
                      {proyecto.slides.length > 1 && (
                        <button onClick={() => prevSlideInProject(proyecto)} className="nav-btn-prev">
                          ⟨
                        </button>
                      )}

                      <div className="toast-carousel">
                        <div className="toast-gallery">
                          <div className="gallery-controls">

                            <button className="small-nav-btn" onClick={() => prevImageInSlide(proyecto)}>
                              ‹
                            </button>

                            {media.type === "video" ? (
                              <div className="video-wrapper">
                                <video
                                  key={media.src}
                                  controls
                                  autoPlay
                                  loop
                                  playsInline
                                  className="main-video"
                                  onClick={() => setLightbox(media)}
                                >
                                  <source src={media.src} type="video/mp4" />
                                </video>
                              </div>
                            ) : (
                              <picture>
                                {media.mobileSrc && (
                                  <source media="(max-width: 480px)" srcSet={media.mobileSrc} />
                                )}
                                {media.bigMobileSrc && (
                                  <source media="(min-width: 481px) and (max-width: 768px)" srcSet={media.bigMobileSrc} />
                                )}
                                <img
                                  src={media.src} 
                                  alt={`slide-${slideIdx}-img-${curIdx}`} 
                                  className="main-img"
                                  onClick={() => setLightbox(media)}
                                />
                              </picture>
                            )}

                            <button className="small-nav-btn" onClick={() => nextImageInSlide(proyecto)}>
                              ›
                            </button>
                          </div>
                        
                        {slide.galeria.length > 1 && (
                          <div className="miniaturas">
                            {slide.galeria.map((m, i) =>
                              m.type === "video" ? (
                                <div
                                  key={i}
                                  className={`miniatura ${i === curIdx ? "miniatura-activa" : ""}`}
                                  onClick={() => changeGalleryImage(proyecto.id, slideIdx, i)}
                                >
                                  <div className="mini-video-overlay"><video src={m.src} muted className="mini-video" /></div>

                                </div>
                              ) : (
                                <img
                                  key={i}
                                  src={m.src}
                                  alt={`mini-${i}`}
                                  onClick={() => changeGalleryImage(proyecto.id, slideIdx, i)}
                                  className={i === curIdx ? "miniatura-activa" : ""}
                                />
                              )
                            )}
                          </div>
                        )}
                        </div>
                        {proyecto.slides.length > 1 && (
                          <button onClick={() => nextSlideInProject(proyecto)} className="nav-btn-next">
                            ⟩
                          </button>
                        )}
                      </div>
                    </div>

                    {slide.link && (
                      <div className="toast-link">
                        <a
                          href={slide.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="toast-link-btn"
                        >
                          {slide.link.text}
                        </a>
                      </div>
                    )}

                    <p className="toast-desc second">{slide.descripcion2}</p>

                    {!contieneVideo && (
                      <div className="slide-indicator">
                        {proyecto.slides.map((_, i) => (
                          <button
                            key={i}
                            className={"dot " + (i === slideIdx ? "dot-active" : "")}
                            onClick={() => setSlideByProject((prev) => ({ ...prev, [proyecto.id]: i }))}
                          />
                        ))}
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          {lightbox.type === "video" ? (
            <video controls autoPlay className="lightbox-video">
              <source src={lightbox.src} type="video/mp4" />
            </video>
          ) : (
            <img src={lightbox.src} alt="fullscreen" />
          )}
        </div>
      )}
    </div>
  );
}