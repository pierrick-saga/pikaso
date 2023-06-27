import Konva from 'konva';
import { Board } from '../Board';
import { Dimensions, Nullable, Point } from '../types';
export declare class Tag {
    node: Konva.Label;
    private board;
    private backgroundNode;
    private textNode;
    constructor(board: Board, defaultVisible?: boolean);
    set position(point: Point);
    set text(value: string);
    show(): void;
    hide(): void;
    measure(node: Nullable<Konva.Shape | Konva.Group | Konva.Transformer>, rect?: Dimensions & Point): void;
}
