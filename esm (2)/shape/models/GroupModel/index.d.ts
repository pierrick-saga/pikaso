import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
export declare class GroupModel extends ShapeModel<Konva.Group, Konva.ContainerConfig> {
    get type(): string;
    rotate(theta: number): void;
}
