import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#1a1a1a', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" spacing={2}>
          {/* CORRECCIÓN DE JERARQUÍA: Usamos un componente Typography adecuado */}
          <Typography 
            variant="h5" 
            component="p" // Visualmente es un título, pero semánticamente es un párrafo para no romper el orden de los H1-H4
            sx={{ fontWeight: 800 }}
          >
            ANIME <span style={{ color: '#D32F2F' }}>SEKAI</span>
          </Typography>

          <Typography variant="body2" sx={{ color: '#ccc' }}>
            Tu tienda favorita de coleccionables en Colombia.
          </Typography>

          <Stack direction="row" spacing={2}>
            {/* SOLUCIÓN A: "Buttons do not have an accessible name" */}
            <IconButton 
              href="#" 
              aria-label="Seguir en Facebook" // Nombre accesible obligatorio
              sx={{ color: 'white', '&:hover': { color: '#D32F2F' } }}
            >
              <FacebookIcon />
            </IconButton>
            
            <IconButton 
              href="#" 
              aria-label="Seguir en Instagram" // Nombre accesible obligatorio
              sx={{ color: 'white', '&:hover': { color: '#D32F2F' } }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
export default Footer;