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


/*const listgames = [
  {name: "criminales", anfitrion: "Rocio", players: 3}, 
  {name: "detective", anfitrion: "Santiago", players: 5},
  {name: "juego", anfitrion: "Lenadro", players: 2}
];*/

export const Games_list = (props) => {

  const newNickname = props.nickname;

  console.log(newNickname);

  const handleJoinGame = () => {
    //servicioPartida.joinGame("partida2", newNickname);

    useEffect(() => {

      ws.onmessage = (e) => { 

        const parsedJson = JSON.parse(e.data);
        
        if (parsedJson.action === 'roll_dice') {
          setDice(parsedJson.dice);
        }
          
      };
    });

  }

  const listgames = []
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
            <TableBody>
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
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{bgcolor: 'black' }}
                    onClick={handleJoinGame}
                  >
                    Unirse a la partida
                  </Button>
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
