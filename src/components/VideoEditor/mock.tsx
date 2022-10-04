
import { TimelineEffect, TimelineRow, TimelineAction } from '@xzdarcy/react-timeline-editor';
import lottieControl from './lottieControl';
import audioControl from './audioControl';

export interface CustomTimelineAction extends TimelineAction {
    data: {
      src: string;
      name: string;
    };
  }
  
  export interface CusTomTimelineRow extends TimelineRow {
    actions: CustomTimelineAction[];
  }
  
  export const mockEffect: Record<string, TimelineEffect> = {
    effect0: {
      id: 'effect0',
      name: 'Name',
      source: {
        start: ({ action, engine, isPlaying, time }) => {
          if (isPlaying) {
            const src = (action as CustomTimelineAction).data.src;
            audioControl.start({ id: src, src, startTime: action.start, engine, time });
          }
        },
        enter: ({ action, engine, isPlaying, time }) => {
          if (isPlaying) {
            const src = (action as CustomTimelineAction).data.src;
            audioControl.start({ id: src, src, startTime: action.start, engine, time });
          }
        },
        leave: ({ action, engine }) => {
          const src = (action as CustomTimelineAction).data.src;
          audioControl.stop({ id: src, engine });
        },
        stop: ({ action, engine }) => {
          const src = (action as CustomTimelineAction).data.src;
          audioControl.stop({ id: src, engine });
        },
      },
    },
    effect1: {
      id: 'effect1',
      name: 'Name',
      source: {
        enter: ({ action, time }) => {
          const src = (action as CustomTimelineAction).data.src;
          lottieControl.enter({ id: src, src, startTime: action.start, endTime: action.end, time });
        },
        update: ({ action, time }) => {
          const src = (action as CustomTimelineAction).data.src;
          lottieControl.update({ id: src, src, startTime: action.start, endTime: action.end, time });
        },
        leave: ({ action, time }) => {
          const src = (action as CustomTimelineAction).data.src;
          lottieControl.leave({ id: src, startTime: action.start, endTime: action.end, time });
        },
      },
    },
  };
  
  export const mockData: CusTomTimelineRow[] = [
    {
      id: '0',
      actions: [
        {
          id: 'action0',
          start: 9.5,
          end: 16,
          effectId: 'effect1',
          data: {
            src: 't',
            name: 'tennis',
          },
        },
      ],
    },
    {
      id: '1',
      actions: [
        {
          id: 'action1',
          start: 5,
          end: 9.5,
          effectId: 'effect1',
          data: {
            src: 's',
            name: 'soccer',
          },
        },
      ],
    },
    {
      id: '2',
      actions: [
        {
          id: 'action2',
          start: 0,
          end: 5,
          effectId: 'effect1',
          data: {
            src: 'ba',
            name: 'basketball',
          },
        },
      ],
    },
    {
      id: '3',
      actions: [
        {
          id: 'action3',
          start: 0,
          end: 20,
          effectId: 'effect0',
          data: {
            src: 'ba',
            name: 'baseball',
          },
        },
      ],
    },
  ];