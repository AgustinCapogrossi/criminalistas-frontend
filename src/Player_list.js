import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {servicioPartida} from './servicios/ServicioPartida';


/*function getGames() {
  return [{jugador: "Rocio"}, 
  {jugador: "Santiago"},
  {jugador: "Lenadro"}];
}*/

const theme = createTheme();

export default function Player_list() {

  const listPlayers = servicioPartida.listplayers('partida1');
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{bgcolor: '#1B1D1F'}}>
          <Typography variant="h6" color="#FF9C30" noWrap>
            Nombre de la partida
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 2, bgcolor: 'black' }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} >
            {listPlayers.map((player) => (
              <Grid item key={player} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#FF9C30'}} 
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h7" component="h4">
                      Jugador: {player[1]}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}