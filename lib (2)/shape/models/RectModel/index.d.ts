import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
export declare class RectModel extends ShapeModel<Konva.Rect, Konva.RectConfig> {
    get type(): string;
    rotate(theta: number): void;
}
