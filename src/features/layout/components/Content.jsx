import React, { useState, useContext, useMemo } from 'react';
import { Box, Paper, Typography, Button, Container, Stack, IconButton, Snackbar, Alert } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import { CartContext } from '../../auth/Hooks/CartContext'; 

const Content = () => {
  const { agregarAlCarrito, alternarFavorito, favoritos } = useContext(CartContext);
  const [snackbar, setSnackbar] = useState({ open: false, product: "" });

  // OPTIMIZACIÓN DE PERFORMANCE: Imágenes locales para evitar latencia de Unsplash
  const products = useMemo(() => [
    { id: 'prod-1', title: "Figuras Scale", price: 450000, img: "/img/figuras-scale.avif", desc: "Calidad premium 1/7 y 1/8 de tus personajes favoritos." },
    { id: 'prod-2', title: "Funko Pop!", price: 65000, img: "/img/notorious-funko.avif", desc: "Figuras coleccionables Funko Pop originales." },
    { id: 'prod-3', title: "Estampado", price: 85000, img: "/img/estampados.avif", desc: "Camisetas anime con diseños exclusivos estampados." },
    { id: 'prod-4', title: "Mangas", price: 45000, img: "/img/manga.avif", desc: "Mangas importados y ediciones de lujo en español." },
  ], []);

  const handleAddToCart = (producto) => {
    agregarAlCarrito(producto);
    setSnackbar({ open: true, product: producto.title });
  };

  return (
    <Box component="main">
      {/* Hero Section - Optimizado para LCP */}
      <Box 
        component="section" 
        sx={{ 
          height: { xs: '60vh', md: '550px' }, 
          width: '100%', position: 'relative', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a', overflow: 'hidden'
        }}
      >
        <Box 
          component="img"
          src="/img/fondo.avif" // Imagen local en formato AVIF para máximo ahorro
          alt="Banner Principal Mundo Otaku"
          fetchPriority="high" 
          loading="eager" 
          sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, filter: 'brightness(0.5)' }}
        />

        <Container sx={{ zIndex: 2, textAlign: 'center', position: 'relative' }}>
          <Typography 
            variant="overline" // Cambio semántico para evitar errores de jerarquía
            sx={{ color: '#FFD700', fontWeight: 800, mb: 1, letterSpacing: 1.5, display: 'block' }}
          >
            Coleccionables Anime de otro nivel
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ fontWeight: 900, color: '#FFFFFF', fontSize: { xs: '3.5rem', md: '6rem' }, textShadow: '4px 4px 0px #D32F2F', mb: 3 }}
          >
            MUNDO ANIME
          </Typography>
          <Button 
            variant="contained" size="large"
            startIcon={<LocalFireDepartmentIcon />}
            aria-label="Ver todas las ofertas de anime"
            sx={{ 
              bgcolor: '#D32F2F', // COLOR CORREGIDO: Pasa prueba de contraste WCAG
              color: '#FFFFFF',
              px: 4, py: 2, borderRadius: '50px', fontWeight: 800, 
              '&:hover': { bgcolor: '#B71C1C' } 
            }}
          >
            VER OFERTAS CALIENTES
          </Button>
        </Container>
      </Box>

      {/* Grid de Productos */}
      <Container component="section" maxWidth="lg" sx={{ mt: 8, pb: 10 }}>
        <Typography variant="h2" textAlign="center" sx={{ mb: 6, fontWeight: 900, fontSize: '2.5rem' }}>
          Novedades del Multiverso
        </Typography>
        
        <Grid container spacing={4}>
          {products.map((item) => {
            const esFavorito = favoritos.some(fav => fav.id === item.id);
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
                <Paper component="article" elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid #f0f0f0' }}>
                  <Box sx={{ position: 'relative', pt: '75%', bgcolor: '#f9f9f9' }}>
                    <Box 
                      component="img" 
                      src={item.img} 
                      alt={item.title} 
                      loading="lazy" 
                      sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                    <Typography variant="body2" color="text.primary" sx={{ mb: 2, minHeight: '40px' }}>{item.desc}</Typography>
                    
                    <Stack direction="row" spacing={1}>
                      <Button 
                        fullWidth 
                        onClick={() => handleAddToCart(item)} 
                        variant="contained" 
                        startIcon={<ShoppingCartIcon />}
                        aria-label={`Añadir ${item.title} al carrito`} // ACCESIBILIDAD 100%
                        sx={{ 
                          bgcolor: '#D32F2F', // Contraste corregido
                          color: '#FFFFFF',
                          borderRadius: 2, textTransform: 'none', 
                          fontWeight: 700,
                          '&:hover': { bgcolor: '#B71C1C' }
                        }}
                      >
                        Añadir
                      </Button>
                      
                      <IconButton 
                        onClick={() => alternarFavorito(item)}
                        aria-label={esFavorito ? `Quitar ${item.title} de favoritos` : `Añadir ${item.title} a favoritos`}
                        sx={{ border: '1px solid #D32F2F', color: '#D32F2F' }}
                      >
                        {esFavorito ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                      </IconButton>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={2000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%', bgcolor: '#D32F2F' }}>
          {snackbar.product} añadido con éxito 📦
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Content;