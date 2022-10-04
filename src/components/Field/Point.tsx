import { Circle, Group, Text } from 'react-konva';

interface PointProps {
    x: number;
    y: number;
    color?: string;
    radius?: number;
    label?: string;
}
  

export function Point({
    x,
    y,
    color = 'black',
    radius = 10,
    label,
  }: PointProps) {
    return (
      <Group>
        <Circle x={x} y={y} radius={radius} fill={color} />
        {label && <Text text={label} x={x} y={y + 5} fontSize={10} fill={'white'} />}
      </Group>
    );
}
  