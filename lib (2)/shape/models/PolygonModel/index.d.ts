import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
export declare class PolygonModel extends ShapeModel<Konva.RegularPolygon, Konva.RegularPolygonConfig> {
    get type(): string;
}
