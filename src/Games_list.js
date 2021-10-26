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

const listgames = [
  {name: "criminales", anfitrion: "Rocio", players: 3}, 
  {name: "detective", anfitrion: "Santiago", players: 5},
  {name: "juego", anfitrion: "Lenadro", players: 2}
];

const Games_list = (props) => (
  <Card {...props}>
    <CardHeader title="Sala del misterio" />
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
                key={games.name}
              >
                <TableCell>
                  {games.name}
                </TableCell>
                <TableCell>
                  {games.anfitrion}
                </TableCell>
                <TableCell>
                  {games.players}
                </TableCell>
                <TableCell>
                  <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{bgcolor: 'black' }}
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

export default Games_list;