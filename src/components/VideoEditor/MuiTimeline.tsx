import { Stack, Paper, Typography } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function MuiTimeline() {
    return (
        <div style={{ transform: 'rotate(90deg)'}}>
            <Timeline style={{ transform: "rotate(90deg)" }} position="right">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" style={{ transform: "rotate(-90deg)"}}/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{
                        textAlign: 'left'
                    }}>
                        <Paper sx={{
                            display: "inline-block",
                            transform: "rotate(270deg)",
                            textAlign: "center",
                            minWidth: 50
                        }}>
                            <Typography>Eat</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
        
    )
}