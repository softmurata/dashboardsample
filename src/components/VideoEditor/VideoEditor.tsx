import { useEffect, useRef, useState } from 'react'
import { ChangeEvent } from 'react';
import { Container } from "@mui/system";
import { Grid, Paper, Typography, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Stack, Chip, TextField, Button, Slider } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ReactPlayer from "react-player";
import { styled } from '@mui/material';
import { SliderThumb } from '@mui/material';
import { Chrono } from "react-chrono";
import { Timeline, TimelineEffect, TimelineRow } from '@xzdarcy/react-timeline-editor';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Divider } from '@mui/material';
import CalenderTimeline from './CalenderTimeline';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CustomTimeline from './CustomTimeline';
import MuiTimeline from './MuiTimeline';


const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 3,
    },
  }));
  
  interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}
  
  function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
        <span className="airbnb-bar" />
      </SliderThumb>
    );
}

const mockData: TimelineRow[] = [{
    id: "0",
    actions: [
      {
        id: "action00",
        start: 0,
        end: 2,
        effectId: "effect0",
      },
    ],
  },
  {
    id: "1",
    actions: [
      {
        id: "action10",
        start: 1.5,
        end: 5,
        effectId: "effect1",
      }
    ],
},
{
    id: "2",
    actions: [
      {
        id: "action12",
        start: 4.5,
        end: 10,
        effectId: "effect1",
      }
    ],
},
]

const mockEffect: Record<string, TimelineEffect> = {
  effect0: {
    id: "effect0",
    name: "tag",
  },
  effect1: {
    id: "effect1",
    name: "dig",
  },
};

const baroptions = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                color: 'rgb(255, 99, 132)'
            }
        }
    }
    
};
const barlabels = ['kick', 'mall', 'try', 'scrum', 'shoot', 'great pass', 'nice defence', 'line detection'];
const bardata = {
  labels: barlabels,
  datasets: [{
    axis: 'y',
    label: '',
    data: [[30, 50], [59, 70], [80, 100], [20, 50], [100, 140], [200, 400], [300, 500], [120, 250]],
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
      'rgba(121, 183, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgb(154, 162, 235)',
    ],
    borderWidth: 1
  }]
};


