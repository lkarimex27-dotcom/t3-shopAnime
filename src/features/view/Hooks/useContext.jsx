import React, { useState, createContext, useContext } from 'react';
import { Box, Button, Toolbar } from '@mui/material';
import { blue } from '@mui/material/colors';

const TemaContext = createContext();

export const Ejercicio2 = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <TemaContext.Provider value={{ color, setColor }}>
      <ContenidoPantalla />
    </TemaContext.Provider>
  );
};

const ContenidoPantalla = () => {
  const { color, setColor } = useContext(TemaContext);
  return (
    <Box sx={{ bgcolor: color, height: '100vh', p: 3 }}>
      <Toolbar />
      <Button onClick={() => setColor(color === blue[500] ? blue[800] : red[500])}>
        Cambiar Fondo
      </Button>
    </Box>
  );
};