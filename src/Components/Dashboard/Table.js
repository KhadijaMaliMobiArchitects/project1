import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Box,Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';


const rows = [
    { name: 'Mehdi Bournazil', CIN: 'ER38399', email: 'Mehdibournazil@outlook.com', zone: '+3zones', Exams: 4.0, status: 'active' },
    { name: 'Mohamed El Tazi', CIN: 'HS38429', email: 'mohamed@outlook.com', zone: '+Zone 1', Exams: 4.3, status: 'active' },
    { name: 'Reda erriyahi', CIN: 'W548999', email: 'redaerriyahi@outlook.com', zone: '+Zone 1', Exams: 6.0, status: 'active' },
    { name: 'Anass moataz', CIN: 'W38079', email: 'anassmotaz@outlook.com', zone: '+3zones', Exams: 4.3, status: 'active' },
    { name: 'Hamza skitioui', CIN: 'BA63499', email: 'hamzaskitioui@outlook.com', zone: '+Direction', Exams: 3.9, status: 'active' },
    { name: 'Omar khamlichi', CIN: 'FG34599', email: 'omarkhamilichi@outlook.com', zone: '+Sarhna', Exams: 3.9, status: 'active' },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    color: '#A7AFB7',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    '& .MuiInputBase-input:focus': {
        width: '20ch',
    },
}));

function filterRows(rows, search) {
    if (!search) {
        return rows;
    }
    return rows.filter((row) => {
        return row.name.toLowerCase().includes(search.toLowerCase())
            || row.CIN.toLowerCase().includes(search.toLowerCase())
            || row.email.toLowerCase().includes(search.toLowerCase())
            || row.zone.toLowerCase().includes(search.toLowerCase())
            || row.Exams.toString().includes(search)
            || row.status.toLowerCase().includes(search.toLowerCase());
    });
}

export default function BasicTable() {
    const [search, setSearch] = React.useState('');
    const filteredRows = filterRows(rows, search);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Box style={{borderRadius:'8px',backgroundColor:'white',padding: '30px', margin: '60px', width: '1031px' }}>
                <Typography sx={{ size: '13px' }} color="textPrimary" gutterBottom>
                    Les ouvriers
                </Typography>
                <Typography sx={{ size: '13px' }} color="textSecondary" gutterBottom>
                    la listes des ouvriers Actif
                </Typography>
                <StyledInputBase style={{
                    left: '700px', position: 'relative',
                    bottom: '40px',

                    boxSizing: 'border-box',
                    height: ' 31px',
                    width: '273px',
                    border: '1px solid #E6E5E6',
                    borderRadius: '2px',
                    backgroundColor: '#FFFFFF'
                }}
                    placeholder="Recherche ouvrier"
                    value={search}
                    onChange={handleSearchChange}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Nom et Prénom</StyledTableCell>
                                <StyledTableCell align="right">CIN</StyledTableCell>
                                <StyledTableCell align="right">email</StyledTableCell>
                                <StyledTableCell align="right">zone</StyledTableCell>
                                <StyledTableCell align="right">Exams</StyledTableCell>
                                <StyledTableCell align="right">status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.CIN}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.zone}</TableCell>
                                    <TableCell align="right">{row.Exams}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}
