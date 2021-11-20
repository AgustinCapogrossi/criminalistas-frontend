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
import { BrowserRouter as Router, Link } from 'react-router-dom';


export const Games_list = (props) => {

  const newNickname = props.nickname;
  const getHistory = props.newhistory;

  console.log(newNickname);

  const data2pass = []  

  const handleJoinGame = (gamepick) => {
    const isAdmin = false;
    servicioPartida.joinGame(gamepick, newNickname);
    //After to execute the service, we put in array the data to pass to the next page
    //In the first index we put de nickname and in the second index we put the lobby name.
    data2pass.push(newNickname);
    data2pass.push(gamepick);
    data2pass.push(isAdmin);
    getHistory.push('/partidas/join', data2pass);
 }

  const listgames = servicioPartida.listmatch();

  return(
    <Router>
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
                  <Link to='/partidas/join' style={{ textDecoration: 'none' }}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{bgcolor: 'black' }}
                      onClick={()=>{handleJoinGame(games[1])}}
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
    </Router>
  );
}
