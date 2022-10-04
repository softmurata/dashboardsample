import { useState } from 'react'
import {ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Grid, Box, Stack} from '@mui/material'
import ThumbDownIcon from '@mui/icons-material/ThumbDownOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined'

import moment from "moment";
import "moment/locale/ja";

interface CommentPostProps {
    key: number;
    name: string;
    message: string;
    like: number,
    unlike: number,
    created_at: string;
}

export default function Post(props: CommentPostProps) {
    const { key, name, like, unlike, message, created_at } = props;

    const [currentLike, setCurrentLike] = useState(like)
    const [currentUnLike, setCurrentUnLike] = useState(unlike)

    // ToDo
    const [currentLikeClicked, setCurrentLikeClicked] = useState(false)
    const [currentUnLikeClicked, setCurrentUnlikeClicked] = useState(false)

    const handleLike = () => {
        if (currentLikeClicked) {
            setCurrentLikeClicked(false)
            setCurrentLike(currentLike - 1)
            // call api?
        } else {
            setCurrentLikeClicked(true)
            setCurrentLike(currentLike + 1)
            // call api?
        }
    }

    const handleUnLike = () => {
        if (currentUnLikeClicked) {
            setCurrentUnlikeClicked(false)
            setCurrentUnLike(currentUnLike - 1)
            // call api?
        } else {
            setCurrentUnlikeClicked(true)
            setCurrentUnLike(currentUnLike + 1)
            // call api?
        }

    }

    return (
        <div>
            <ListItem alignItems="flex-start" key={key}>
                <ListItemAvatar>
                    <Avatar alt="" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                    <Stack direction='row' spacing={2}>
                        <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                        >
                        {name}
                        </Typography>
                        <Typography
                        component="span"
                        variant="body2"
                        color="textSecondary"
                        >
                            {moment(created_at).fromNow()}
                        </Typography>
                    </Stack>
                    }
                    secondary={
                    <>
                        <Typography
                        component="span"
                        variant="body1"
                        color="textPrimary"
                        >
                        {message}
                        </Typography>
                        <br />
                        <Grid container spacing={3}>
                            <Grid item xs={0}>
                                <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                                    {currentLikeClicked ? (
                                        <ThumbUpIcon
                                        color="action"
                                        fontSize="small"
                                        onClick={handleLike}
                                        />
                                    ) : (
                                        <ThumbUpIcon
                                        color="disabled"
                                        fontSize="small"
                                        onClick={handleLike}
                                        />
                                    )}
                                    <Typography>{currentLike}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={0}>
                                <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                                    {currentUnLikeClicked ? (
                                    <ThumbDownIcon
                                    color="action"
                                    fontSize="small"
                                    onClick={handleUnLike}
                                    />) : (
                                        <ThumbDownIcon
                                    color="disabled"
                                    fontSize="small"
                                    onClick={handleUnLike}
                                    />
                                    )}
                                    <Typography>{currentUnLike}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </>
                    }
                />
            </ListItem>
        </div>
    )
}