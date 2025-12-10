import React, { useEffect, useRef } from "react";
import "../styles/global.css";
import "../styles/responsive.css";

import fondo from "../assets/FONDO2-03-03-03-4.jpg";
import logo from "../assets/logo.png";
import planeta1 from "../assets/planeta1-04.png";
import planeta2 from "../assets/planeta2-05.png";
import estrella from "../assets/estrella_larga_2.svg";
import portalMask from "../assets/luz_portal.svg";
import estrellaFondo from "../assets/estrella_fondo.svg";
import planeta3 from "../assets/planeta_naranja.svg";
import planeta4 from "../assets/planeta4.svg";

const Inicio: React.FC = () => {
    const palabra1 = "UN";
    const palabra2 = "PASADIZO";
    const palabra3 = "HACIA\u00A0LO";
    const palabra4 = "DESCONOCIDO";

    const spansRef = useRef<HTMLSpanElement[]>([]);
    spansRef.current = [];
    const estrellaRef = useRef<HTMLImageElement | null>(null);

    const addToRefs = (el: HTMLSpanElement | null) => {
        if (el && !spansRef.current.includes(el)) spansRef.current.push(el);
    };

// índice del span invisible donde colocamos la estrella
const estrellaIndexRef = useRef<number | null>(null);

// valores base aleatorios estables
const baseX = useRef<number[]>(
    [
        ...palabra1.split("").map(() => (Math.random() - 0.5) * 120),
        ...palabra2.split("").map(() => (Math.random() - 0.5) * 120),
        ...palabra3.split("").map(() => (Math.random() - 0.5) * 120),
        ...palabra4.split("").map(() => (Math.random() - 0.5) * 120),
        0 // uno extra para la estrella
    ]
);

const baseRotate = useRef<number[]>(
    [
        ...palabra1.split("").map(() => (Math.random() - 0.5) * 45),
        ...palabra2.split("").map(() => (Math.random() - 0.5) * 45),
        ...palabra3.split("").map(() => (Math.random() - 0.5) * 45),
        ...palabra4.split("").map(() => (Math.random() - 0.5) * 45),
        0 // giro base para la estrella
    ]
);

const startedRef = useRef(false);

const planetasRef = useRef<HTMLImageElement[]>([]);
planetasRef.current = [];
const addPlanetaRef = (el: HTMLImageElement | null) => {
    if (el && !planetasRef.current.includes(el))
    planetasRef.current.push(el);
};

// ⭐ posiciones y tamaños de las estrellas, solo una vez
const estrellasDataRef = useRef<{top: number, left: number, size: number, delay: number}[]>([]);

// intentamos cargar posiciones guardadas
if (estrellasDataRef.current.length === 0) {
    const saved = localStorage.getItem("estrellasData");
    if (saved) {
        estrellasDataRef.current = JSON.parse(saved);
    } else {
        estrellasDataRef.current = Array.from({ length: 15 }).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: 25 + Math.random() * 80,
            delay: Math.random() * 3
        }));
        localStorage.setItem("estrellasData", JSON.stringify(estrellasDataRef.current));
    }
}



// ---- ANIMACIÓN ----

