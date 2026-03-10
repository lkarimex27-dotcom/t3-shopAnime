import React, { useContext } from 'react';
import { Box, Container, Typography, Paper, Button, Stack, TextField, InputAdornment, Chip, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
// Iconos
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// 1. IMPORTAMOS EL CONTEXTO
import { CartContext } from '../../../features/auth/Hooks/CartContext'; 

// 2. DATA DE EJEMPLO (Esto simula lo que vendría de una DB)
const ANIME_PRODUCTS = [
  {
    id: 1,
    name: "Manga tomo 29 - One Piece (Special)",
    category: "Kotobukiya",
    price: 21000,
    tag: "PRE-ORDEN",
    tagColor: "#4834d4",
    img: "https://images.unsplash.com/photo-1734517709196-48873cca9599?w=600"
  },
  {
    id: 2,
    name: "Jujutsu Kaisen - Tomo 22 (Panini)",
    category: "Manga Shonen",
    price: 20500,
    tag: "NUEVO",
    tagColor: "#00b894",
    img: "https://images.unsplash.com/photo-1762681829629-1ebe8a135784?w=600"
  },
  {
    id: 3,
    name: "Figura Ilimitada de One Piece",
    category: "figures Scale",
    price: 95000,
    tag: "Limitada",
    tagColor: "#FF6B6B",
    img: "https://images.unsplash.com/photo-1560746420-1b4dc6d92d17?w=600"
  },
  {
    id: 4,
    name: "Figura de Anya forger",
    category: "figures Scale",
    price: 73580,
    tag: "PRE-ORDER",
    tagColor: "#4834d4",
    img: "https://images.unsplash.com/photo-1670834169539-feed72d15b25?w=600"
  }
];

export const Article = () => {
  // 3. CONSUMIMOS EL CONTEXTO
  const { agregarAlCarrito, alternarFavorito, favoritos } = useContext(CartContext);

  return (
    <Box sx={{ mt: 12, pb: 10, backgroundColor: '#fdfcfe' }}>
      <Container>
        
        {/* --- CABECERA --- */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems={{ xs: 'flex-start', sm: 'center' }} 
          spacing={2} 
          sx={{ mb: 5 }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 900, color: '#2d3436', display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <AutoAwesomeIcon sx={{ color: '#FF6B6B' }} /> 
              Catálogo Otaku
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Explora las mejores piezas de colección.
            </Typography>
          </Box>

          <TextField 
            placeholder="Buscar producto..." 
            size="small"
            sx={{ width: { xs: '100%', sm: '300px' }, '& .MuiOutlinedInput-root': { borderRadius: '50px', bgcolor: '#fff' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#FF6B6B' }} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        
        {/* --- GRID DE PRODUCTOS --- */}
        <Grid container spacing={4}>
          {ANIME_PRODUCTS.map((producto) => {
            // Verificamos si este producto ya está en favoritos
            const esFavorito = favoritos.some(fav => fav.id === producto.id);

            return (
              <Grid key={producto.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    borderRadius: 5, 
                    overflow: 'hidden', 
                    border: '1px solid #eee',
                    transition: '0.3s',
                    '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box 
                      component="img" 
                      src={producto.img} 
                      sx={{ width: '100%', height: 260, objectFit: 'cover' }} 
                    />
                    <Chip 
                      label={producto.tag} 
                      sx={{ position: 'absolute', top: 15, left: 15, bgcolor: producto.tagColor, color: '#fff', fontWeight: 900 }} 
                    />
                    
                    {/* BOTÓN DE CORAZÓN (FAVORITOS) */}
                    <IconButton 
                      onClick={() => alternarFavorito(producto)}
                      sx={{ 
                        position: 'absolute', top: 10, right: 10, 
                        bgcolor: 'rgba(255,255,255,0.8)',
                        '&:hover': { bgcolor: '#fff' }
                      }}
                    >
                      {esFavorito ? <FavoriteIcon sx={{ color: '#FF6B6B' }} /> : <FavoriteBorderIcon />}
                    </IconButton>
                  </Box>

                  <Box sx={{ p: 3 }}>
                    <Typography variant="caption" sx={{ fontWeight: 800, color: '#FF6B6B', textTransform: 'uppercase' }}>
                      {producto.category}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, mt: 0.5, mb: 1, minHeight: '3.6rem' }}>
                      {producto.name}
                    </Typography>
                    
                    <Stack direction="row" spacing={0.5} sx={{ mb: 2, color: '#f1c40f' }}>
                        {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ fontSize: 16 }} />)}
                    </Stack>

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5" sx={{ fontWeight: 900 }}>
                          ${producto.price.toLocaleString()}
                        </Typography>
                        
                        {/* BOTÓN AGREGAR AL CARRITO */}
                        <Button 
                          variant="contained" 
                          onClick={() => agregarAlCarrito(producto)}
                          sx={{ 
                            minWidth: '50px',
                            borderRadius: '12px', 
                            bgcolor: '#FF6B6B', 
                            '&:hover': { bgcolor: '#4834d4' } 
                          }}
                        >
                          <ShoppingCartIcon />
                        </Button>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};