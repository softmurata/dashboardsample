export interface FPoint {
    x: number;
    y: number;
    color: string;
    label: string;
}

export interface FPoints {
    points: FPoint[];
}

export interface Scenes{
    [key: string]: FPoints
}