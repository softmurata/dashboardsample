import { Container, Grid, Paper, Typography, Box } from "@mui/material"
import {Bar, Radar} from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);


const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Statistics',
      },
    },
};

export default function TeamsInfo() {

    var teamschartdata = 
        {
            labels: ['Distance[km]', 'Contact', 'Balltime[s]', 'Shoot', 'Pass', 'GetBall', 'Faul', 'Offside', 'Possesion'],
            datasets: [
            {
                label: 'Jubilo',
                // データの値
                data: [100, 10, 50, 4, 30, 20, 5, 17, 56],
                // グラフの背景色
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(125, 99, 132, 0.2)',
                    'rgba(125, 159, 64, 0.2)',
                    'rgba(125, 205, 86, 0.2)',
                ],
                // グラフの枠線の色
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(125, 99, 132)',
                    'rgb(125, 159, 64)',
                    'rgb(125, 205, 86)',
                ],
                // グラフの枠線の太さ
                borderWidth: 1,
            },
            {
                label: 'Kahima',
                // データの値
                data: [100, 80, 40, 8, 60, 30, 8, 12, 44],
                // グラフの背景色
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(125, 99, 132, 0.2)',
                    'rgba(125, 159, 64, 0.2)',
                    'rgba(125, 205, 86, 0.2)',
                ],
                // グラフの枠線の色
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(125, 99, 132)',
                    'rgb(125, 159, 64)',
                    'rgb(125, 205, 86)',
                ],
                // グラフの枠線の太さ
                borderWidth: 1,
            },
            ],
        }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={0} md={0} lg={0}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            width: 720, 
                            height: 700,
                        }}
                        >
                    <Typography>Teams Chart</Typography>
                    <Box sx={{
                            m: 2,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            width: 650, 
                            height: 480,
                        }}>
                        <Radar data={teamschartdata} /> 
                    </Box>
                    </Paper>
                </Grid>
                <Grid item xs={0} md={2} lg={0}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            width: 420, 
                            height: 700,
                        }}
                        >
                        <Typography variant="h4" color="primary">Statistic Infos</Typography>
                        <Box
                        sx={{
                            m: 2,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            width: 200, 
                            height: 350,
                        }}>
                            <Typography variant="h6" color="secondary">{teamschartdata.datasets[0].label}</Typography>
                            {teamschartdata.labels.map((label, idx) => (
                            <Typography>{label}:{teamschartdata.datasets[0].data[idx]}</Typography>
                            ))}
                        </Box>
                        <Box
                        sx={{
                            m: 2,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            width: 200, 
                            height: 350,
                        }}>
                            <Typography variant="h6" color="secondary">{teamschartdata.datasets[1].label}</Typography>
                            {teamschartdata.labels.map((label, idx) => (
                            <Typography>{label}:{teamschartdata.datasets[1].data[idx]}</Typography>
                            ))}
                        </Box>
                        
                    </Paper>
                </Grid>
                <Grid item xs={0} md={0} lg={0}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            width: 720, 
                            height: 500,
                        }}
                        >
                    <Typography>Teams Graph</Typography>
                    <Box sx={{
                            m: 2,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            width: 650, 
                            height: 580,
                        }}>
                        <Bar data={teamschartdata} options={options}/> 
                    </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}