import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled, Stack } from '@mui/system';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    display: 'inline-block',
    height:'100px',
    borderRadius:'8px',
    border: "1px solid #DDE4EB",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 0 0 0 rgba(90,113,208,0.11)"
  },
  chartContainer: {
    height: '100px',
    width: '81px',
  },
};

const HorizontalCard = ({ number, title,progress ,yaxis }) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data',
        data: yaxis,
        fill: false,
        borderColor: '#6D7CFC',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  return (

    <Card style={styles.root} >
      <Stack direction="row" spacing={2} style={{position:'relative',top:'6px'}}>
        <Box sx={{position:'relative',bottom:'20px'}}>
          <CardContent>
            <Typography sx={{fontSize:'18px'}}  component="h2">
              {number}
            </Typography>
            <Typography sx={{color:'#2B80FF',fontSize:'14px'}} color="textSecondary" gutterBottom>
              {title}
            </Typography>
            <Typography sx={{color:'#495463',fontSize: '12px',position:'relative',bottom:'5px'}} color="textSecondary" gutterBottom>
              {progress}
            </Typography>
          </CardContent>

        </Box>
        <Box>

          <div style={styles.chartContainer}>
            <Line options={options} data={data} />
          </div>

        </Box>


      </Stack>
    </Card>
  );
};

export default HorizontalCard;
