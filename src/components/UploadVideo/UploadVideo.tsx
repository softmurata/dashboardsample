// import BarPlot from "../BarChart/BarChart";
import React, { ChangeEvent, useCallback, useState } from "react";
import { Grid, Paper, Typography, Stack, Button, Box } from "@mui/material"
import { Container, display } from "@mui/system"
import { useDropzone } from "react-dropzone";
import ReactPlayer from "react-player";

import FileUploadIcon from '@mui/icons-material/FileUpload';
import AddIcon from '@mui/icons-material/Add';


const initialState = {
    file: null,
}

export default function UploadVideo() {
    const [videoFileUrl, setVideoFileUrl] = useState("")
    const [videoFileName, setVideoFileName] = useState("")
    const [videoFileSize, setVideoFileSize] = useState(0)
    // ToDo:accept video/mp4, video/mpeg
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const createObjectURL = (window.URL || window.webkitURL).createObjectURL;
        if (acceptedFiles.length != 0) {
            setVideoFileUrl(createObjectURL(acceptedFiles[0]))
            setVideoFileName(acceptedFiles[0].name)
            setVideoFileSize(acceptedFiles[0].size)
            
        }
        // console.log(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive, isDragAccept } = useDropzone({
        onDrop,
    });

    const color = isDragAccept ? "green" : "red";
    const border = isDragActive ? "dashed" : "none";
    const lineWidth = isDragAccept ? '3px': '1px'

    

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
            <Grid item xs={0} md={0} lg={0}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        width: 560, 
                        height: 550,
                    }}
                >
                    <Stack direction="column" spacing={2}>
                    <Typography>DropZone</Typography>
                        <Paper
                            variant="outlined"
                            square
                            {...getRootProps()}
                            style={{
                            width: 500,
                            height: 400,
                            display: "flex",
                            alignItems: "center",
                            padding: 10,
                            border: `${lineWidth} ${color} ${border}`
                            }}
                            
                        >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                    <Typography>Drop some files....</Typography>
                            ) : (
                                <Grid container alignItems='center' justifyContent='center' direction="column">
                                    <Grid item xs={0}>
                                    <AddIcon sx={{
                                        alignContent: 'center',
                                        display: 'flex',
                                    }}/> 
                                    </Grid>
                                </Grid>
                            )}
                            
                            
                        </Paper>
                    </Stack>
                    
                </Paper>
            </Grid>
            <Grid item xs={0} md={0} lg={0}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        width: 560, 
                        height: 550,
                    }}
                >
                    <Typography>Viewer</Typography>
                    <Stack direction="column">
                        <ReactPlayer 
                        url={videoFileUrl}
                        width={480}
                        height={320}
                        />
                        {videoFileSize ? (
                            <React.Fragment>
                                <Typography>Video Info</Typography>
                                <Stack direction="column" spacing={2} alignItems='center'>
                                    
                                    <Typography color="primary">- Name: {videoFileName}- Size: {videoFileSize}</Typography>
                                    <Button variant="contained" style={{ width: '40%'}}>
                                        <FileUploadIcon />
                                        Upload File
                                    </Button>
                                </Stack>
                            </React.Fragment>
                        ) : 
                        (<></>)
                        }
                    </Stack>
                    

                </Paper>
            </Grid>
                {/* file drop zone */}
                {/* video previewer */}
                {/* upload button to s3 */}
                {/*<BarPlot />*/}
            </Grid>
        </Container>
    )
}