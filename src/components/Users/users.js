import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

function createData(name, conocimiento, años) {
    return { name, conocimiento, años };
}

const rows = [
    createData('Javascript', 7, 1),
    createData('Html', 8, 1),
    createData('Css', 8, 1),
    createData('React', 6, 1),
    createData('Node.JS', 6, 1),

];


const Users = () => {
    return (

        <Grid container spacing={20}>
            <Grid item xs={6} mt={20} ml={50}>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 600 }} aria-label="caption table">

                        <TableHead>
                            <TableRow>
                                <TableCell>Tecnologias usadas</TableCell>
                                <TableCell align="center">Conocimiento&nbsp;(Escala 1 a 10)</TableCell>
                                <TableCell align="center">años</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.conocimiento}</TableCell>
                                    <TableCell align="center">{row.años}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default Users;