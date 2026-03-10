import { useState, useEffect, useCallback } from "react";

export const useToggle = () => {
  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem('modoOscuro');
    return guardado ? JSON.parse(guardado) : false;
  });

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (modoOscuro) {
      bodyClass.add("dark-mode");
      bodyClass.remove("light-mode");
    } else {
      bodyClass.remove("dark-mode");
      bodyClass.add("light-mode");
    }
    localStorage.setItem('modoOscuro', JSON.stringify(modoOscuro));
  }, [modoOscuro]);

  const toggleModo = useCallback(() => {
    setModoOscuro((prev) => !prev);
  }, []);

  return { modoOscuro, toggleModo };
}

export const UseToggle = () => {
  const { modoOscuro, toggleModo } = useToggle();

  return (
    <div style={{ textAlign: "center", padding: 24 }}>
      <button 
        onClick={toggleModo} 
        style={{ 
          marginBottom: 16,
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '8px',
          backgroundColor: modoOscuro ? '#fff' : '#222',
          color: modoOscuro ? '#222' : '#fff',
          border: 'none'
        }}
      >
        Cambiar a {modoOscuro ? "Modo Claro ☀️" : "Modo Oscuro 🌙"}
      </button>
      <div>
        <b>Estética actual:</b> {modoOscuro ? "Cyberpunk Dark" : "Studio Light"}
      </div>
      <style>
        {`
          body { transition: background 0.3s, color 0.3s; }
          .dark-mode { background: #222; color: #f2f2f2; }
          .light-mode { background: #fff; color: #222; }
        `}
      </style>
    </div>
  );
}