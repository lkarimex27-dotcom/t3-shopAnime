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

  const products = useMemo(() => [
    { id: 'prod-1', title: "Figuras Scale", price: 450000, img: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?auto=format&fit=crop&q=75&w=400&format=webp", desc: "Calidad premium 1/7 y 1/8 de tus personajes favoritos." },
    { id: 'prod-2', title: "Funko Pop!", price: 65000, img: "https://images.unsplash.com/photo-1635696572145-bb90317206ec?auto=format&fit=crop&q=75&w=400&format=webp", desc: "Figuras coleccionables Funko Pop originales." },
    { id: 'prod-3', title: "Estampado", price: 85000, img: "https://images.unsplash.com/photo-1708589794486-7767e6062c29?auto=format&fit=crop&q=75&w=400&format=webp", desc: "Camisetas anime con diseños exclusivos estampados." },
    { id: 'prod-4', title: "Mangas", price: 45000, img: "https://images.unsplash.com/photo-1709675577966-6231e5a2ac43?auto=format&fit=crop&q=75&w=400&format=webp", desc: "Mangas importados y ediciones de lujo en español." },
  ], []);

  const handleAddToCart = (producto) => {
    agregarAlCarrito(producto);
    setSnackbar({ open: true, product: producto.title });
  };

  return (
    <Box component="main">
      {/* Hero Section */}
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
          src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=60&w=800"
          alt="Banner Principal Anime Sekai"
          fetchPriority="high" 
          loading="eager" 
          sx={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, filter: 'brightness(0.4)' }}
        />

        <Container sx={{ zIndex: 2, textAlign: 'center', position: 'relative' }}>
          <Typography component="p" sx={{ color: '#FF6B6B', fontWeight: 700, mb: 1, letterSpacing: 1.5, textTransform: 'uppercase' }}>
            Coleccionables Anime de otro nivel
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ fontWeight: 900, color: '#FFD700', fontSize: { xs: '3rem', md: '6rem' }, textShadow: '3px 3px 0px #000', lineHeight: 1.1, mb: 3 }}
          >
            MUNDO ANIME
          </Typography>
          <Button 
            variant="contained" size="large"
            startIcon={<LocalFireDepartmentIcon />}
            aria-label="Ver todas las ofertas de anime" // ACCESIBILIDAD: Nombre descriptivo para el botón
            sx={{ bgcolor: '#FF6B6B', px: 4, py: 2, borderRadius: '50px', fontWeight: 800 }}
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
                  <Box sx={{ position: 'relative', pt: '75%' }}>
                    <Box 
                      component="img" 
                      src={item.img} 
                      alt={`Producto: ${item.title}`} 
                      loading="lazy" 
                      sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '40px' }}>{item.desc}</Typography>
                    
                    <Stack direction="row" spacing={1}>
                      <Button 
                        fullWidth 
                        onClick={() => handleAddToCart(item)} 
                        variant="contained" 
                        startIcon={<ShoppingCartIcon />}
                        aria-label={`Añadir ${item.title} al carrito de compras`} // ACCESIBILIDAD: Nombre único por producto
                        sx={{ bgcolor: '#D32F2F', // COLOR CORREGIDO para contraste
                          borderRadius: 2, 
                          textTransform: 'none',
                          '&:hover': { bgcolor: '#B71C1C' }}}
                      >
                        Añadir
                      </Button>
                      
                      <IconButton 
                        onClick={() => alternarFavorito(item)}
                        aria-label={esFavorito ? `Quitar ${item.title} de mis favoritos` : `Añadir ${item.title} a mis favoritos`} // ACCESIBILIDAD: Este es el punto clave que te falta
                        sx={{ border: '1px solid #f0f0f0', color: '#D32F2F' }}
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
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          {snackbar.product} añadido con éxito 📦
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Content;