import React, { useState } from 'react'
import styles from "./styles.module.css";

interface TimelineProps {
    currentTime: number,
    totalDuration: number,
    text: string,
    onSetNewTime: React.Dispatch<React.SetStateAction<number>>,
    height: number,
    width: number,
    padding: number,
    color: string
}

const CustomTimeline = ({
    currentTime = 0,
    totalDuration = 0,
    text,
    onSetNewTime,
    height = 50,
    width = 300,
    padding = 10,
    color = "black",
  }: TimelineProps) => {
    const [mouseEntered, setMouseEntered] = useState(false);
    const [mouseTime, setMouseTime] = useState(0);
    const [mousePercent, setMousePercent] = useState(0);
    return (
      <div
        id="timelineContainer"
        className={styles.timelineContainer}
        style={{
          paddingLeft: `${padding}px`,
          paddingRight: `${padding}px`,
          width,
          height,
        }}
        onMouseEnter={(_) => setMouseEntered(true)}
        onMouseLeave={(_) => setMouseEntered(false)}
        onMouseMoveCapture={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const mousePercent = Math.max(
            0,
            Math.min(
              1,
              (e.clientX - rect.left - padding) / (rect.width - 2 * padding)
            )
          );
          const mouseTime = Math.max(
            0,
            Math.min(totalDuration, totalDuration * mousePercent)
          );
          setMouseTime(mouseTime);
          setMousePercent(mousePercent);
        }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const currentTimePercent =
            (e.clientX - rect.left - padding) / (rect.width - 2 * padding);
            onSetNewTime(totalDuration * currentTimePercent);
        }}
      >
        <div
          id="timelineTimes"
          className={styles.timelineTimes}
          style={{
            color,
            top: height <= 60 ? "1%" : "15%",
          }}
        >
          {`${currentTime} / ${
            totalDuration
          } ${text ? `${text}` : ""}`}
        </div>
        <div className={styles.timelineBar} id="timelineBar">
          {!!mouseEntered && (
            <div
              id="timelineDot"
              className={styles.timelineDot}
              style={{
                left: `calc(${(100 * currentTime) / totalDuration}% - 6px)`,
                background: color,
                color,
              }}
            />
          )}
          {totalDuration !== undefined && totalDuration !== null && (
            <React.Fragment>
              <div
                id="timelineIndicator"
                className={styles.timelineIndicator}
                style={{
                  width: `calc(${(100 * currentTime) / totalDuration}%)`,
                  background: color,
                  color,
                }}
              />
              {!!mouseEntered && (
                <div
                  id="timelineTooltip"
                  className={styles.timelineTooltip}
                  style={{
                    left:
                      height >= 40
                        ? `calc(${100 * mousePercent}% * 0.94)`
                        : "50%",
                    color,
                  }}
                >
                  {mouseTime}
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    );
  };
  
  export default CustomTimeline;