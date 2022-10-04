import { Stage, Layer, Image} from 'react-konva';
import useImage from 'use-image'
import {Point} from './Point'
import {Scenes} from '../../common/interfaces/clip'

const stageWidth = 530
const stageHeight = 400

export function Field({scenes}: Scenes){
    const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Soccer_field_-_empty.svg/2560px-Soccer_field_-_empty.svg.png'
    const [img] = useImage(url)
    return (
        <Stage width={stageWidth} height={stageHeight}>
          <Layer>
            <Image image={img} width={stageWidth} height={stageHeight}/>
          </Layer>
          <Layer>
            {scenes.points.map((point, idx) => (
                <Point key={idx} x={point.x} y={point.y} radius={4} color={point.color} label={point.label}/>
            ))}
          </Layer>
        </Stage>
    )
}