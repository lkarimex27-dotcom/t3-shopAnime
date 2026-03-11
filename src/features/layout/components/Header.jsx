import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  AppBar, Toolbar, Typography, Button, Stack, TextField, 
  InputAdornment, IconButton, Badge, Container, Box, Tooltip,
  Menu, MenuItem, Avatar 
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'; 
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { name: 'Inicio', path: '/' },
  { name: 'Artículos', path: '/article' },
  { name: 'Ofertas 🔥', path: '/offers' }
];

const settings = [
  { name: 'Mi Perfil', path: '/myaccount' },
  { name: 'Mis Pedidos', path: '/orders' },
  { name: 'Cerrar Sesión', path: '/logout' }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        background: '#ffffff', 
        color: '#2d3436', 
        boxShadow: '0 4px 20px rgba(211, 47, 47, 0.15)', // Sombra ajustada
        borderBottom: '3px solid #D32F2F' // COLOR CORREGIDO: Contraste alto
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 0.5 }}>
          
          {/* --- LOGO --- */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 1 }}>
            <Box sx={{ 
              width: { xs: 35, md: 45 }, 
              height: { xs: 35, md: 45 }, 
              bgcolor: '#D32F2F', // COLOR CORREGIDO
              borderRadius: '50%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              transform: 'rotate(-10deg)', 
              boxShadow: '2px 4px 0px #1a1a1a' 
            }}>
              <AutoAwesomeIcon sx={{ color: '#fff', fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
            </Box>
            <Typography variant="h1" sx={{ // h1 para jerarquía SEO/Accesibilidad correcta
              fontWeight: 900, 
              color: '#1a1a1a', 
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '1.2rem', md: '1.6rem' }
            }}>
              Anime<span style={{ color: '#D32F2F' }}>Sekai</span>
            </Typography>
          </Box>

          {/* --- NAVEGACIÓN DESKTOP --- */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }, ml: 4 }}>
            {pages.map((page) => (
              <NavLink key={page.name} to={page.path} style={{ textDecoration: 'none' }}>
                {({ isActive }) => (
                  <Button 
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      my: 2,
                      textTransform: 'none', 
                      fontWeight: 700,
                      px: 2,
                      color: isActive ? '#D32F2F' : '#2d3436',
                      borderBottom: isActive ? '3px solid #D32F2F' : '3px solid transparent',
                      borderRadius: 0,
                      '&:hover': { backgroundColor: 'rgba(211, 47, 47, 0.05)', color: '#D32F2F' }
                    }}
                  >
                    {page.name}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>

          {/* --- BARRA DE BÚSQUEDA --- */}
          <Box sx={{ flexGrow: 0.5, display: { xs: 'none', md: 'block' }, mx: 2 }}>
            <TextField 
              fullWidth
              size="small" 
              placeholder="Busca tu waifu o manga..." 
              aria-label="Buscar productos"
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: '50px',
                  bgcolor: '#f1f2f6',
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: '1px solid #D32F2F' },
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#D32F2F' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* --- ICONOS DE ACCIÓN (SOLUCIÓN Accessible Names) --- */}
          <Stack direction="row" spacing={{ xs: 0.5, sm: 1.5 }} alignItems="center">
            
            <Tooltip title="Favoritos">
              <IconButton 
                component={NavLink} 
                to="/myfavourites" 
                aria-label="Ver mis favoritos" // ACCESIBILIDAD 100%
                sx={{ color: '#D32F2F', display: { xs: 'none', sm: 'flex' } }}
              >
                <FavoriteIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Carrito">
              <IconButton 
                component={NavLink} 
                to="/mybuys" 
                aria-label="Ver carrito de compras" // ACCESIBILIDAD 100%
                sx={{ color: '#1a1a1a' }}
              >
                <Badge badgeContent={2} sx={{ '& .MuiBadge-badge': { backgroundColor: '#D32F2F', color: 'white' } }}>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Opciones de cuenta">
                <IconButton 
                  onClick={handleOpenUserMenu} 
                  aria-label="Abrir menú de usuario" // ACCESIBILIDAD 100%
                  sx={{ p: 0, ml: 1, border: '2px solid #D32F2F' }}
                >
                  <Avatar alt="Usuario Anime" src="/img/avatar-default.webp" /> 
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu} component={Link} to={setting.path}>
                    <Typography sx={{ fontWeight: 600 }}>{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* MENÚ MÓVIL (SOLUCIÓN Accessible Name) */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
              <IconButton
                size="large"
                aria-label="Abrir menú de navegación" // ACCESIBILIDAD 100%
                onClick={handleOpenNavMenu}
                sx={{ color: '#D32F2F' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', lg: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                    <Typography sx={{ fontWeight: 700 }}>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;