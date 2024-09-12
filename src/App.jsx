import { useState, useEffect } from "react";
// import "./index.css";  <--- Esto serviria si tuvieramos nuestro CSS localizado en otro archivo
export const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("useEffect called"); // <-- Se ejecuta una vez el componente se monta
    const handleMove = (event) => {
      console.log("Mouse moved", event.clientX, event.clientY); // <-- Se ejecuta cada vez que el mouse se mueve
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      console.log("cleaning up"); // <-- Se ejecuta una vez el componente se desmonta
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  console.log("Component rendered with position", position); // <-- Se ejecuta cada vez que el componente se renderiza

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.5,
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -18,
        top: -15,
        width: 40,
        height: 40,
      }}
    ></div>
  );
};

/* 
  Este codigo es util para el punto en el que no quisieramos usar estilos en linea:

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      document.documentElement.style.setProperty("-x", `${event.clientX}px`); // <-- Lineas agregadas
      document.documentElement.style.setProperty("-y", `${event.clientY}px`); // <-- Lineas agregadas
    }
  }, []);

  En este ejemplo estamos haciendo uso de custom properties en CSS.
*/
