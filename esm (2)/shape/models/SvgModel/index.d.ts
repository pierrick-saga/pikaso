import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
export declare class SvgModel extends ShapeModel<Konva.Path, Konva.PathConfig> {
    get type(): string;
    width(): number;
    height(): number;
    rotate(theta: number): void;
}
