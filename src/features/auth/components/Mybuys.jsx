import { useContext } from 'react';
import { CartContext } from '../Hooks/CartContext';
import { Box, Typography, Paper, Stack, Container, Grid, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Mybuys = () => {
  const { carrito } = useContext(CartContext);

  return (
    <Box sx={{ mt: 12, pb: 10, minHeight: '80vh', backgroundColor: '#fdfcfe' }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 900,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            letterSpacing: 1,
            color: '#2d3436',
            mb: 2,
          }}
        >
          <ShoppingCartIcon sx={{ color: '#FF6B6B', fontSize: 40 }} />
          Mis Compras Anime
        </Typography>

        <Divider sx={{ mb: carrito.length ? 4 : 2, bgcolor: '#FF6B6B', height: 4, borderRadius: 2, width: 180 }} />

        {carrito.length === 0 ? (
          <Paper
            sx={{
              p: 5,
              textAlign: 'center',
              borderRadius: 5,
              bgcolor: '#f1f2f6',
              mt: 8
            }}
            elevation={3}
          >
            <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
              Aún no has añadido tesoros a tu colección.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ¡Explora el catálogo y lánzate a tu primera compra otaku!
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={4}>
            {carrito.map((item, idx) => (
              <Grid item xs={12} sm={6} key={item.instanceId ?? `${item.id}-${idx}`}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 5,
                    overflow: 'hidden',
                    border: '1.5px solid #eee',
                    transition: '0.3s',
                    boxShadow: '0 4px 22px 0 rgba(72,52,212,0.07)',
                    '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 12px 40px rgba(255,107,107,0.07)' },
                    background: 'linear-gradient(120deg, #fdfcfe 95%, #ffe3e3 105%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5,
                    p: 2.5,
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.name || item.title}
                    sx={{
                      width: 84,
                      height: 84,
                      objectFit: 'cover',
                      borderRadius: 3,
                      border: '2.5px solid #FF6B6B',
                      boxShadow: '0 2px 16px 0 rgba(255,107,107,0.08)',
                      mr: 2,
                      background: '#fff'
                    }}
                  />
                  <Box flex={1}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        fontSize: 19,
                        color: '#4834d4',
                        lineHeight: 1.2,
                        mb: .5
                      }}
                    >
                      {item.title ?? item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1, fontSize: 15 }}
                    >
                      {item.desc && item.desc.length > 70
                        ? item.desc.slice(0, 70) + '...'
                        : item.desc
                      }
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: '#FF6B6B',
                        fontSize: 17,
                        letterSpacing: 1
                      }}
                    >
                      ${item.price?.toLocaleString()}
                    </Typography>
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