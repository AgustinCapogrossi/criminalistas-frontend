import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { servicioPartida } from './servicios/ServicioPartida';
import { Player_list } from './Player_list';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Create_game } from './Create_game';


const theme = createTheme();

export const Lobby_game = props => {
  //Here we catch the array in props passed by the parent component
  // In the props we have in index 0: the username, and in index 1: the lobby name
  const getProps = props.location.state;

  //Here we spare the username and the lobby name in two variables
  const getUser = getProps[0];
  console.log('GetUser is: ' + getUser);

  const getLobby = getProps[1];
  console.log('GetLobby is: ' + getLobby);

  //Here we create a new variable to know if the user is the Host
  const isAdmin = getProps[2];
  console.log('isAdmin is: ' + isAdmin);

  //Here we catch the close of window event
  window.addEventListener(
    'beforeunload',
    function (e) {
      var confirmationMessage = 'o/';
      servicioPartida.deleteFromLobby(getUser, getLobby);
      (e || window.event).returnValue = confirmationMessage;
      return confirmationMessage;
    },
    { capture: true }
  );

  //Here we catch the button of go back to the games list
  const handleGoBack = () => {
    servicioPartida.deleteFromLobby(getUser, getLobby);
    props.history.push('/partidas', getUser);
  };

  //Here we catch the Start Game.
  const handleStartGame = () => {
    servicioPartida.startGame(getLobby);
    //props.history.push('/game');
  };

  return (
    <Router>
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: '100vh', bgcolor: 'black' }}
      >
        <CssBaseline />
        <Grid item xs={false} sm={4} md={10}>
          <Player_list lobby={getLobby} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={2}
          component={Paper}
          elevation={6}
          square
          sx={{ bgcolor: '#FF9C30' }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#FF9C30',
            }}
          >
            <Box component="form" sx={{ mt: 15, bgcolor: '#FF9C30' }}>
              {isAdmin ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 9, mb: 2, bgcolor: 'black' }}
                  onClick={() => handleStartGame}
                >
                  Iniciar partida
                </Button>
              ) : (
                <div>
                  <p>Waiting for the host to start the game...</p>
                </div>
              )}
              
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 9, mb: 2, bgcolor: 'black' }}
                      onClick={handleGoBack}
                    >
                      Salir de la partida
                    </Button>
              

              <Switch>
                <Route exact path="/partidas" component={Create_game} />
              </Switch>
            
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </Router>
  );
};
