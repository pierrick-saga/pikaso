import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
export declare class LineModel extends ShapeModel<Konva.Line, Konva.LineConfig> {
    get type(): string;
    rotate(theta: number): void;
}
