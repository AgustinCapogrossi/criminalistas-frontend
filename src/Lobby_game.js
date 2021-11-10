import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {servicioPartida} from './servicios/ServicioPartida';
import Player_list from './Player_list';


const theme = createTheme();

export default function Lobby_game() {

  const handleStartGame = () => {
    servicioPartida.startGame('partida2');
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', bgcolor: 'black'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={10}
        >
          <Player_list />
        </ Grid>
        <Grid item xs={12} sm={8} md={2} component={Paper} elevation={6} square sx={{bgcolor: '#FF9C30'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#FF9C30'
            }}
          >
            <Box component="form" sx={{ mt: 15, bgcolor: '#FF9C30' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 9, mb: 2, bgcolor: 'black' }}
                onClick={handleStartGame}
              >
                Iniciar partida
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}