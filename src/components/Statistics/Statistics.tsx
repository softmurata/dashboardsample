import { Container, Grid, Paper, Typography } from "@mui/material"
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const data ={
    labels: ["Mon","Tue","Wed","Thu","Fir","Sat","Sun"],
    datasets: [
        {
            label: "Demo line plot",
            backgroundColor: "#008080",
            borderColor: "#7fffd4",
            pointBorderWidth: 10,
            data: [5,6,9,15,30,40,80]
        }
    ]
}

const options: {} = {
    maintainAspectRatio: false,
    responsive: false,
}

export default function Statistics() {
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
                            height: 850,
                        }}
                        >
                    <Typography>Gps Info Chart</Typography>
                    <Line data={data} options={options}/>
                    </Paper>
                </Grid>
                <Grid item xs={0} md={2} lg={0}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            width: 420, 
                            height: 850,
                        }}
                        >
                    <Typography>Gps Info Graph</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}