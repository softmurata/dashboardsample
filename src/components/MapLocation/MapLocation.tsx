import { useState } from 'react'
import { Container, Grid, Paper, Typography, IconButton, Box } from "@mui/material"
import { Field } from "../Field/Field"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import PostList from '../Comments/PostList';

const videoWidth = 480
const videoHeight = 320

const defaultScenes = {
    "points": [
      {
        "x": 200,
        "y": 100,
        "color": "red",
        "label": "1"
      },
      {
        "x": 250,
        "y": 130,
        "color": "red",
        "label": "2"
      },
      {
        "x": 300,
        "y": 140,
        "color": "blue",
        "label": "5"
      },
      {
        "x": 500,
        "y": 300,
        "color": "blue",
        "label": "3"
      }
    ]
}

export default function MapLocation() {

    const [fid, setFid] = useState(0)
    const [scenes, setScenes] = useState(defaultScenes)

    const allscenes = [
        {
          "points": [
            {
              "x": 200,
              "y": 100,
              "color": "red",
              "label": "1"
            },
            {
              "x": 250,
              "y": 130,
              "color": "red",
              "label": "2"
            },
            {
              "x": 300,
              "y": 140,
              "color": "blue",
              "label": "5"
            },
            {
              "x": 500,
              "y": 300,
              "color": "blue",
              "label": "3"
            }
          ]
        },
        {
          "points": [
            {
              "x": 250,
              "y": 100,
              "color": "red",
              "label": "1"
            },
            {
              "x": 250,
              "y": 230,
              "color": "red",
              "label": "2"
            },
            {
              "x": 300,
              "y": 240,
              "color": "blue",
              "label": "5"
            },
            {
              "x": 440,
              "y": 300,
              "color": "blue",
              "label": "3"
            }
          ]
        },
        {
          "points": [
            {
              "x": 250,
              "y": 160,
              "color": "red",
              "label": "1"
            },
            {
              "x": 250,
              "y": 260,
              "color": "red",
              "label": "2"
            },
            {
              "x": 320,
              "y": 240,
              "color": "blue",
              "label": "5"
            },
            {
              "x": 440,
              "y": 350,
              "color": "blue",
              "label": "3"
            }
          ]
        },
        {
          "points": [
            {
              "x": 150,
              "y": 100,
              "color": "red",
              "label": "1"
            },
            {
              "x": 280,
              "y": 220,
              "color": "red",
              "label": "2"
            },
            {
              "x": 380,
              "y": 270,
              "color": "blue",
              "label": "5"
            },
            {
              "x": 440,
              "y": 360,
              "color": "blue",
              "label": "3"
            }
          ]
        }
    ]

    const videourls = [
        "https://youtu.be/M9mKnmt0YaM",
        "https://youtu.be/M9mKnmt0YaM",
        "https://youtu.be/M9mKnmt0YaM",
        "https://youtu.be/M9mKnmt0YaM"
    ]

    const maxfid = allscenes.length - 1
    const fps = 1  // ToDo: get api with video metadata

    const handleClickGo = () => {
        var tmpfid = fid + 1
        if (tmpfid >= maxfid) {
          setFid(maxfid)
          setScenes(allscenes[maxfid])
        } else {
          setFid(fid + 1)
          setScenes(allscenes[fid + 1])
        }
    }
    
    const handleClickBack = () => {
        var tmpfid = fid - 1
        if (tmpfid < 0) {
          setFid(0)
          setScenes(allscenes[0])
        } else {
          setFid(fid - 1)
          setScenes(allscenes[fid - 1])
        }
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
                        width: 550, 
                        height: 510,
                    }}
                    >
                    <Typography>Map</Typography>
                    <Field scenes={scenes}/>
                    <Typography>scene:{fid}</Typography>
                    <Grid item>
                        <IconButton onClick={handleClickBack}>
                            <ArrowBackIosIcon />
                        </IconButton>
                        <IconButton onClick={handleClickGo}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={0} md={0} lg={0}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        width: 550, 
                        height: 510,
                    }}
                    >
                    <Typography>Comment</Typography>
                    <PostList/>
                    </Paper>
                </Grid>
                <Grid item xs={0} md={2} lg={0}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        width: 1120, 
                        height: 850,
                    }}
                    >
                <Typography>MultiAngle Camera</Typography>
                <Grid container spacing={1}>
                    {videourls.map((url, idx) => (
                        <Grid item xs={0}>
                            <Box
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: videoWidth + 20, 
                                    height: videoHeight + 20 ,
                                }}
                                >
                                <Typography>Camera {idx}</Typography>
                                <VideoPlayer
                                    url={url}
                                    ftime={fid * fps}
                                    width={videoWidth}
                                    height={videoHeight}
                                />

                            </Box>
                        </Grid>
                    ))}
                </Grid>
                
                </Paper>
            </Grid>
            </Grid>
        </Container>
    )
}