import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

interface VideoProps {
    url: string
    ftime: number
    width: number
    height: number
}

export function VideoPlayer({ url, ftime, width, height }: VideoProps) {
    const playerRef = useRef<ReactPlayer | null>(null);

    useEffect(() => {
        playerRef.current?.seekTo(ftime)
    })

    return (

        <ReactPlayer
            ref={playerRef}
            url={url}
            controls
            width={width}
            height={height}
        />
    )
}