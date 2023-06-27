import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
export declare class ImageModel extends ShapeModel<Konva.Image, Konva.ImageConfig> {
    get type(): string;
    rotate(theta: number): void;
}
