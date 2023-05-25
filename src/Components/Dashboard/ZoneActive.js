import React from "react";
import { Marker } from "react-leaflet";
import { Box } from '@mui/material';
import MarkerClusterGroup from "react-leaflet-markercluster";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './leaflet.css'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Ouid Zid', 159, '6.0%'),
    createData('Zone 10', 237, '9.0%'),
    createData('Sarhna', 262, '16.0%'),
];

export default function App() {
    return (
        <Box style={{Width:'311px',borderRadius:'8px'}}>
            <MapContainer style={{
                width: '275px', padding: '30px', display: 'block',
                margin: 'auto',height:'200px',borderRadius:'8px'
            }} center={[33.10,-8.6]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[33.10,-8.6]}>


                </Marker>
            </MapContainer>
            <TableContainer component={Paper}>
  <Table sx={{}} aria-label="simple table">
    <TableHead sx={{}}>
      <TableRow sx={{}}>
        {/* Table header content */}
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name} sx={{}}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right"><span style={{ Size: '14px', fontWeight: 'lighter' }}>{row.fat}</span></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


        </Box>

    );
}
