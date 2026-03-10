import React, { useContext } from 'react';
import { Box, Container, Typography, Paper, Stack, IconButton, Button } from '@mui/material';
import Grid from '@mui/material/Grid'; // O Grid si usas v1

// Iconos para que se vea igual al catálogo
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// 1. IMPORTAMOS EL CONTEXTO
import { CartContext } from '../Hooks/CartContext'; 

export const Myfavourites = () => {
  // 2. CONSUMIMOS LOS FAVORITOS Y LAS ACCIONES
  const { favoritos, alternarFavorito, agregarAlCarrito } = useContext(CartContext);

  return (
    <Box sx={{ mt: 12, pb: 10, minHeight: '80vh', backgroundColor: '#fdfcfe' }}>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 5, display: 'flex', alignItems: 'center', gap: 2 }}>
          <FavoriteIcon sx={{ color: '#FF6B6B' }} /> 
          Mis Favoritos Anime
        </Typography>

        {favoritos.length === 0 ? (
          <Paper sx={{ p: 5, textAlign: 'center', borderRadius: 5, bgcolor: '#f1f2f6' }}>
            <Typography variant="h6" color="text.secondary">
              Tu lista de deseos está vacía. ¡Ve a buscar algunos tesoros!
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={4}>
            {favoritos.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    borderRadius: 5, 
                    overflow: 'hidden', 
                    border: '1px solid #eee',
                    transition: '0.3s',
                    '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' } 
                  }}
                >
                  {/* IMAGEN DEL PRODUCTO DUPLICADO */}
                  <Box sx={{ position: 'relative', pt: '56.25%' }}>
                    <Box 
                      component="img" 
                      src={item.img} 
                      sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    
                    {/* BOTÓN PARA QUITAR DE FAVORITOS (CORAZÓN LLENO) */}
                    <IconButton 
                      onClick={() => alternarFavorito(item)}
                      sx={{ 
                        position: 'absolute', top: 10, right: 10, 
                        bgcolor: 'white', '&:hover': { bgcolor: '#fff0f0' } 
                      }}
                    >
                      <FavoriteIcon sx={{ color: '#FF6B6B' }} />
                    </IconButton>
                  </Box>

                  <Box sx={{ p: 2.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#2d3436' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {item.desc}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                      <Button 
                        variant="contained" 
                        fullWidth 
                        onClick={() => agregarAlCarrito(item)}
                        startIcon={<ShoppingCartIcon />}
                        sx={{ bgcolor: '#FF6B6B', borderRadius: '12px', textTransform: 'none', fontWeight: 'bold' }}
                      >
                        Comprar
                      </Button>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Myfavourites;