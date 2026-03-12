import { useContext } from 'react';
import { CartContext } from '../Hooks/CartContext';
import { Box, Typography, Paper, Container, Grid, Divider, IconButton, Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'; 

export const Mybuys = () => {
  const { carrito, eliminarDelCarrito } = useContext(CartContext);

  return (
    <Box sx={{ mt: 12, pb: 10, minHeight: '80vh', backgroundColor: '#fdfcfe' }}>
      <Container maxWidth="md">
        {/* ... Título y Divider ... */}

        {carrito.length === 0 ? (
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 5 }}>
            Tu carrito está vacío 🛒
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {carrito.map((item) => (
              <Grid item xs={12} key={item.instanceId}>
                <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box 
                    component="img" 
                    src={item.img} 
                    sx={{ width: 80, height: 80, borderRadius: 2, objectFit: 'cover' }} 
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                    <Typography variant="body2" color="error">${item.price?.toLocaleString()}</Typography>
                  </Box>

                  {/* BOTÓN DE ELIMINAR CORREGIDO */}
                  <Tooltip title="Eliminar del carrito">
                    <IconButton 
                      onClick={() => eliminarDelCarrito(item.instanceId)} // LLAMADA CLAVE
                      aria-label={`Eliminar ${item.title} del carrito`} // SOLUCIÓN ACCESIBILIDAD
                      sx={{ color: '#D32F2F' }}
                    >
                      <DeleteSweepIcon />
                    </IconButton>
                  </Tooltip>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};