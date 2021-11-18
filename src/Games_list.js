import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {servicioPartida} from './servicios/ServicioPartida';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


/*const listgames = [
  {name: "criminales", anfitrion: "Rocio", players: 3}, 
  {name: "detective", anfitrion: "Santiago", players: 5},
  {name: "juego", anfitrion: "Lenadro", players: 2}
];*/

export const Games_list = (props) => {

  const newNickname = props.nickname;
  const getHistory = props.newHistory;

  console.log(newNickname);

//  const handleJoinGame = (gamepick) => {
//    servicioPartida.joinGame(gamepick, newNickname);
//    getHistory.push('/partidas/join',gamepick);
//  }

  const listgames = servicioPartida.listmatch();

  return(
    <Card {...props}>
      <CardHeader title="Sala del misterio" sx={{bgcolor:"#FF9C30"}}/>
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800, bgcolor: "#FF9C30" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Nombre de la partida
                </TableCell>
                <TableCell>
                  Creador
                </TableCell>
                <TableCell>
                  Jugadores
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {listgames.map((games) => (
                <TableRow
                  hover
                  key={games[0]}
                >
                  <TableCell>
                    {games[1]}
                  </TableCell>
                  <TableCell>
                    {games[2]}
                  </TableCell>
                  <TableCell>
                    {games[5]}
                  </TableCell>
                  <TableCell>
                  <Link to='/partidas/join'>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{bgcolor: 'black' }}
                      //onClick={handleJoinGame(games[1])}
                    >
                     Unirse a la partida
                    </Button>
                  </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}
