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
  // Estados para los menús desplegables
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
        boxShadow: '0 4px 20px rgba(255, 107, 107, 0.15)', 
        borderBottom: '3px solid #FF6B6B' 
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 0.5 }}>
          
          {/* --- LOGO --- */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 1 }}>
            <Box sx={{ 
              width: { xs: 35, md: 45 }, 
              height: { xs: 35, md: 45 }, 
              bgcolor: '#FF6B6B', 
              borderRadius: '50%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              transform: 'rotate(-10deg)', 
              boxShadow: '2px 4px 0px #4834d4' 
            }}>
              <AutoAwesomeIcon sx={{ color: '#fff', fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
            </Box>
            <Typography variant="h6" sx={{ 
              fontWeight: 900, 
              color: '#2d3436', 
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '1.2rem', md: '1.6rem' }, 
              display: 'block' 
            }}>
              Anime<span style={{ color: '#D32F2F', fontWeight: 'bold' }}>Sekai</span>
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
                      color: isActive ? '#FF6B6B' : '#636e72',
                      borderBottom: isActive ? '3px solid #FF6B6B' : '3px solid transparent',
                      borderRadius: 0,
                      '&:hover': { backgroundColor: 'rgba(255, 107, 107, 0.05)', color: '#FF6B6B' }
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
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: '50px',
                  bgcolor: '#f1f2f6',
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: '1px solid #FF6B6B' },
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#FF6B6B' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* --- ICONOS DE ACCIÓN Y MENÚ DE USUARIO --- */}
          <Stack direction="row" spacing={{ xs: 0.5, sm: 1.5 }} alignItems="center">
            
            <Tooltip title="Favoritos">
              <IconButton component={NavLink} to="/myfavourites" sx={{ color: '#FF6B6B', display: { xs: 'none', sm: 'flex' } }}>
                <FavoriteIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Carrito">
              <IconButton component={NavLink} to="/mybuys" sx={{ color: 'black' }}>
                <Badge badgeContent={2} sx={{ '& .MuiBadge-badge': { backgroundColor: '#FF6B6B', color: 'white' } }}>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* AVATAR / SETTINGS (Fusión de la plantilla) */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Opciones de cuenta">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1, border: '2px solid #FF6B6B' }}>
                  <Avatar alt="Usuario Anime" src="https://plus.unsplash.com/premium_photo-1763734617117-1759250b5874?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW1hZ2VuJTIwZGUlMjBmb25kbyUyMGRlJTIwcGVyZmlsfGVufDB8fDB8fHww" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem 
                    key={setting.name} 
                    onClick={handleCloseUserMenu}
                    component={Link}
                    to={setting.path}
                  >
                    <Typography sx={{ textAlign: 'center', fontWeight: 600 }}>{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* MENÚ HAMBURGUESA MÓVIL (Fusión de la plantilla) */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-nav"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: '#FF6B6B' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-nav"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', lg: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                    <Typography sx={{ textAlign: 'center', fontWeight: 700 }}>{page.name}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/myfavourites">
                    <Typography sx={{ color: '#FF6B6B', fontWeight: 700 }}>Favoritos ❤️</Typography>
                </MenuItem>
              </Menu>
            </Box>

          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;