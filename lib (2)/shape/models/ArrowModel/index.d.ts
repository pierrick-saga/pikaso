import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
export declare class ArrowModel extends ShapeModel<Konva.Arrow, Konva.ArrowConfig> {
    get type(): string;
    rotate(theta: number): void;
}
