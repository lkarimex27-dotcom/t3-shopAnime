import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, TextField } from '@mui/material';

// Usamos export const para mantener la consistencia con tus otros hooks
export const UseRefComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <Box sx={{ p: 4 }}>
      <TextField
        fullWidth
        label="Escribiendo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Actual: {inputValue}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Anterior: {previousInputValue.current}
      </Typography>
    </Box>
  );
};