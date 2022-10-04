import {Line} from 'react-chartjs-2'
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

export default function BarPlot(){
    return (
        <div>
            <Line data={data} />
        </div>
    )
}