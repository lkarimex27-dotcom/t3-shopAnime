import {React, useState, useCallback} from 'react';

export const UseCallbackFilter = () => {
  const [busqueda, setBusqueda] = useState('');
  const [usuarios] = useState([
    "Ana",
    "Bernardo",
    "Carlos",
    "Diana",
    "Enrique",
    "Fernanda",
    "Gabriel"
  ]);

  // Solo se vuelve a crear cuando 'busqueda' cambia
  const filtrarUsuarios = useCallback(() => {
    return usuarios.filter((usuario) =>
      usuario.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [busqueda, usuarios]);

  return (
    <div>
      <h3>Filtrar usuarios</h3>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar usuario..."
      />
      <ul>
        {filtrarUsuarios().map((usuario) => (
          <li key={usuario}>{usuario}</li>
        ))}
      </ul>
    </div>
  );
};