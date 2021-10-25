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


function getGames() {
  return [{name: "partida1", anfitrion: "juan", players: 3}, {name: "partida2", anfitrion: "lucia", players: 5}];
}

const theme = createTheme();

export default function Games_list() {

  {/*const listGames = servicioPartida.listmatch();*/}
  var listGames = getGames();
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{bgcolor: '#1B1D1F'}}>
          <Typography variant="h6" color="#FF9C30" noWrap>
            Sala del Misterio
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 2, bgcolor: 'black' }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} >
            {listGames.map((game) => (
              <Grid item key={game} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#FF9C30'}} 
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" >
                      {game.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small"
                      sx={{color: 'black'}}
                    >Unirse a la partida</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}