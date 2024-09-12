import { useState, useEffect } from "react";
export const App2 = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Pointer move
  useEffect(() => {
    console.log("Effect", { enabled });

    const hanldeMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", hanldeMove);
    }
    return () => {
      console.log("cleanup");
      window.removeEventListener("pointermove", hanldeMove);
    };
  }, [enabled]);

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  // change body className
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled); // <-- Si enabled es true, agrega la clase, si es false, la quita

    return () => {
      document.body.classList.toggle("no-cursor"); // <-- En este caso la quita
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          border: "1px solid red",
          borderRadius: "50%",
          opacity: 0.5,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};
