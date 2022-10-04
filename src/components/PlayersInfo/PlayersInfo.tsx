import { Typography, CardMedia, Box, Container, Paper, Grid } from "@mui/material"
import {Bar} from 'react-chartjs-2'
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

export default function PlayersInfo() {
    var playersInfo = [
        {
            "name": "tatsuro",
            "url": "https://media.baamboozle.com/uploads/images/132931/1609840428_481800",
            "team": "Kashima",
            "position": "INU",
            "distance": 100,
            "contact": 10,
            "balltime": 5,
            "shoot": 4,
            "pass": 30,
            "getball": 20,
            "chartdata": {
                labels: ['Distance[km]', 'Contact', 'Balltime[s]', 'Shoot', 'Pass', 'GetBall'],
                datasets: [
                {
                    label: 'tatsuro',
                    // データの値
                    data: [100, 10, 50, 4, 30, 20],
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
        },
        {
            "name": "sara",
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/CSKA-RM18_%289%29.jpg/161px-CSKA-RM18_%289%29.jpg",
            "team": "jubilo",
            "position": "NEKO",
            "distance": 90,
            "contact": 10,
            "balltime": 5,
            "shoot": 8,
            "pass": 50,
            "getball": 10,
            "chartdata": {
                labels: ['Distance[km]', 'Contact', 'Balltime[s]', 'Shoot', 'Pass', 'GetBall'],
                datasets: [
                {
                    label: 'sara',
                    // データの値
                    data: [90, 10, 5, 8, 50, 10],
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
        },
    ]


    // const avatarUrl = "https://www.akamai.com/site/im-demo/perceptual-standard.jpg"

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
            {playersInfo.map((player, idx) => {

                return (
                    <Grid item xs={0} md={0} lg={0}>
                            <Grid item xs={0} md={3} lg={0}>
                                <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: 1080, 
                                    height: 350,
                                }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 200 }}
                                        image={player.url}
                                        alt="Live from space album cover"
                                    />
                                    <Box
                                    sx={{
                                        m: 2,
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: 250, 
                                        height: 380,
                                    }}>
                                        <Typography variant='h5' color='primary'>Stats</Typography>
                                        <Typography>Team: {player.team}</Typography>
                                        <Typography>Position: {player.position}</Typography>
                                        <Typography>Name: {player.name}</Typography>
                                        <Typography>Distance: {player.distance} [km]</Typography>
                                        <Typography>Contact: {player.contact}</Typography>
                                        <Typography>BallTime: {player.balltime} [s]</Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        m: 2,
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: 650, 
                                        height: 380,
                                    }}>
                                        <Bar data={player.chartdata} options={options}/>
                                    </Box>
                                </Paper>
                            </Grid>
                    </Grid>
                )
            })}
            </Grid>
        </Container>
    )
}