useEffect(() => {
    spansRef.current.forEach((span) => {
        span.style.transform = "translateY(0px) translateX(0px) rotate(0deg)";
        span.style.transition = "transform 0.6s ease-out";
        span.style.willChange = "transform";
        span.style.display = "inline-block";
    });

    const maxFall = 450; // caída vertical máxima, antes era 140
    const range = window.innerHeight * 1.2; // cuánto scroll ocupa la animación, antes era 0.8

    let animationFrame: number;
    
    const computeAndApply = () => {
        const y = window.scrollY;
        const progress = Math.max(0, Math.min(y / range, 1)); // 0..1

    // --- PLANETAS ---
    planetasRef.current.forEach((planeta) => {
        const rect = planeta.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const planetaCenterX = rect.left + rect.width / 2;
        const planetaCenterY = rect.top + rect.height / 2;
        
        // distancia actual al centro
        const dx = centerX - planetaCenterX;
        const dy = centerY - planetaCenterY;
        
        // el factor de atracción crece con el scroll
        const attraction = Math.pow(progress, 1.5); // curva más suave al principio
        
        const moveX = dx * attraction * 0.6; // ajustá intensidad
        const moveY = dy * attraction * 0.9;
        const scale = 1 + attraction * 0.4; // se agranda un poco al acercarse
        
        planeta.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale}) rotate(${progress * 360}deg)`;
    });

    // --- LETRAS ---
    spansRef.current.forEach((span, i) => {
        // cascada: cada letra empieza un poco más tarde
        const delayFactor = i / spansRef.current.length;
        const easedProgress = Math.max(0, progress - delayFactor * 0.05);
        const finalProgress = Math.min(easedProgress * 1.2, 1); // exagerar un poco
        
        const offsetY = finalProgress * maxFall * 1.5;
        const offsetX = baseX.current[i] * finalProgress;
        const rotate = baseRotate.current[i] * finalProgress;
        
        span.style.transform = `translateY(${offsetY}px) translateX(${offsetX}px) rotate(${rotate}deg)`;
    });

    // --- ESTRELLA ---

    if (estrellaRef.current) {

                const rect = estrellaRef.current.getBoundingClientRect();

                // centro de pantalla
                const targetX = window.innerWidth / 2;
                const targetY = window.innerHeight / 2;

                // centro actual de la estrella
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;

                const dx = targetX - x;
                const dy = targetY - y;

                const attraction = progress * 1.2;

                estrellaRef.current.style.transform = `
                    translate(${dx * attraction}px, ${dy * attraction * 1.5}px)
                `;
            }
        };

const onScroll = (ev?: Event) => {
    if (!startedRef.current) {
        if (ev && (ev as any).isTrusted) startedRef.current = true;
        else return;
    }
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(computeAndApply);
};

const onFirstUserAction = () => {
    if (!startedRef.current) {
        startedRef.current = true;
        computeAndApply();
    }
};

window.addEventListener("wheel", onFirstUserAction, { passive: true });
window.addEventListener("touchstart", onFirstUserAction, { passive: true });
window.addEventListener("keydown", onFirstUserAction, { passive: true });
window.addEventListener("mousedown", onFirstUserAction, { passive: true });
window.addEventListener("scroll", onScroll, { passive: true });

return () => {
    window.removeEventListener("wheel", onFirstUserAction);
    window.removeEventListener("touchstart", onFirstUserAction);
    window.removeEventListener("keydown", onFirstUserAction);
    window.removeEventListener("mousedown", onFirstUserAction);
    window.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(animationFrame);
};
}, []);

// ---- RENDER ----

return (
    <section className="inicio">

        <img src={fondo} alt="Fondo Agencia Estelar" className="fondo" />

        <img src={planeta3} alt="Planeta 3" className="planeta planeta3" ref={addPlanetaRef} />
        <img src={planeta4} alt="Planeta 4" className="planeta planeta4" ref={addPlanetaRef} />

        <div className="stars-container">
        {estrellasDataRef.current.map((star, i) => (
            <div key={i} className="star" style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                '--star-size': `${star.size}px`,
                '--anim-delay': `${star.delay}s`
            }} />
        ))}
        </div>

        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
        </div>
        
        <div className="overlay">

            <div className="portal-container">
                <div className="portal-content">
                    <img src={planeta1} alt="Planeta 1" className="planeta planeta1" ref={addPlanetaRef} />
                    <img src={planeta2} alt="Planeta 2" className="planeta planeta2" ref={addPlanetaRef} />

                    <h1 className="titulo">
                        <span className="titulo-gravity-2">
                        {palabra1.split("").map((letra, i) => (
                            <span key={i} ref={(el) => addToRefs(el)}>
                                {letra}
                            </span>
                        ))}
                        </span>
                        
                        <br />
                        <span className="titulo-gravity-2 palabra-pasadizo-wrapper">
                            {palabra2.split("").map((letra, i) => (
                                <span key={i} ref={addToRefs}>{letra}</span>
                            ))}
                            
                            <img
                                src={estrella}
                                alt="Estrella"
                                className="estrella-floating-inside"
                                ref={estrellaRef}
                            />
                        </span>
                        
                        <br />
                        <span className="titulo-gravity-2">
                            {palabra3.split("").map((letra, i) => (
                                <span key={i} ref={(el) => addToRefs(el)}>
                                    {letra}
                                </span>
                            ))}
                        </span>
                        
                        <br />
                        <span className="titulo-gravity-1">
                            {palabra4.split("").map((letra, i) => (
                                <span key={i} ref={(el) => addToRefs(el)}>
                                    {letra}
                                </span>
                            ))}
                        </span>
                    </h1>
                </div>
            </div>
        </div>

        <div className="portal-mask"></div>
        
    </section>
);
};

export default Inicio;