export default function VideoEditor() {

    const videos = [
        {
            "url": "https://youtu.be/M9mKnmt0YaM",
            "videotime": 5703,
            "cameraNum": 4,
            "tags": ["kick","mall","scrum","try","great pass"],
            "sectags": [
                {"secvalue": 200, "tag": "mall"},
                {"secvalue": 300, "tag": "scrum"},
                {"secvalue": 500, "tag": "try"},
                {"secvalue": 700, "tag": "kick"},
                {"secvalue": 750, "tag": "great pass"}
            ],
            "events": [
                {"tag": "mall", "value": [200 / 5703 * 100]},
                {"tag": "scrum", "value": [300 / 5703 * 100]},
                {"tag": "try", "value": [500 / 5703 * 100]},
                {"tag": "kick", "value": [700 / 5703 * 100]},
                {"tag": "great pass", "value": [750 / 5703 * 100]} 
            ]
        },
        {
            "url": "https://youtu.be/sk1Z-Hqwwog", 
            "videotime": 270,
            "cameraNum": 5,
            "tags": ["kick","try","great pass"],
            "sectags": [
                {"secvalue": 80, "tag": "kick"},
                {"secvalue": 130, "tag": "try"},
                {"secvalue": 200, "tag": "great pass"}
            ],
            "events": [
                {"tag": "mall", "value": []},
                {"tag": "scrum", "value": []},
                {"tag": "try", "value": [130 / 270 * 100]},
                {"tag": "kick", "value": [80 / 270 * 100]},
                {"tag": "great pass", "value": [200 / 270 * 100]} 
            ]
        },
    ]

    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    }, {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    }];
    

    const playerRef = useRef<ReactPlayer | null>(null)
    const clipRef = useRef<ReactPlayer | null >(null)

    const [videoId, setVideoId] = useState('0')
    const [tagId, setTagId] = useState('0')
    const [tagValue, setTagValue] = useState('')

    const [seekValue, setSeekValue] = useState(0)
    const [rangeSeekValue, setRangeSeekValue] = useState([20, 21])

    const [currentTags, setCurrentTags] = useState(videos[Number(videoId)].tags)
    const [currentSecTags, setCurrentSecTags] = useState(videos[Number(videoId)].sectags)



    const toHHMMSS = (secValue: any) => {
        const secInt = parseInt(secValue.toString(), 10)
        const hours = Math.floor(secInt / 3600)
        const minutes = Math.floor((secInt - hours * 3600) / 60)
        const seconds = secInt - 3600 * hours - 60 * minutes

        const formattedHours = hours < 10 ? '0' + hours : hours
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

        if (formattedHours === '00') {
            return formattedMinutes + ':' + formattedSeconds
        }

        return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds

    }

    const [currentEvents, setCurrentEvents] = useState(videos[Number(videoId)].events)



    const handleVideoIdChange = (event: SelectChangeEvent) => {
        setVideoId(event.target.value)
        // Initialize
        setCurrentTags(videos[Number(event.target.value)].tags)
        setCurrentSecTags(videos[Number(event.target.value)].sectags)
        setCurrentEvents(videos[Number(event.target.value)].events)
    }

    const handleTagIdChange = (event: SelectChangeEvent) => {
        setTagId(event.target.value)
    }

    const handleTagValueChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTagValue(event.target.value)
    }

    const handleAddtag = () => {
        setCurrentTags([...currentTags, tagValue])
        setTagValue('')
    }

    const handleSeekSliderChange = (event: Event, newValue: number | number[]) => {
        setSeekValue(newValue as number)
        // ToDo: calculate video time length and change value
        let seektime = videos[Number(videoId)].videotime * Number(newValue) / 100
        playerRef.current?.seekTo(seektime)
    }

    const handleRangeSliderChange = (event: Event, newValue: number | number[]) => {
        setRangeSeekValue(newValue as number[])
    }

    const [duration, setDuration] = useState(0)

    const handleClipVideo = () => {
        const start = rangeSeekValue[0]
        const end = rangeSeekValue[1]
        const startSeekTime = videos[Number(videoId)].videotime * Number(start) / 100
        const endSeekTime = videos[Number(videoId)].videotime * Number(end) / 100
        setDuration(endSeekTime - startSeekTime)
        clipRef.current?.seekTo(startSeekTime)
    }

    const [playing, setPlaying] = useState(true)

    const handlePlayClipVideo = () => {
        const currentTime = clipRef.current?.getCurrentTime()
        const end = rangeSeekValue[1]
        const endSeekTime = videos[Number(videoId)].videotime * Number(end) / 100

        if (currentTime == undefined) {
            setPlaying(false)
        } else if (currentTime >= endSeekTime) {
            setPlaying(false)
        } else {
            setPlaying(true)
        }
    }

    const handleSeek = (seekTime: number) => {
        playerRef.current?.seekTo(seekTime)
    }

    const [time, setTime] = useState(0)

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={0} md={0} lg={0}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        width: 740,
                        height: 550,
                    }}
                    >
                        <Typography>Video</Typography>
                        <Box
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                width: 700, 
                                height: 500 ,
                            }}
                        >
                            <ReactPlayer
                            ref={playerRef}
                            url={videos[Number(videoId)].url}
                            // url={videoUrl[Number(cameraId)]}
                            controls
                            width={640}
                            height={480}
                        />
                            <Box sx={{ p:2, minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Camera and VideoUrl</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={videoId}
                                    label="Video"
                                    onChange={handleVideoIdChange}
                                    >
                                    {/*videoUrl.map((url, idx) => (
                                        <MenuItem value={idx}>{url}</MenuItem>
                                    ))*/}
                                    {videos.map((video, idx) => (
                                        <MenuItem value={idx}>{video.url}</MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            </Box>
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
                            height: 550,
                        }}
                        >
                        <Grid container spacing={3}>
                            <Grid item>
                                <Typography>Tags Generator</Typography>
                                <Stack direction="row" spacing={1}>
                                {currentTags.map((tag, idx) => (
                                    <Chip label={tag} />
                                ))}
                                
                                </Stack>
                            </Grid>
                            <Grid item xs={0}>
                                <Typography>Info</Typography>
                                <Stack direction='column' spacing={1}>
                                
                                    {currentSecTags.map((item, idx) => (
                                        <Typography>
                                            <a href="#" onClick={() => handleSeek(item.secvalue)} style={{ color: "#639bb7"}}>{toHHMMSS(item.secvalue)} - {item.tag}</a>
                                        </Typography>
                                    ))}
                                </Stack>
                            </Grid>
                            <Grid item xs={0}>
                            
                            <Grid container spacing={2}>
                                <Grid item xs={0}>
                                    <Typography>Tags Editor</Typography>
                                </Grid>
                            
                                <Grid item xs={0}>
                                    <Stack direction="row" spacing={3}>
                                        <Box>
                                        {currentTags.map((tag, idx) => (
                                            <Chip label={tag}/>
                                        ))}
                                        </Box>
                                    </Stack>
                                </Grid>
                                <Grid item xs={0}>
                                    <Stack direction="row" spacing={3}>
                                        <TextField id="outlined-basic" label="TagName" variant="outlined" value={tagValue} onChange={handleTagValueChange}/>
                                        <Button aria-label="add" color="primary">
                                            <AddBoxIcon onClick={handleAddtag}/>
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                            
                            
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={0} md={0} lg={0}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        width: 740,
                        height: 450,
                    }}
                    >
                        <Typography>Event Bar</Typography>
                        <Box
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%', 
                                height: '100%' ,
                            }}
                        >
                            
                            {/*currentEvents.map((event, idx) => (
                                <Stack direction="column" spacing={2}>
                                    <Typography>{event.tag}</Typography>
                                    <Slider aria-label={event.tag} value={event.value} />
                                </Stack>
                            ))*/}

                            {/*<Stack>
                                <Chrono mode='HORIZONTAL' items={items} />
                        </Stack>*/}
                            {/*<Stack>
                                <Timeline
                                scale={100}
                                        editorData={mockData}
                                        effects={mockEffect}
                                />
                        </Stack>*/}
                        <Stack>
                            <Bar data={bardata} options={baroptions}/>
                        </Stack>
                           
                        </Box>
                    </Paper>
                </Grid>
                {/*<Grid item xs={0} md={0} lg={0}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        width: 740,
                        height: 450,
                    }}
                    >
                        <Typography>Event Bar</Typography>
                        <Box
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%', 
                                height: '100%' ,
                            }}
                        >
                            
                            
                        <Stack>
                            
                        </Stack>
                           
                        </Box>
                    </Paper>
                        </Grid>*/}
                <Grid item xs={0} md={2} lg={0}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            width: 420, 
                            height: 450,
                        }}
                        >
                        <Typography>Clip Video</Typography>
                        <ReactPlayer
                            ref={clipRef}
                            url={videos[Number(videoId)].url}
                            // url={videoUrl[Number(cameraId)]}
                            playing={playing}
                            controls
                            width={320}
                            height={240}
                            onProgress={handlePlayClipVideo}
                        />
                        <Typography>Seeks Editor</Typography>
                        <Stack direction="row" spacing={1}>
                            <Slider 
                            aria-label="Volume"
                            value={seekValue} 
                            onChange={handleSeekSliderChange} 
                            />
                        </Stack>
                        <Typography gutterBottom>Range Seek Editor</Typography>
                        <Stack direction="row" spacing={1}>
                            <AirbnbSlider
                                components={{ Thumb: AirbnbThumbComponent }}
                                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                                defaultValue={[20, 21]}
                                onChange={handleRangeSliderChange}
                            />
                            <Button color="primary" variant="contained" onClick={handleClipVideo}>Clip</Button>
                        </Stack>
                    </Paper>
                    
                </Grid>
                

            </Grid>
        </Container>
    )
}