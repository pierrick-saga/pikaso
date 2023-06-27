import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
import type { TriangleConfig } from '../../../types';
export declare class TriangleModel extends ShapeModel<Konva.RegularPolygon, TriangleConfig> {
    get type(): string;
}
