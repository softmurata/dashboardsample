import { useState, useRef } from "react"
import { Container, Grid, Paper, Typography, Box, Chip, Stack, FormControl, MenuItem, InputLabel, Select, Button, Divider } from "@mui/material"
import { SelectChangeEvent } from "@mui/material";
import ReactPlayer from "react-player";
import PostList from "./PostList";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


export default function Comments() {

    const playerRef = useRef<ReactPlayer | null>(null);
    const [cameraId, setCameraId] = useState('0')

    const handleCameraIdChange = (event: SelectChangeEvent) => {
        setCameraId(event.target.value);
    };

    // ToDo: get video information when initial
    const videoInfos = [
        {
            "url": "https://youtu.be/M9mKnmt0YaM",
            "cameraNum": 4, 
            "tags": ["kick","mall","scrum","try","great pass"],
            "sectags": [
                {"secvalue": 200, "tag": "mall"},
                {"secvalue": 300, "tag": "scrum"},
                {"secvalue": 500, "tag": "try"},
                {"secvalue": 700, "tag": "kick"},
                {"secvalue": 750, "tag": "great pass"}
            ]
        },
        {
            "url": "https://youtu.be/sk1Z-Hqwwog", 
            "cameraNum": 5,
            "tags": ["kick","try","great pass"],
            "sectags": [
                {"secvalue": 80, "tag": "kick"},
                {"secvalue": 130, "tag": "try"},
                {"secvalue": 400, "tag": "great pass"}
            ]
        },
        {
            "url": "https://youtu.be/A_itRNhbgZk",
            "cameraNum": 6,
            "tags": ["mall", "faul", "try", "defence"],
            "sectags": [
                {"secvalue": 10, "tag": "mall"},
                {"secvalue": 50, "tag": "faul"},
                {"secvalue": 150, "tag": "try"},
                {"secvalue": 250, "tag": "defence"}
            ]
        }

    ]

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

    const handleSeek = (seekTime: any) => {
        playerRef.current?.seekTo(seekTime)
    }

    const [commentInputValue, setCommentInputValue] = useState('')


    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={0} md={0} lg={0}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            width: 740, 
                            height: 550,
                        }}
                        >
                    <Typography>Videos</Typography>
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
                        url={videoInfos[Number(cameraId)].url}
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
                                value={cameraId}
                                label="Age"
                                onChange={handleCameraIdChange}
                                >
                                {/*videoUrl.map((url, idx) => (
                                    <MenuItem value={idx}>{url}</MenuItem>
                                ))*/}
                                {videoInfos.map((info, idx) => (
                                    <MenuItem value={idx}>{info.url}</MenuItem>
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
                    <Typography>Videos Tags&Info</Typography>
                    <Stack direction="row" spacing={1}>
                    {videoInfos[Number(cameraId)].tags.map((tag, idx) => (
                        <Chip label={tag} />
                    ))}
                    </Stack>
                    <Typography>Info</Typography>
                    <Stack>
                        {videoInfos[Number(cameraId)].sectags.map((item, idx) => (
                            <Typography>
                                <a href="#" onClick={() => handleSeek(item.secvalue)} style={{ color: "#639bb7"}}>{toHHMMSS(item.secvalue)} - {item.tag}</a>
                            </Typography>
                        ))}
                    </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={0} md={0} lg={0}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            width: 1160, 
                            height: 550,
                        }}
                        >
                        <Stack direction="column" spacing={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <Typography>Comments</Typography>
                            <Divider variant="fullWidth" style={{ margin: "10px 0" }} />
                            <Stack direction="row" spacing={2}>
                                <ReactQuill theme="snow" value={commentInputValue} onChange={setCommentInputValue} style={{ width: 1040, height: 100 }}/>
                                <Button variant="contained" style={{ width: '5%', height: '20%', display: 'flex'}}>Post</Button>
                            </Stack>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <PostList />
                            </Grid>
                            </Grid>
                        </Stack>
                    </Paper>
                </Grid>
               
            </Grid>
        </Container>
    )
}