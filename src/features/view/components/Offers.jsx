import React from 'react'
import { Box, Toolbar, Typography, Container, Divider } from '@mui/material'
import { UseStateColor } from '../Hooks/useState'
import { RelojEfecto } from '../Hooks/useEffects'
import { Ejercicio2 } from '../Hooks/useContext'
import {UseRefComponent} from '../Hooks/useRef'
import { UseReducerHook } from '../Hooks/useReducer'
import { UseCallbackFilter} from '../Hooks/useCallback'
import {UseToggle} from '../Hooks/useCustom.jsx'
import {StatusBar} from '../Hooks/useOnlineStatus'

export const Offers = () => {
  return (
    <Container maxWidth="md">
      {/* 1. ESPACIADO PARA EL NAVBAR FIJO */}
      <Toolbar /> 
      <Box sx={{ mt: 5, mb: 5 }}>

          <Typography variant="h6" color="secondary">Ejercicio: useEffect</Typography>
          <RelojEfecto />
        <Divider sx={{ my: 4 }} />

          <Typography variant="h6" color="secondary">Ejercicio: useState</Typography>
          <UseStateColor />

        <Divider sx={{ my: 4 }} />

          <Typography variant="h6" color="secondary">Ejercicio: useContext</Typography>
          <Ejercicio2 />

        <Divider sx={{ my: 4 }} />
          <Typography variant="h6" color="secondary">Ejercicio: useRef</Typography>
          <UseRefComponent />

        <Divider sx={{ my: 4 }} />

          <Typography variant="h6" color="secondary">Ejercicio: useReducer</Typography>
          {/* IMPORTANTE: El nombre del componente debe empezar con Mayúscula */}
          <UseReducerHook /> 

        <Divider sx={{ my: 4 }} />

          <Typography variant="h6" color="secondary">Ejercicio: useCallback</Typography>
          <UseCallbackFilter />

          <Divider sx={{ my: 4 }} />
            <Typography variant="h6" color="secondary">Ejercicio: useOnlineStatus</Typography>
            <StatusBar />

            <Divider sx={{ my: 4 }} />
            <Typography variant="h6" color="secondary">Ejercicio: useToggle</Typography>
            <UseToggle/>


      </Box>
    </Container>
  )
}