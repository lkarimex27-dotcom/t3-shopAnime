import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Link, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#1a1a1a', 
        color: 'white', 
        pt: 6, 
        pb: 3, 
        mt: 'auto',
        borderTop: '4px solid #FF6B6B' 
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={4}
        >
          {/* Branding y SEO */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 900, color: '#FFD700', mb: 1 }}>
              ANIME SEKAI
            </Typography>
            <Typography variant="body2" sx={{ color: '#aaa', maxWidth: '300px' }}>
              Tu tienda favorita de coleccionables y cultura otaku en Colombia. 
              Calidad premium en cada detalle.
            </Typography>
          </Box>

          {/* Redes Sociales - AQUÍ ESTABA EL ERROR DE ACCESIBILIDAD */}
          <Stack direction="row" spacing={2}>
            <IconButton 
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar nuestro perfil de Facebook" // NOMBRE ACCESIBLE REQUERIDO
              sx={{ color: 'white', '&:hover': { color: '#FF6B6B' } }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton 
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram" // NOMBRE ACCESIBLE REQUERIDO
              sx={{ color: 'white', '&:hover': { color: '#FF6B6B' } }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton 
              component="a"
              href="https://wa.me/tu-numero"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contáctanos por WhatsApp" // NOMBRE ACCESIBLE REQUERIDO
              sx={{ color: '#25D366', '&:hover': { transform: 'scale(1.1)' } }}
            >
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption" sx={{ color: '#666' }}>
            © {new Date().getFullYear()} Anime Sekai. Todos los derechos reservados.
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: { xs: 2, md: 0 } }}>
            <Link href="#" underline="hover" sx={{ color: '#666', fontSize: '0.75rem' }}>Términos</Link>
            <Link href="#" underline="hover" sx={{ color: '#666', fontSize: '0.75rem' }}>Privacidad</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;