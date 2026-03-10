import React, { useState } from 'react'
import { Box, Typography, Button, Paper, TextField, FormControlLabel, Checkbox, Stack, Link } from '@mui/material'

export const Myaccount = () => {
  const [isRegister, setIsRegister] = useState(true); // Primero mostrar crear cuenta
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  // Handlers básicos (fakes)
  const handleLogin = (e) => {
    e.preventDefault();
    alert('¡Intentando iniciar sesión!\nUsuario: ' + account + '\nRecuérdame: ' + remember);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert("¡Intentando crear cuenta!\nUsuario: " + account);
  };

  const handleSwitch = () => setIsRegister(prev => !prev);

  return (
    <Box sx={{ mt: 8, backgroundColor: '#fdfcfe', pb: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, width: '100%', maxWidth: 400, mt: 4 }}>
        <Typography variant="h4" component="h1" textAlign="center" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
          {isRegister ? 'Crear Cuenta' : 'Iniciar Sesión'}
        </Typography>
        <form onSubmit={isRegister ? handleRegisterSubmit : handleLogin}>
          <Stack spacing={3}>
            <TextField 
              label="Cuenta o Email" 
              variant="outlined" 
              fullWidth 
              value={account} 
              onChange={(e) => setAccount(e.target.value)}
              autoComplete="username"
              required
            />
            <TextField 
              label="Contraseña" 
              variant="outlined" 
              type="password"
              fullWidth 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={isRegister ? undefined : "current-password"}
              required
            />
            {!isRegister && (
              <FormControlLabel 
                control={
                  <Checkbox 
                    color="primary"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                }
                label="Recuérdame"
              />
            )}
            <Button 
              type="submit" 
              variant={isRegister ? "outlined" : "contained"}
              color={isRegister ? "secondary" : "primary"}
              size="large"
              fullWidth
              sx={{ fontWeight: 700, borderRadius: 2, mt: 1 }}
            >
              {isRegister ? "Registrar" : "Iniciar Sesión"}
            </Button>
            <Typography textAlign="center" sx={{ fontSize: 15, mt: 1 }}>
              {isRegister 
                ? <>¿Ya tienes cuenta?&nbsp;
                    <Link component="button" underline="none" onClick={handleSwitch} sx={{ color: 'primary.dark', fontWeight: 600 }}>
                      Iniciar sesión
                    </Link>
                  </>
                : <>¿No tienes cuenta?&nbsp;
                    <Link component="button" underline="none" onClick={handleSwitch} sx={{ color: 'primary.dark', fontWeight: 600 }}>
                      Crear cuenta
                    </Link>
                  </>
              }
            </Typography>
          </Stack>
        </form>
      </Paper>
    </Box>
  )
}