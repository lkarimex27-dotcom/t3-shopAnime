import {React, useState} from 'react';
import {Button, Container, Typography} from '@mui/material';

export const UseStateColor = () => {
    const [color, setColor] = useState("red");

    return (
        <Container sx={{ mt: 6 }}>
          <Typography variant="h6" color={color}>
          My favorite color is {color}!
          </Typography>
          <Button type="button" onClick={() => setColor("blue")}>Blue</Button>
      <Button type="button" onClick={() => setColor("red")}>Red</Button>
      <Button type="button" onClick={() => setColor("pink")}>Pink</Button>
      <Button type="button" onClick={() => setColor("green")}>Green</Button>
        </Container>
    )
  }
