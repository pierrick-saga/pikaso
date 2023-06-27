import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
export declare class EllipseModel extends ShapeModel<Konva.Ellipse, Konva.EllipseConfig> {
    get type(): string;
}
