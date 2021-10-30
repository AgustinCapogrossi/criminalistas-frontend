import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {servicioPartida} from './servicios/ServicioPartida';
import {Games_list} from './Games_list';


const theme = createTheme();

export const Create_game = (props) => {

  const newNickname = props.location.state;

  console.log(newNickname);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('name'),
    });
    
    servicioPartida.createLobby(data.get('name'), newNickname);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', bgcolor: 'black'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={9}
        >
          <Games_list nickname={newNickname}/>
        </ Grid>
        <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square sx={{bgcolor: '#FF9C30'}}>
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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 15, bgcolor: '#FF9C30' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nombre de la partida"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'black' }}
              >
                Crear partida
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}