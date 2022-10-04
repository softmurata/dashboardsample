import { Grid, Box, Slider, Stack } from '@mui/material'
import React, { useState } from 'react'

interface CalenderTimelineProps {
    width: number,
    height: number
}

export default function CalenderTimeline({width, height}: CalenderTimelineProps) {
    const divNum = 75;
    const items = [...Array(divNum)].map((_, i) => i)
    const [sequenceValue, setSequenceValue] = useState<number>(10)

    const handleSequenceChange = (event: Event, newValue: number | number[]) => {
        setSequenceValue(newValue as number);
      };

    return (
        <React.Fragment>
            <Slider aria-label="Volume" value={sequenceValue} onChange={handleSequenceChange}/>
            <Grid container spacing={0.5}>
                {items.map((item) => (
                    <Grid item>
                        <Box
                        sx={{
                            width: 5,
                            height: 5,
                            backgroundColor: 'red',
                            '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            },
                        }}>
                        </Box>
                    </Grid>
                ))}
                {items.map((item) => (
                    <Grid item>
                        <Box
                        sx={{
                            width: 5,
                            height: 5,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            },
                        }}>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    )
}