import {React, useState, useEffect} from 'react';
import {Box, Typography} from '@mui/material';

export const RelojEfecto = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      const intervalo = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);

      return () => clearInterval(intervalo);
    }, []); 
  
    return (
      <Box sx={{ mt: 12, textAlign: 'center' }}>
        <Typography variant="h2">Hora actual: {hora}</Typography>
      </Box>
    );
  };