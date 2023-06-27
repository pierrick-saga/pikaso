import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
export declare class TextModel extends ShapeModel<Konva.Text, Konva.TextConfig> {
    get type(): string;
    rotate(theta: number): void;
}
