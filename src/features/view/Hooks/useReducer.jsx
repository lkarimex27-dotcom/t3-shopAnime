import { useReducer } from 'react';
import { Box, Toolbar, Button, Typography } from '@mui/material';
const contadorReducer = (estado, accion) => {
  if (accion === 'subir') return estado + 1;
  if (accion === 'bajar') return estado - 1;
  return estado;
};
export const UseReducerHook = () => {
  const [numero, enviarOrden] = useReducer(contadorReducer, 0);

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4">Contador: {numero}</Typography>
      
      <Box sx={{ mt: 2 }}>
        <Button 
          variant="contained" 
          onClick={() => enviarOrden('subir')}
          sx={{ mr: 1, bgcolor: '#6C63FF' }}
        > 
          Aumentar 
        </Button>
        
        <Button 
          variant="outlined" 
          onClick={() => enviarOrden('bajar')}
          color="error"
        > 
          Disminuir 
        </Button>
      </Box>
    </Box>
  );
};