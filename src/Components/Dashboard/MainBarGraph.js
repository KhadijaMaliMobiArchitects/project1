import { React, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled, Stack } from '@mui/system';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export default function MainBarGraph() {



    const drops = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7'];

    const [cats, setCats] = useState(['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7']);


    const [age, setAge] = useState('');

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                dispaly:'false'
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 14,
                    },
                },
            },
            x: {
                grid: {
                    display: true,
                },
                ticks: {
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };


    const labels = cats;

    const data = {
        labels,
        datasets: [

            {
                label: 'Categories',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),

                backgroundColor: '#9E86FF',
                borderWidth: 2,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
                barThickness: 15, // Set bar thickness to 8 pixels
            },
        ],
    };


    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value)
        setCats(event.target.value);
    };

    return (

        <>





            <Box sx={{ width: '1031px', padding: '30px',backgroundColor:'white',borderRadius:'8px' }} >


                <Stack direction="row" spacing={2} >
                    <Box sx={{ position: 'relative' }}>
                        <CardContent>
                            <Typography sx={{fontSize: '15px',fontWeight: 'bold'}} variant="h5" component="h2">
                                Nombre des ouvriers
                            </Typography>
                            <Typography sx={{ size:'13px' }} color="textSecondary" gutterBottom>
                                Nombre total des ouvriers sur le site Jorf lasfar
                            </Typography>
                            <Typography color="textSecondary"  gutterBottom>
                                <span style={{fontWeight:'bold'}}> 76 </span>  ouvriers <span style={{color: '#06D186'}}>(+6fevrier)</span>
                            </Typography>
                        
                        </CardContent>
                    </Box>
                </Stack>

                <FormControl fullWidth sx={{ width: '130px', position: 'relative', left: '850.5px',bottom:'100px'}}>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Category"
                        onChange={handleChange}
                    >
                        <MenuItem value={['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7']}>All</MenuItem>
                        {drops.map((category, index) => (
                            <MenuItem key={index} value={[category]}>{category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Bar options={options} data={data} />

            </Box>

        </>

    )
}
