import { useRef, useState } from 'react'
import { Timeline, TimelineState } from '@xzdarcy/react-timeline-editor';
import { cloneDeep } from 'lodash';
import TimelinePlayer from './player';
import { CustomRender0, CustomRender1 } from './custom';
import { CustomTimelineAction, CusTomTimelineRow, mockData, mockEffect } from './mock';
import './timeline.less'
import { Typography } from 'antd';

const defaultEditorData = cloneDeep(mockData);

export default function TimelineEditor() {
    const [data, setData] = useState(defaultEditorData);
    const timelineState = useRef<TimelineState>(null);
    const playerPanel = useRef<HTMLDivElement>(null);
    return (
        <div className="timeline-editor-engine">
            <div className="player-panel" id="player-ground-1" ref={playerPanel}></div>
            {/*<TimelinePlayer timelineState={timelineState} />*/}
            <Typography>Event</Typography>
            <Timeline
                scale={20}
                autoScroll={true}
                ref={timelineState}
                editorData={data}
                effects={mockEffect}
                onChange={(data) => {
                setData(data as CusTomTimelineRow[]);
                }}
                getActionRender={(action, row) => {
                if (action.effectId === 'effect0') {
                    return <CustomRender0 action={action as CustomTimelineAction} row={row as CusTomTimelineRow} />;
                } else if (action.effectId === 'effect1') {
                    return <CustomRender1 action={action as CustomTimelineAction} row={row as CusTomTimelineRow} />;
                }
                }}
            />
        </div>
    )
}
